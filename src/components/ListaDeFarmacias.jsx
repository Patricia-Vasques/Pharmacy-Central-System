import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Header } from "./Header";
import Modal from 'react-modal';
import { Link } from "react-router-dom";
import "./listaDeFarmacias.css";

export function ListaDeFarmacias(){

    const [razaoSocial, setRazaoSocial] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [emailFarmacia, setEmailFarmacia] = useState('');
    const [telefoneFarmacia, setTelefoneFarmacia] = useState('');
    const [celularFarmacia, setCelularFarmacia] = useState('');
    const [cepFarmacia, setCepFarmacia] = useState('');
    const [enderecoFarmacia, setEnderecoFarmacia] = useState('');
    const [numeroFarmacia, setNumeroFarmacia] = useState('');
    const [bairroFarmacia, setBairroFarmacia] = useState('');
    const [cidadeFarmacia, setCidadeFarmacia] = useState('');
    const [estadoFarmacia, setEstadoFarmacia] = useState('');
    const [complemento, setComplemento] = useState('');

    const lista={
        razaoSocial: razaoSocial,
        cnpj: cnpj,
        nomeFantasia: nomeFantasia,
        emailFarmacia: emailFarmacia,
        telefoneFarmacia: telefoneFarmacia,
        celularFarmacia: celularFarmacia,
        cepFarmacia: cepFarmacia,
        enderecoFarmacia: enderecoFarmacia,
        numeroFarmacia: numeroFarmacia,
        bairroFarmacia: bairroFarmacia,
        cidadeFarmacia: cidadeFarmacia,
        estadoFarmacia: estadoFarmacia,
        complemento: complemento,
    }


    const[modalFarmacias, setFarmacias] = React.useState(false);
    //Abrir o modal
    function abrirModal() {
        setFarmacias(true);
    }

    //Fechar o modal
    function fecharModal(){
        setFarmacias(false);
    }
            return(

                <div className="table-farmacias">
                    <div>
                        <Header />

                        <Link to="/CadastrarFarmacia">Cadastrar Nova Farmácia</Link>
                    </div>
                <p>Lista de Farmácias cadastradas</p>

                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Razão Social</th>
                        <th>CNPJ</th>
                        <th>Nome Fantasia</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th>Celular</th>
                        <th>Endereço</th>
                        <th>Número</th>
                        <th>Bairro</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                        <th>Complemento</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Farmácia do Zézinho</td>
                        </tr>
                    </tbody>
        
                </Table>

                {lista.map((item) => {
                    return(
                        <div>
                            <li>key={item.razaoSocial}</li>
                            <li>key={item.nomeFantasia}</li>
                            <li>key={item.emailFarmacia}</li>
                            <li>key={item.telefoneFarmacia}</li>
                            <li>key={item.celularFarmacia}</li>
                            <li>key={item.enderecoFarmacia}</li>
                            <li>key={item.numeroFarmacia}</li>
                            <li>key={item.bairroFarmacia}</li>
                            <li>key={item.cidadeFarmacia}</li>
                            <li>key={item.estadoFarmacia}</li>
                            <li>key={item.complemento}</li>
                            </div>
                    )
                })}


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
        
    
