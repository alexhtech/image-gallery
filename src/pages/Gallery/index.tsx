import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { CircularProgress, Grid } from '@material-ui/core'

import ImageCard from './ImageCard'

import { useStore } from '../../store/useStore'
import { Content } from '@pages/styled'
import ImageDialog from './ImageDialog'

function GalleryPage() {
  const { images } = useStore()
  useEffect(() => {
    images.fetchImages()
  }, [])

  if (images.isLoading) {
    return (
      <Grid container justify="center">
        <CircularProgress />
      </Grid>
    )
  }

  return (
    <Content>
      <Grid spacing={3} container>
        {images.items.map((item, index, arr) => (
          <Grid key={item.id} item xl={3} lg={4} md={6} sm={6} xs={12}>
            <ImageCard data={item} lastInBatch={arr.length - 1 === index} />
          </Grid>
        ))}
      </Grid>
      <ImageDialog images={images} />
    </Content>
  )
}

export default observer(GalleryPage)
