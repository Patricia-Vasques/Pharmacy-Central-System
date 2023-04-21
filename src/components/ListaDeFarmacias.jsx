import React from "react";
import Modal from "react-modal";
import { Header } from "./Header";
import { Link } from "react-router-dom";
import "./listaDeFarmacias.css";

    export function ListaDeFarmacias(){

        //Criar uma lista das farmácias 
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

        const ListaNova = farmaciasCadastradas.map((farmacia)=>{
            return farmacia.razaoSocial +" "+ farmacia.cnpj +" "+  farmacia.nomeFantasia +" "+farmacia.emailFarmacia +" "+ farmacia.telefoneFarmacia +" "+ farmacia.celularFarmacia
            +" "+ farmacia.cepFarmacia +" "+ farmacia.enderecoFarmacia +" "+ farmacia.numeroFarmacia  +" "+ farmacia.bairroFarmacia +" "+farmacia.cidadeFarmaciav
            +" "+ farmacia.estadoFarmacia +" "+ farmacia.complemento
        });
        
        console.log(ListaNova);
        
        //criando o modal
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
                    <th>Telefone</th>
                </tr>
        </thead>
        

        <tbody>
            {ListaDeFarmacias && ListaDeFarmacias.map((farmacia) => 
            <tr key={farmacia.id}>
                <td>{farmacia.farmacia}</td>
                <td>{farmacia.telefone}</td>
            </tr>)}
        </tbody>
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

