import { useEffect, useRef } from 'react'

export const useUpdateEffect = (callback, dependencies = []) => {
  const firstRender = useRef(true)

  useEffect(() => {
    if (!firstRender.current) {
      callback()
    } else {
      firstRender.current = false
    }
  }, dependencies)
}
