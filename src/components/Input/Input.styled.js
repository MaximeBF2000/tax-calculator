import styled from 'styled-components'

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }
`

export const Label = styled.label`
  margin-bottom: 0.5rem;
`

export const StyledInput = styled.input`
  width: 100%;
  font-size: 1.2rem;
  padding: 0.5rem;
  outline: none;
  border: none;
  border-radius: 0.25rem;
`
