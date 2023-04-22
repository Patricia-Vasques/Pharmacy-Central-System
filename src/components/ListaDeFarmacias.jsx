import React from "react";
import Modal from "react-modal";
import { Header } from "./Header";
import { Link } from "react-router-dom";
import "./listaDeFarmacias.css";

    export function ListaDeFarmacias(props){{
        const dados = props.dados()};
        
        const lista = [
            {razaoSocial: "Farmácia do José",
            cnpj:"30256842-0001/25",
            nomeFatansia:"Farmácia do Zézinho",
            emailFarmacia: "zezinho@email.com",
            telefoneFarmacia: "(33)3333-3333",
            celularFarmacia: "(99)99999-9999",
            enderecoFarmacia: "Recanto Feliz",
            numeroFarmacia: "111",
            bairroFarmacia: "Feliz",
            cidadeFarmacia: "São Paulo",
            estadoFarmacia: "SP",
            complemento: "sei la"
            }]

            //fazer o lista.map
        const dadosListaFarmacia = lista.map((item)=>{
            return(
        <div>
            <li key={item.razaoSocial}></li>,
            <li key={item.cnpj}></li>,
            <li key={item.nomeFatansia}></li>,
            <li key={item.emailFarmacia}></li>,
            <li key={item.telefoneFarmacia}></li>,
            <li key={item.celularFarmacia}></li>,
            <li key={item.enderecoFarmacia}></li>,
            <li key={item.numeroFarmacia}></li>,
            <li key={item.bairroFarmacia}></li>,
            <li key={item.cidadeFarmacia}></li>,
            <li key={item.estadoFarmacia}></li>,
            <li key={item.complemento}></li>
        </div>
            )});
            
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

