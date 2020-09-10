import { createContext, useContext } from 'react'

import { RootStore } from '.'

const context = createContext<RootStore>({} as RootStore)

export const Provider = context.Provider

export function useStore() {
  return useContext(context)
}
