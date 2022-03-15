import React from 'react'
import { Input } from '../components'
import { MainContainer, Title } from '../components/MainContainer.styled'
import { nil, numberify } from '../utils/functions.utils'
import { useBrutNetTransform } from '../utils/useBrutNetTransformation.hook'

const Index = () => {
  const {
    brut,
    setBrut,
    net,
    setNet,
    minusCotisations,
    netFromBrut,
    brutFromNet,
  } = useBrutNetTransform()

  const handleBrutChange = e => {
    const newBrut = numberify(e.target.value)
    setBrut(e.target.value)
    netFromBrut(newBrut)
  }

  const handleNetChange = e => {
    const newNet = numberify(e.target.value)
    setNet(e.target.value)
    brutFromNet(newNet)
  }

  return (
    <div className="globalContainer">
      <MainContainer>
        <Title>Freelance - Brut to net converter</Title>
        <Input
          name="brut"
          value={brut}
          onChange={handleBrutChange}
          type="number"
        />
        {/* <Input
          name="minusCotisations"
          value={minusCotisations}
          onChange={nil}
          type="number"
          disabled
        /> */}
        <Input
          name="net"
          value={net}
          onChange={handleNetChange}
          type="number"
        />
      </MainContainer>
    </div>
  )
}

export default Index
