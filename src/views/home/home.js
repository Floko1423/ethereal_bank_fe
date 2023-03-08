import { useState, useEffect } from 'react'
import * as S from './home.styles'
import axios from 'axios'
import { useNavigate } from 'react-router-dom' // useNavigate - hook  -> de acordo com a met bible que tas a usar
import Input from '../../atoms/input/input'
// javascript + html .. e import do css por cima -> maior fluidez, menor separacao que o angular - maior usability

export default function Home() {
  //<span>{user.nome}</span>
  const navigate = useNavigate() // link/nav para alterar de pags- difs funcionalidades
  const [errorLabel, setErrorLabel] = useState('')

  const [name, setName] = useState('') // sei que o name vai ter string -valor default
  const [nif, setNif] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmSenha, setConfirmSenha] = useState('')
  const [dateOb, setDateOB] = useState('')
  const [phoneFixed, setPhoneFixed] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [email, setEmail] = useState('')
  const [profession, setProfession] = useState('')

  //criar input para cada
  // const getUser = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:8085/user ')
  //     console.log('response', response)
  //     setUser(response.data[0])
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  const register = async () => {
    const data = {
      name,
      senha,
      confirmSenha,
      nif,
      dateOb,
      phoneFixed,
      phoneNo,
      email,
      profession,
    }
    const headers = {
      'Content-Type': 'application/json',
    }

    try {
      const response = await axios.post('http://localhost:8085/addUser', data, {
        headers,
      })
      console.log(response)
      if (response.status === 201) {
        return navigate('/logged')
      }
      //navigate('/logged')
      /*if(response.status===200){

      }*/
    } catch (error) {
      console.error(error)
    }
  }

  const hasError = (value, label) => {
    //setName(value)
    const aux = validation(value, label)
    setErrorLabel(aux)
    return aux
    // validation(value, label)
  }

  const validation = (value, label) => {
    //if (value === '') return true
    //return false
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const nifRegex = /^[1-9][0-9]{8}$/
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    switch (label) {
      case 'name':
        if (name.length < 2) {
          return 'Incorrect name format.'
        }

        break
      case 'nif':
        if (!nifRegex.test(value)) {
          return 'Invalid NIF.'
        }
        break
      case 'senha':
        if (!passwordRegex.test(value)) {
          return 'Invalid password value. Please enter a password that uses the following format:Is at least 8 characters long. Must contain at least one letter. Must contain at least one digit.'
        }

        break
      case 'confirmSenha':
        if (confirmSenha !== senha) {
          return 'Invalid password confirmation value. Please enter the same password value.'
        }
        break

      case 'dateOb':
        if (!nifRegex.test(value)) {
          return 'Invalid date format.'
        }
        break
      case 'phoneFixed':
        if (!nifRegex.test(value)) {
          return 'Invalid fixed phone number format.'
        }
        break
      case 'phoneNo':
        if (!nifRegex.test(value)) {
          return 'Invalid mobile phone number format.'
        }
        break
      case 'email':
        if (!emailRegex.test(value)) {
          return 'Incorrect email format.'
        }
        break
      case 'profession':
        if (!nifRegex.test(value)) {
          return 'Invalid profession field format.'
        }
        break
      //add more cases for other types of validations
      default:
        // if the type parameter is not recognized, return a generic error message
        return ''
    }

    // if no error was found, return an empty string
    return ''
  }

  useEffect(() => {
    //use effect para correr metodos logo no ecrã em que entro
    //getUser()
  }, []) //este array permite ter variaveis que ira voltar a correr o que tiver dentro do useEffect caso se alterem.

  return (
    <S.Container>
      <S.Header>
        <h1>Ethereal Bank</h1>
      </S.Header>
      <S.ContainerRegister>
        <div
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <h2> Create Account</h2>
          </div>
          <form>
            <div style={{ flexDirection: 'column', display: 'flex' }}>
              {' '}
              <S.ContainerInput>
                <Input
                  onChange={(event) => setName(event.target.value)}
                  type="text"
                  label={'name'}
                  value={name}
                  validation={hasError}
                  errorLabel={errorLabel}
                ></Input>
              </S.ContainerInput>
              <S.ContainerInput>
                <Input
                  onChange={(event) => setNif(event.target.value)}
                  type="text"
                  label={'nif'}
                  value={nif}
                  validation={hasError}
                  errorLabel={errorLabel}
                ></Input>
              </S.ContainerInput>
              <S.ContainerInput>
                <Input
                  onChange={(event) => setSenha(event.target.value)}
                  type="text"
                  label={'senha'}
                  value={senha}
                  validation={hasError}
                  errorLabel={errorLabel}
                ></Input>
              </S.ContainerInput>
              <S.ContainerInput>
                <Input
                  onChange={(event) => setConfirmSenha(event.target.value)}
                  type="text"
                  label={'confirmSenha'}
                  value={confirmSenha}
                  validation={hasError}
                  errorLabel={errorLabel}
                ></Input>
              </S.ContainerInput>
              <S.ContainerInput>
                <Input
                  onChange={(event) => setDateOB(event.target.value)}
                  type="text"
                  label={'dateOb'}
                  value={dateOb}
                  validation={hasError}
                  errorLabel={errorLabel}
                ></Input>
              </S.ContainerInput>
              <S.ContainerInput>
                <Input
                  onChange={(event) => setPhoneFixed(event.target.value)}
                  type="text"
                  label={'phoneFixed'}
                  value={phoneFixed}
                  validation={hasError}
                  errorLabel={errorLabel}
                ></Input>
              </S.ContainerInput>
              <S.ContainerInput>
                <Input
                  onChange={(event) => setPhoneNo(event.target.value)}
                  type="text"
                  label={'phoneNo'}
                  value={phoneNo}
                  validation={hasError}
                  errorLabel={errorLabel}
                ></Input>
              </S.ContainerInput>
              <S.ContainerInput>
                <Input
                  onChange={(event) => setEmail(event.target.value)}
                  type="text"
                  label={'email'}
                  value={email}
                  validation={hasError}
                  errorLabel={errorLabel}
                ></Input>
              </S.ContainerInput>
              <S.ContainerInput>
                <Input
                  onChange={(event) => setProfession(event.target.value)}
                  type="text"
                  label={'profession'}
                  value={profession}
                  validation={hasError}
                  errorLabel={errorLabel}
                ></Input>
              </S.ContainerInput>
              {senha !== '' && <span>{senha}</span>}
            </div>
          </form>
          {name !== '' && <span>{name}</span>}

          <div></div>
          <div>
            <S.Button onClick={() => register()} type="submit">
              {' '}
              Registar Cliente{' '}
            </S.Button>
          </div>
        </div>
      </S.ContainerRegister>
    </S.Container>
  )
}
