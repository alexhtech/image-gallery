import axios from 'axios'

interface AuthResponse {
  auth: boolean
  token: string | null
}

export function auth(apiKey: string) {
  return axios.post<AuthResponse>('/auth', {
    apiKey,
  })
}
