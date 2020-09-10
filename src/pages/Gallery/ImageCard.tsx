import React, { useEffect, memo } from 'react'
import { Card, CardActionArea } from '@material-ui/core'
import { useInView } from 'react-intersection-observer'

import { StyledCardMedia } from './styled'

import { Picture } from '../../api/images'
import { useStore } from '../../store/useStore'

interface Props {
  data: Picture
  lastInBatch: boolean
}

function ImageCard({ data, lastInBatch }: Props) {
  const { images } = useStore()
  const { ref, inView } = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView && lastInBatch) {
      images.loadMore({ page: images.page + 1 })
    }
  }, [inView])

  function handleImageClick() {
    images.fetchDetails(data.id)
  }

  return (
    <Card ref={ref}>
      <CardActionArea onClick={handleImageClick}>
        <StyledCardMedia image={data.cropped_picture} />
      </CardActionArea>
    </Card>
  )
}

export default memo(ImageCard)
