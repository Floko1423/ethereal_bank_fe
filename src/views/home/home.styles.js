import styled from 'styled-components'
import { colors } from '../../shared/colors'

const Container = styled.div`
  text-align: left;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-color: grey;
`

const Header = styled.header`
  background-color: ${colors.green};
  min-height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 1rem 2rem 1rem 2rem;
`
const ContainerRegister = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 2rem 5rem 2rem 5rem;
  height: 30rem;
  width: 30%;
  justify-content: space-between;
  align-self: center;
  display: flex;
  background-color: white;
  margin-top: 3rem;
`

const ContainerInput = styled.div`
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
`

const Input = styled.input`
  border: none;
  border-radius: 5px;
  padding: 10px;
  background-color: #f7f7f7;
  font-size: 16px;
  color: #333;
  width: 60%;
  width: 100%;


  &:focus {
    outline: none;
    box-shadow: 0 0 5px ${colors.green};
  }
`
const Button = styled.button`
  background-color: ${colors.green};
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0d8edf;
  }
`

export { Container, Header, ContainerRegister, ContainerInput, Input, Button }
