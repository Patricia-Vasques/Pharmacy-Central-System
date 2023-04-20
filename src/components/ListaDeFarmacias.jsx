import React from "react";
import Modal from "react-modal";
import { Header } from "./Header";
import { Link } from "react-router-dom";
import "./listaDeFarmacias.css";

 
    export function ListaDeFarmacias(){

        const farmaciasCadastradas = [
            {id:1,
                razaoSocial: "",
                cnpj: "",
                nomeFantasia: "",
                emailFarmacia: "",
                telefoneFarmacia: "",
                celularFarmacia: "",
                cepFarmacia: "",
                enderecoFarmacia: "",
                numeroFarmacia: "",
                bairroFarmacia: "",
                cidadeFarmacia: "",
                estadoFarmacia: "",
                complemento: "",}
        ]

        Modal.setAppElement('#root');

        const[modalFarmacias, setFarmacias] = React.useState(false);

        //Abrir o modal
        function abrirModal() {
            setFarmacias(true);
        }

        //Fechar o modal
        function fecharModal(){
            setFarmacias(false);
        }

    
    return (
        <div>

            <Header />

            <div className="text-listaFarmacias">
                <h1 className="text-farmaciasCadastradas"> Farmácias cadastradas</h1>
            </div>
        
        <table className="table-listaFarmacias">
            <thead>
                <tr>
                    <th>Farmácia</th>
                </tr>
        </thead>
        </table>
    
        <Link to="/CadastrarFarmacia">Cadastrar Nova Farmácia</Link>

        <div>
            <button onClick={abrirModal}> Detalhes da Farmácia </button>
            <Modal farmacias = {modalFarmacias}
            onRequestClose={fecharModal}
            contentLabel="Modal Exemplo" >

                <h1>Detalhes</h1>
                <button onClick={fecharModal}>Fechar</button>
                <div>Sou um Modal</div>
            </Modal>
        </div>
        </div>
    )
}

