import './App.css'
import GlobalStyle from './global.styles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/home/home'
import Logged from './views/logged/logged'
// no react as rotas sao instaladas, temos de importar tudo, angular dif

// a fazer o ficheiro navegacao com o BrowserRouter e chamar aqui
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logged" element={<Logged />} />
        </Routes>
      </BrowserRouter>
      {/* <Navigation /> */}
    </>
  )
}

export default App
