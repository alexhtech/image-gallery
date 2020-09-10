import axios from 'axios'
import createAuthRefreshInterceptor from 'axios-auth-refresh'
import { auth } from './auth'

export function setupAxios() {
  axios.defaults.baseURL = process.env.APP_API_URL
  axios.defaults.headers.common.authorization = window.localStorage.getItem('token')

  createAuthRefreshInterceptor(axios, async (failedRequest) => {
    const { data } = await auth(String(process.env.APP_API_KEY))
    if (data.auth && data.token) {
      window.localStorage.setItem('token', data.token)
      failedRequest.response.config.headers.authorization = data.token
    } else {
      throw new Error('Unauthorized')
    }
  })
}
