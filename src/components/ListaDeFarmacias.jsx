import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Header } from "./Header";
import { Link } from "react-router-dom";
import "./listaDeFarmacias.css";

export function ListaDeFarmacias(props){
    
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
                            <th>Farmácia</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Farmácia do Zézinho</td>
                        </tr>
                    </tbody>
                </Table>

        {props.lista.map((item) => {
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
            </div>) })}

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
        
    
