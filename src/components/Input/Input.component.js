import React from 'react'
import { InputContainer, StyledInput, Label } from './Input.styled'
import { capitalize } from '../../utils/string.utils'

export const Input = ({ name, value, onChange, ...props }) => {
  return (
    <InputContainer>
      <Label htmlFor={name}>{capitalize(name)}</Label>
      <StyledInput name={name} value={value} onChange={onChange} {...props} />
    </InputContainer>
  )
}
