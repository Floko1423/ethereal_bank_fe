import { useState, useEffect } from 'react'
import * as S from './home.styles'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const [user, setUser] = useState({
    senha: '',
    NIF: '',
    name: '',
  })
//<span>{user.nome}</span>
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [senha, setSenha] = useState('')

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
    const data = { name, senha }
    const headers = {
      'Content-Type': 'application/json',
    }

    try {
      const response = await axios.post('http://localhost:8085/addUser', data, {
        headers,
      })
      console.log(response)
      navigate('/logged')
      /*if(response.status===200){

      }*/
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

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
          <div style={{ flexDirection: 'column', display: 'flex' }}>
            {' '}
            <S.ContainerName>
              <label>Nome:</label>
              <S.Input
                onChange={(event) => setName(event.target.value)}
                type="text"
              ></S.Input>
            </S.ContainerName>{' '}
            <div>
              <label>Password:</label>
              <S.Input
                onChange={(event) => setSenha(event.target.value)}
                type="text"
              ></S.Input>
            </div>
            {senha !== '' && <span>{senha}</span>}
          </div>

          {name !== '' && <span>{name}</span>}

          <div></div>
          <div>
            <S.Button onClick={() => register()}> Registar Cliente </S.Button>
          </div>
        </div>
      </S.ContainerRegister>
    </S.Container>
  )
}
