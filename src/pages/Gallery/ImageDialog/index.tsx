import React from 'react'
import { observer } from 'mobx-react-lite'
import { Dialog, CircularProgress } from '@material-ui/core'

import DetailView from './DetailView'

import { ImagesStore } from '../../../store/images'

interface Props {
  images: ImagesStore
}

function ImageDialog({ images }: Props) {
  function handleClose() {
    images.clearDetails()
  }

  return (
    <Dialog fullScreen open={Boolean(images.details)} onClose={handleClose}>
      {images.isDetailsLoading ? <CircularProgress /> : <DetailView images={images} />}
    </Dialog>
  )
}

export default observer(ImageDialog)
