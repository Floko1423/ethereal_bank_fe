import './App.css'
import GlobalStyle from './global.styles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/home/home'
import Logged from './views/logged/logged'

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
