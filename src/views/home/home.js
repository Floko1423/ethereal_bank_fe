import { useState, useEffect } from 'react'
import * as S from './home.styles'
import axios from 'axios'
import { useNavigate } from 'react-router-dom' // useNavigate - hook  -> de acordo com a met bible que tas a usar
import Input from '../../atoms/input/input'
// javascript + html .. e import do css por cima -> maior fluidez, menor separacao que o angular - maior usability

export default function Home() {
  const [user, setUser] = useState({
    senha: '',
    nif: '',
    name: '',
    date_ob:'',
    phoneFixed:'',
    phoneNo: '',
    email:'',
    profession:''

  })
  //<span>{user.nome}</span>
  const navigate = useNavigate() // link/nav para alterar de pags- difs funcionalidades

  const [name, setName] = useState('') // sei que o name vai ter string -valor default
  const [errorLabel, setErrorLabel] = useState('')
  const [nif, setNif] = useState('')
  const [senha, setSenha] = useState('')
  const [date_ob, setDateOB] = useState('')
  const [phone_fixed, setPhoneFixed] = useState('')
  const [phone_no, setPhoneNo] = useState('')
  const [email, setEmail] = useState('')
  const [profession, setProfession] = useState('')
  
//criar input para cada
  const getUser = async () => {
    try {
      const response = await axios.get('http://localhost:8085/user ')
      console.log('response', response)
      setUser(response.data[0])
    } catch (error) {
      console.error(error)
    }
  }

  const register = async () => {
    const data = { name, senha, nif }
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
    setName(value)
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

    switch (label) {
      case 'email':
        if (!emailRegex.test(value)) {
          return 'Incorrect email format.'
        }
        break
      case 'nif':
        if (!nifRegex.test(value)) {
          return 'Invalid NIF.'
        }
        break
      // add more cases for other types of validations
      default:
        // if the type parameter is not recognized, return a generic error message
        return 'Invalid input.'
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
      {user.nome !== ''}
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
                  label={'nif'}
                  value={name}
                  validation={hasError}
                  errorLabel={errorLabel}
                ></Input>
              </S.ContainerInput>
              <S.ContainerInput>
                <Input
                  onChange={(event) => setSenha(event.target.value)}
                  type="text"
                  label={'email'}
                  value={name}
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
