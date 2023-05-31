import React from "react";
import { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { NovoUsuario } from "./components/NovoUsuario";
import { ListaDeFarmacias } from "./components/ListaDeFarmacias";
import { CadastrarFarmacia } from "./components/CadastrarFarmacia";
import { CadastroMedicamentos } from "./components/CadastroMedicamentos";
import { ListaDeMedicamentos } from "./components/ListaDeMedicamentos"

function App() {

  
  //Estado
  // useState que inicia com array vazio para futuramente receber o array de farmácias
  const [farmacias, setFarmacias] = useState([]);


  //useEffect com array vazio, pois só vai executar a primeira aplicação carregar
  //Busca as farmácias no localStorage e se esxistir da um setFarmacias para guardar as farmacias do storage no useState
  useEffect(() => {
   const lista = JSON.parse(localStorage.getItem('listaFarmacias')) || []

   setFarmacias(lista)
  }, []);

  const [listaMedicamentos, setListaMedicamentos] =useState([]);

  useEffect(() => {
    const listaMedicamentosDoStorage = localStorage.getItem('listaMedicamentos')
  if(listaMedicamentosDoStorage){
    setListaMedicamentos(JSON.parse(listaMedicamentosDoStorage))
  }
}, []);

  //função para receber uma farmácia como argumento e adiciona ao estado junto com as farmácias que estão lá
  const cadastrarFarmacia = (farmacia) => {
    setFarmacias([...farmacias, farmacia])
  }

  const cadastrarMedicamento = (listaMedicamentos) =>{
    setListaMedicamentos([...listaMedicamentos, listaMedicamentos])
  }

  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/NovoUsuario" element={<NovoUsuario />} />.ll
          <Route path="/ListaDeFarmacias" element={<ListaDeFarmacias />} />
          <Route path="/CadastrarFarmacia" element={<CadastrarFarmacia />} />
          <Route path="/CadastroMedicamentos" element={< CadastroMedicamentos quandoCadastrar={cadastrarMedicamento}/>} />
          <Route path="/ListaDeMedicamentos" element={< ListaDeMedicamentos />} />
          <Route path="/CadastrarFarmacia" element={<CadastrarFarmacia quandoAdicionar={cadastrarFarmacia} />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
