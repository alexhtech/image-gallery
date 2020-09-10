import axios from 'axios'

interface CollectionResponse {
  page: number
  pageCount: number
  hasMore: boolean
}

export interface Picture {
  id: string
  cropped_picture: string
}

export interface GetImagesParams {
  page?: number
}

export interface ImagesResponse extends CollectionResponse {
  pictures: Picture[]
}

export function getImages(params?: GetImagesParams) {
  return axios.get<ImagesResponse>('/images', {
    params,
  })
}

export interface PictureDetails extends Picture {
  author: string
  camera: string
  tags: string
  full_picture: string
}

export function getImage(id: string) {
  return axios.get<PictureDetails>(`/images/${id}`)
}
