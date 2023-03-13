import { useState, useEffect } from 'react'
import * as S from './home.styles'
import axios from 'axios'
import { useNavigate } from 'react-router-dom' // useNavigate - hook  -> de acordo com a met bible que tas a usar
import Input from '../../atoms/input/input'
// javascript + html .. e import do css por cima -> maior fluidez, menor separacao que o angular - maior usability

export default function Home() {
  //<span>{user.nome}</span>
  // const [user, setUser] = useState({
  //   senha: '',
  //   nif: '',
  //   name: '',
  //   date_ob:'',
  //   phoneFixed:'',
  //   phoneNo: '',
  //   email:'',
  //   profession:''

  // })
  const navigate = useNavigate() // link/nav para alterar de pags- difs funcionalidades
  const [errorLabel, setErrorLabel] = useState('')

  const [name, setName] = useState('') // sei que o name vai ter string -valor default
  const [nif, setNif] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [dateOb, setDateOB] = useState('')
  const [phoneFixed, setPhoneFixed] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [email, setEmail] = useState('')
  const [profession, setProfession] = useState('')

  //metodo para ver se todos os hooks tao preenchidos para depois validar algo no botao (disabled) -> por enabled no css pesquisar change button disabled with styled components   //criar input para cada
  const getUser = async () => {
    try {
      const response = await axios.get('http://localhost:8085/user ')
      console.log('response', response)
      // eslint-disable-next-line no-undef

      //setUser(response.data[0])
    } catch (error) {
      console.error(error)
    }
  }

  // const tokentest = async () => {
  //   const data = {
  //     nif,
  //     password,
  //   }
  //   const headers = {
  //     'Content-Type': 'application/json',
  //   }

  //   try {
  //     const response = await axios.post(
  //       'http://localhost/auth/login',
  //       data,
  //       {
  //         headers,
  //       }
  //     )
  //     console.log(response)
  //     if (response.status === 201) {
  //       return navigate('/logged')
  //     }
  //     //navigate('/logged')
  //     /*if(response.status===200){

  //     }*/
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  const register = async () => {
    const data = {
      name,
      password,
      confirmPassword,
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
          setName(value)
          return 'Incorrect name format.'
        }

        break
      case 'nif':
        setNif(value)
        if (!nifRegex.test(value)) {
          return 'Invalid NIF.'
        }
        break
      case 'password':
        setPassword(value)
        if (!passwordRegex.test(value)) {
          return 'Invalid password value. Please enter a password that uses the following format:Is at least 8 characters long. Must contain at least one letter. Must contain at least one digit.'
        }

        break
      case 'confirmPassword':
        setConfirmPassword(value)
        if (value != password) {
          return 'Invalid password confirmation value. Please enter the same password value.'
        }
        break

      case 'dateOb':
        setDateOB(value)
        if (!nifRegex.test(value)) {
          return 'Invalid date format.'
        }
        break
      case 'phoneFixed':
        setPhoneFixed(value)
        if (!nifRegex.test(value)) {
          return 'Invalid fixed phone number format.'
        }
        break
      case 'phoneNo':
        setPhoneNo(value)
        if (!nifRegex.test(value)) {
          return 'Invalid mobile phone number format.'
        }
        break
      case 'email':
        setEmail(value)
        if (!emailRegex.test(value)) {
          return 'Incorrect email format.'
        }
        break
      case 'profession':
        setProfession(value)
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
    getUser()
  }, []) //este array permite ter variaveis que ira voltar a correr o que tiver dentro do useEffect caso se alterem.

  return (
    <S.Container>
      <S.Header>
        <h1>Ethereal Bank</h1>
      </S.Header>
      <S.ContainerTitle>
        <h2> Create Account</h2>
      </S.ContainerTitle>
     
      <S.ContainerRegister>
        <div
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <form>
            <S.InputForm>
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
                  onChange={(event) => setPassword(event.target.value)}
                  type="text"
                  label={'password'}
                  value={password}
                  validation={hasError}
                  errorLabel={errorLabel}
                ></Input>
              </S.ContainerInput>
              <S.ContainerInput>
                <Input
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  type="text"
                  label={'confirmPassword'}
                  value={confirmPassword}
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
              {password !== '' && <span>{password}</span>}
            </S.InputForm>
          </form>
          {name !== '' && <span>{name}</span>}

          <div></div>
          <div>
            <S.Button
              onClick={() => register()}
              disabled={errorLabel !== ''}
              type="submit"
            >
              {' '}
              Registar Cliente{' '}
            </S.Button>
          </div>
        </div>
      </S.ContainerRegister>
    </S.Container>
  )
}
