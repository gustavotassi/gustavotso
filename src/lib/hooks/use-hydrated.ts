'use client'

import { useSyncExternalStore } from 'react'

const subscribe = () => () => {}

/** False while rendering on the server, true once the client has hydrated. */
export function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  )
}
