import React, { useState } from "react";
import { Table, ListGroup, ListGroupItem, Row, Buttom, Modal  } from "react-bootstrap"

export function ListaDeFarmacias(){

    const [tabelaSelecionada, setTabelaSelecionada] = useState(null)
    const listaFarmacias = JSON.parse(localStorage.getItem("listaFarmacias")) || [];

    const exibirTarbela = (item) => setTabelaSelecionada (item)

    return(
        <Row>
        {Object.keys(listaFarmacias).map((item) => {
                const farmacia = listaFarmacias[item];
                return(
                    <Table key={item} style={{widt: "200px"}}>
                        <Table.Title> {farmacia.razaoSocial}</Table.Title>
                        <Table.Text>{farmacia.telefoneFarmacia}</Table.Text>
                        <Buttom onClick={() => exibirTarbela (item)}> Informações</Buttom>
                        {tabelaSelecionada === item &&(
                        <Modal show={true} onHide={() => setTabelaSelecionada(null)}>
                            <Modal.Header>
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
                            </Modal.Header>
                        </Modal>
                        )}
                    </Table>
                );
        })}
        </Row>
    )
        }