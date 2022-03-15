import { useState } from 'react'
import { numberify, pipe } from './functions.utils'
import {
  COTISATION_POURCENTAGE,
  FORMATION_POURCENTAGE,
} from '../compagny.config'

export const useBrutNetTransform = () => {
  const [brut, setBrut] = useState(0)
  const [minusCotisations, setMinusCotisations] = useState(
    brut - COTISATION_POURCENTAGE * brut
  )
  const [net, setNet] = useState(
    minusCotisations - FORMATION_POURCENTAGE * minusCotisations
  )

  const brutToNetTransformation = [
    c => {
      const current = numberify(c)
      const newValue = current - COTISATION_POURCENTAGE * current
      setMinusCotisations(newValue)
      return [newValue, current]
    },
    ([c, rootBrut]) => {
      const current = numberify(c)
      const newValue = current - FORMATION_POURCENTAGE * rootBrut
      if (net !== newValue) setNet(newValue)
      return newValue
    },
  ]

  const netToBrutTransformation = [
    c => {
      const current = numberify(c)
      const newValue =
        current +
        FORMATION_POURCENTAGE *
          (current / (1 - (COTISATION_POURCENTAGE + FORMATION_POURCENTAGE)))
      setMinusCotisations(newValue)
      return current
    },
    rootNet => {
      const newValue =
        rootNet / (1 - (COTISATION_POURCENTAGE + FORMATION_POURCENTAGE))
      if (brut !== newValue) setBrut(newValue)
      return newValue
    },
  ]

  const netFromBrut = pipe(...brutToNetTransformation)
  const brutFromNet = pipe(...netToBrutTransformation)

  return {
    brut,
    setBrut,
    minusCotisations,
    setMinusCotisations,
    net,
    setNet,
    netFromBrut,
    brutFromNet,
  }
}
