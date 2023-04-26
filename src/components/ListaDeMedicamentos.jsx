import { Header } from "./Header";
import { useState, useEffect } from "react";
import { Modal, Card, ListGroup, ListGroupItem, Button } from "react-bootstrap"
import "./listaMedicamentos.css";

Modal.setAppElement("#root")

export function CadastroMedicamentos () {
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
        
        <Card key={medicamento} style={{width:"250px"}}>
            <Card.Img    style={{
                width: "200px",
                margin: "auto",
              }}
              src="https://th.bing.com/th/id/OIP.AuxQBiLqdNx2b5pe9eeseAAAAA?pid=ImgDet&rs=1" alt="Foto do medicamento conforme a liberação da ANVISA" width="120px" />
             {listaMedicamentos.map((medicamento) => {
                return(
                    <div>
              <Card.Title>{medicamento?.nomeMediamento}</Card.Title>
              <Card.Text>{medicamento?.labotarorioMedicamento}</Card.Text>
              </div>

               )
              })}
              <Button className="btn btn-outline-secondary" onClick={() => setMedicamentoSelecionado(medicamento)}>Detalhes</Button>
             
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
              )
              </Card>
        </div>
    )
}

