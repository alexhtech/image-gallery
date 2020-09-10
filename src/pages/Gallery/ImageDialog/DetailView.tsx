import React from 'react'
import useKey from '@rooks/use-key'
import { DialogActions, DialogContent, Button, Typography } from '@material-ui/core'

import { StyledCardMedia, Description } from './styled'

import { ImagesStore } from '../../../store/images'

interface Props {
  images: ImagesStore
}

function DetailView({ images }: Props) {
  const hasNext = images.hasMore || (images.details && images.items[images.items.length - 1].id !== images.details.id)
  const hasPrevious = images.details && images.items[0].id !== images.details.id

  useKey('ArrowLeft', () => {
    if (hasPrevious) {
      const index = images.items.findIndex((item) => item.id === images.details?.id)

      if (index !== -1) {
        images.fetchDetails(images.items[index - 1].id)
      }
    }
  })

  useKey('ArrowRight', async () => {
    if (hasNext) {
      const index = images.items.findIndex((item) => item.id === images.details?.id)

      if (index !== -1) {
        if (images.items.length - 1 === index) {
          await images.loadMore({ page: images.page + 1 })
        }

        images.fetchDetails(images.items[index + 1].id)
      }
    }
  })

  function handleClose() {
    images.clearDetails()
  }

  if (!images.details) return null

  return (
    <>
      <DialogContent>
        <StyledCardMedia image={images.details?.full_picture} />
        <Description>
          <Typography variant="h6">Author: {images.details?.author}</Typography>
          <Typography variant="h6">Camera: {images.details?.camera}</Typography>
          <Typography variant="h6" gutterBottom>
            hashtags: {images.details?.tags}
          </Typography>

          <Typography variant="body2">Use arrows to back and forward</Typography>
        </Description>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </>
  )
}

export default DetailView
