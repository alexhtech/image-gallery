import React from 'react'
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config'
import { Container } from '@material-ui/core'

import Header from './Header'

function Root(props: RouteConfigComponentProps) {
  return (
    <>
      <Header />
      <Container maxWidth="xl">{renderRoutes(props.route?.routes)}</Container>
    </>
  )
}

export default Root
