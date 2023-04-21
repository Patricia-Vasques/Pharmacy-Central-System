import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Login } from "./components/Login"
import { NovoUsuario } from "./components/NovoUsuario"
import { ListaDeFarmacias } from "./components/ListaDeFarmacias"
import { CadastrarFarmacia } from "./components/CadastrarFarmacia"
import { CadastroMedicamentos } from "./CadastroMedicamentos"
import './App.css'

function App() {
  

  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/NovoUsuario" element={<NovoUsuario />} />
          <Route path="/ListaDeFarmacias" element={<ListaDeFarmacias />} />
          <Route path="/NovoUsuario/Login" element={<Login />} />
          <Route path="/CadastrarFarmacia" element={<CadastrarFarmacia />} />
          <Route path="/CadastroMedicamentos" element={< CadastroMedicamentos />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
