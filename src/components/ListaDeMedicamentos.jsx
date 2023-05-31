import { Header } from "./Header";
import { useState, useEffect } from "react";
import { Modal, Card, ListGroup, ListGroupItem, Button } from "react-bootstrap"



export function ListaDeMedicamentos () {
    const [listaMedicamentos, setListaMedicamentos] = useState([])
    const [medicamentoSelecionado, setMedicamentoSelecionado] = useState(null)

    useEffect(() => {
        const listaMedicamentosStorage = localStorage.getItem("listaMedicamentos");
        if (listaMedicamentosStorage){
            setListaMedicamentos(JSON.parse(listaMedicamentosStorage))
        }
    }, [])

    return(
        <div className="card data-bs-toggle">
           <Header />
             <h1 className=" d-flex justify-content-center mt-">Lista de medicamentos</h1>
           <div>
            {listaMedicamentos.map((medicamento) => {
               return(
               <Card className="d-inline-block m-2 col-sm-6" style={{width:"250px"}}>
                  <Card.Img    style={{
               width: "200px",
               margin: "auto",
             }}
             src="https://s.cornershopapp.com/product-images/1212877.jpg?versionId=BOqqcfx5BGK1vgJsw7KUOVHdB.xWz7ed" alt="Foto do medicamento conforme a liberação da ANVISA" width="120px" />
             <Card.Title>{medicamento.nomeMedicamento}</Card.Title>
             <Card.Text>{medicamento.labotarorioMedicamento}</Card.Text>
             <Button className="btn btn-secondary" onClick={() => setMedicamentoSelecionado(medicamento)}>Detalhes</Button>
             </Card>
               )
             })}
              </div>
              
             
                <Modal show={medicamentoSelecionado} onHide={() => setMedicamentoSelecionado(null)}>
            <Modal.Header>Titulo</Modal.Header>
            <Modal.Body>
                <ListGroup>

                    <ListGroupItem>
                        Medicamento: {medicamentoSelecionado?.nomeMedicamento}
                    </ListGroupItem>

                    <ListGroupItem>
                        Laboratório: {medicamentoSelecionado?.laboratorioMedicamento}
                    </ListGroupItem>

                    <ListGroupItem>
                        Dosagem: {medicamentoSelecionado?.dosagemMedicamento}
                    </ListGroupItem>

                    <ListGroupItem>
                        Descrição: {medicamentoSelecionado?.descricaoMedicamento}
                    </ListGroupItem>

                    <ListGroupItem>
                        Preço: {medicamentoSelecionado?.precoMedicamento}
                    </ListGroupItem>

                    <ListGroupItem>
                        Tipo: {medicamentoSelecionado?.tipoMedicamento}
                    </ListGroupItem>

                </ListGroup>
            </Modal.Body>
        </Modal>
              </div>          
    )
}

