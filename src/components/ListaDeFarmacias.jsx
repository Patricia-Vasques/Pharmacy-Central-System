import React from "react";
import Modal from "react-modal";
import { Header } from "./Header";
import { Link } from "react-router-dom";
import "./listaDeFarmacias.css";

    export function ListaDeFarmacias(props){
        const dados = props.dados;

            //fazer o lista.map
 
        const dadosListaFarmacia = lista.map((dados)=>{
            <li key={dados.razaoSocial}></li>,
            <li key={dados.cnpj}></li>,
            <li key={dados.nomeFatansia}></li>,
            <li key={dados.emailFarmacia}></li>,
            <li key={dados.telefoneFarmacia}></li>,
            <li key={dados.celularFarmacia}></li>,
            <li key={dados.enderecoFarmacia}></li>,
            <li key={dados.numeroFarmacia}></li>,
            <li key={dados.bairroFarmacia}></li>,
            <li key={dados.cidadeFarmacia}></li>,
            <li key={dados.estadoFarmacia}></li>,
            <li key={dados.complemento}></li>})
        
        console.log(dadosListaFarmacia);
    
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
                <ul>{dadosListaFarmacia}</ul>
            </div>
        
        <table className="table-listaFarmacias">
            <thead>
                <tr className="tabela-lista-farmacias">
                    <th>Farmácia</th>
                    <th>Telefone</th>
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

