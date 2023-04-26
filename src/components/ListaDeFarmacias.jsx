import React, { useState, useEffect } from "react";
import { Table, ListGroup, ListGroupItem, Row, Button, Modal  } from "react-bootstrap";
import  {Header } from "./Header";

export function ListaDeFarmacias() {
    const [listaFarmacias, setListaFarmacias] = useState([])
    const [farmaciaSelecionada, setFarmaciaSelecionada] = useState(null)
  
  
    useEffect(() => {
      const listaFarmaciasStorage = localStorage.getItem("listaFarmacias");
      if(listaFarmaciasStorage){
        setListaFarmacias(JSON.parse(listaFarmaciasStorage))
      }
    }, [])
    
  
  
    return (
        <div className="d-flex justify-content-center">
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
                        {listaFarmacias.map((farmacia) => {
                            return (
                                <tr key={farmacia?.cnpj}>
                                    <th scope="row">1</th>
                                    <td>{farmacia?.nomeFantasia}</td>
                                    <td>{farmacia?.telefoneFarmacia}</td>
                                    <Button className="btn btn-outline-secondary" onClick={() => setFarmaciaSelecionada(farmacia)}> Informações</Button>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Row>
            <Modal show={farmaciaSelecionada} onHide={() => setFarmaciaSelecionada(null)}>
                <Modal.Header> Titulo</Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        <ListGroupItem>
                            Farmacia: {farmaciaSelecionada?.razaoSocial}
                        </ListGroupItem>
  
                        <ListGroupItem>
                            cnpj: {farmaciaSelecionada?.cnpj}
                        </ListGroupItem>
  
                        <ListGroupItem>
                            Nome Fantasia: {farmaciaSelecionada?.nomeFantasia}
                        </ListGroupItem>
  
                        <ListGroupItem>
                            E-mail: {farmaciaSelecionada?.emailFarmacia}
                        </ListGroupItem>
  
                        <ListGroupItem>
                            Telefone: {farmaciaSelecionada?.telefoneFarmacia}
                        </ListGroupItem>
  
                        <ListGroupItem>
                            Celular: {farmaciaSelecionada?.celularFarmacia}
                        </ListGroupItem>
  
                        <ListGroupItem>
                            Cep: {farmaciaSelecionada?.cepFarmacia}
                        </ListGroupItem>
  
                        <ListGroupItem>
                            Endereço: {farmaciaSelecionada?.enderecoFarmacia}
                        </ListGroupItem>
  
                        <ListGroupItem>
                            Número: {farmaciaSelecionada?.numeroFarmacia}
                        </ListGroupItem>
  
                        <ListGroupItem>
                            Bairro: {farmaciaSelecionada?.bairroFarmacia}
                        </ListGroupItem>
  
                        <ListGroupItem>
                            Estado: {farmaciaSelecionada?.estadoFarmacia}
                        </ListGroupItem>
  
                        <ListGroupItem>
                            Complemento: {farmaciaSelecionada?.complemento}
                        </ListGroupItem>
                    </ListGroup>
                </Modal.Body>
            </Modal>
        </div>
    )
}