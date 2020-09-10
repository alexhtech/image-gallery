import { observable, action, runInAction } from 'mobx'

import { Picture, getImages, GetImagesParams, getImage, PictureDetails } from '../api/images'

export class ImagesStore {
  @observable
  items: Picture[] = []

  @observable
  details?: PictureDetails

  @observable
  hasMore = false

  @observable
  page = 0

  @observable
  isLoading = false

  @observable
  isMoreLoading = false

  @observable
  isDetailsLoading = false

  @action
  async fetchImages(params?: GetImagesParams) {
    this.isLoading = true
    const result = await getImages(params)

    runInAction(() => {
      this.items = result.data.pictures
      this.hasMore = result.data.hasMore
      this.page = result.data.page
      this.isLoading = false
    })
  }

  @action
  async loadMore(params: GetImagesParams) {
    this.isMoreLoading = true
    const result = await getImages(params)

    runInAction(() => {
      this.items = [...this.items, ...result.data.pictures]
      this.hasMore = result.data.hasMore
      this.page = result.data.page
      this.isMoreLoading = false
    })
  }

  @action
  async fetchDetails(id: string) {
    this.isDetailsLoading = true
    const result = await getImage(id)

    runInAction(() => {
      this.details = result.data
      this.isDetailsLoading = false
    })
  }

  @action
  clearDetails() {
    this.details = undefined
  }
}
