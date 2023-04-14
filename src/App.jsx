import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Login } from "./components/Login"
import { NovoUsuario } from "./components/NovoUsuario"
import './App.css'

function App() {
  

  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/NovoUsuario" element={<NovoUsuario />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
