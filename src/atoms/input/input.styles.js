import styled from 'styled-components'
import { colors } from '../../shared/colors'

const Input = styled.input`
  border: none;
  border-radius: 5px;
  padding: 10px;
  background-color: #f7f7f7;
  font-size: 16px;
  color: #333;
  width: 60%;
  align-self: center;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px ${colors.green};
  }
`
const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Container = styled.div`
  flex-direction: column;
  display: flex;
`
const ContainerError = styled.div`
  margin-top: 1rem;
`
const Error = styled.p`
  color: red;
`



export { Input, ContainerInput, Container, ContainerError, Error }
