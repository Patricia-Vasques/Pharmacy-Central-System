import React, { useState } from "react";
import { Table, ListGroup, ListGroupItem, Row, Button, Modal  } from "react-bootstrap";
import  {Header } from "./Header";

export function ListaDeFarmacias(){

    const [tabelaSelecionada, setTabelaSelecionada] = useState(null)
    
    const listaFarmacias = JSON.parse(localStorage.getItem("listaFarmacias")) || [];

    const exibirTarbela = (item) => setTabelaSelecionada (item)

    const  [showModal, setModal] = useState(false)

    return(
        <div class="d-flex justify-content-center">
        <Row>

            <Header />

                    <Table class="table table-bordered text-center" >
                        <thead >
                            <tr><th scope="col">#</th>
                                <th scope="col"> Nome Fantasia</th>
                                <th scope="col"> Telefone </th>
                            </tr>
                        </thead>
                        
                        <tbody>
                        {(listaFarmacias).map((farmacia) => {

                return(
                    <tr key = {farmacia.cnpj}>
                        <th scope="row">1</th>
                        <td>{farmacia.nomeFantasia}</td>
                        <td>{farmacia.telefoneFarmacia}</td>
                        

                        <Button className="btn btn-outline-secondary" onClick={() => exibirTarbela (item)}> Informações</Button>
                        {exibirTarbela === farmacia.cnpj &&(
                        
                        
                        <Modal show={showModal} onHide={() => setTabelaSelecionada(null)}>
                            <Modal.Header> Titulo</Modal.Header>
                                <Modal.Body>
                                    <ListGroup>
                                        <ListGroupItem>
                                            Farmacia: {farmacia.razaoSocial}
                                        </ListGroupItem>

                                        <ListGroupItem>
                                            cnpj: {farmacia.cnpj}
                                        </ListGroupItem>

                                        <ListGroupItem>
                                            Nome Fantasia: {farmacia.nomeFantasia}
                                        </ListGroupItem>

                                        <ListGroupItem>
                                            E-mail: {farmacia.emailFarmacia}
                                        </ListGroupItem>

                                        <ListGroupItem>
                                            Telefone: {farmacia.telefoneFarmacia}
                                        </ListGroupItem>

                                        <ListGroupItem>
                                           Celular: {farmacia.celularFarmacia}
                                        </ListGroupItem>

                                        <ListGroupItem>
                                           Cep: {farmacia.cepFarmacia}
                                        </ListGroupItem>

                                        <ListGroupItem>
                                          Endereço: {farmacia.enderecoFarmacia}
                                        </ListGroupItem>

                                        <ListGroupItem>
                                          Número: {farmacia.numeroFarmacia}
                                        </ListGroupItem>

                                        <ListGroupItem>
                                         Bairro: {farmacia.bairroFarmacia}
                                        </ListGroupItem>

                                        <ListGroupItem>
                                        Estado: {farmacia.estadoFarmacia}
                                        </ListGroupItem>

                                        <ListGroupItem>
                                         Complemento: {farmacia.complemento}
                                        </ListGroupItem>
                                    </ListGroup>
                                </Modal.Body>
                
                        </Modal>
                        )}
                        
                        </tr>
                        )
                        })}
                        </tbody>
    
                    </Table>
        </Row>
        </div>
        )
  }