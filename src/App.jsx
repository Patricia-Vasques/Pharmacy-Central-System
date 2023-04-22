import React from "react"
import { useState, useEffect } from "react"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Login } from "./components/Login"
import { NovoUsuario } from "./components/NovoUsuario"
import { ListaDeFarmacias } from "./components/ListaDeFarmacias"
import { CadastrarFarmacia } from "./components/CadastrarFarmacia"
import { CadastroMedicamentos } from "./CadastroMedicamentos"

import './App.css'

function App() {

  
  //Estado
  // useState que inicia com array vazio para futuramente receber o array de farmácias
  const [farmacias, setFarmacias] = useState([]);

  //useEffect com array vazio, pois só vai executar a primeira aplicação carregar
  //Busca as farmácias no localStorage e se esxistir da um setFarmacias para guardar as farmacias do storage no useState
  useEffect(() => {
    const farmaciasDoStorage = localStorage.getItem('farmacias')
    if(farmaciasDoStorage) {
      setFarmacias(JSON.parse(farmaciasDoStorage))
    }
  }, []);

  //função para receber uma farmácia como argumento e adiciona ao estado jutno com as farmácias que estão lá
  const cadastrarFarmacia = (farmacia) => {
    setFarmacias([...farmacias,farmacia])
  }
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/NovoUsuario" element={<NovoUsuario />} />
          <Route path="/ListaDeFarmacias" element={<ListaDeFarmacias />} />
          <Route path="/CadastrarFarmacia" element={<CadastrarFarmacia />} />
          <Route path="/CadastroMedicamentos" element={< CadastroMedicamentos />} />
          <Route path="/ListaDeFarmacias" element={<ListaDeFarmacias lista={farmacias} />} />
          <Route path="/CadastrarFarmacia" element={<CadastrarFarmacia cadastrarFarmacia={cadastrarFarmacia} />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
