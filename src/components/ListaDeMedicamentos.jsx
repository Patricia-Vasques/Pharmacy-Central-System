import { Header } from "./Header";
import { useState } from "react";
import Modal from "react-modal";
import Card from "react-bootstrap/Card";
import "./listaMedicamentos.css";

Modal.setAppElement("#root")

export function ListaDeMedicamentos({medicamentos, laboratorio, tipo, dosagem, preco, descricao}){
    
    const  listaMedicamentos = JSON.parse(localStorage.getItem("listaMedicamentos")) || [];

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return(
        <div>
            <div className="title-card">
                <Header/>
            <p><b>Lista de Medicamentos Cadastrados</b></p>
            </div>

            <div className="card" data-bs-toggle="modal"
            data-bs-target={Card}>
                <img src="https://th.bing.com/th/id/OIP.AuxQBiLqdNx2b5pe9eeseAAAAA?pid=ImgDet&rs=1" alt="Foto do medicamento conforme a liberação da ANVISA" width="120px" />
                <h5 className="title">{medicamentos}</h5>
                <h6 className="subTitle md-1 text-muted">{dosagem}</h6>
                <p className="text">{descricao ? descricao.substring(0,40) : null }...</p>

                <div className="d-grid col-6">
                    
                </div>

            <div className="card-modal">
                <button type="button" className="btn btn-outline-info btn-sm mt4"
                data-bs-toggle="modal"
                data-ds-target="#exempleModa4"
                onClick={() =>setModalIsOpen (true) }>Detalhes</button>
            </div>
            </div>
        
        <Modal 
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{content:{color: "black"}, }}>
        <h2>Detalhes do medicamento</h2>
        <p><strong>Medicamento:</strong>{medicamentos}</p>
        <p><strong>Laboratório:</strong>{laboratorio}</p>
        <p><strong>Tipo:</strong>{tipo}</p>
        <p><strong>Dosagem:</strong>{dosagem}</p>
        <p><strong>Preço:</strong>{preco}</p>
        <p><strong>Descrição:</strong>{descricao}</p>

        <button type="button" clasName="btn btn-secundary me-2" data-bs-dismiss="modal"
        onClick={() => setModalIsOpen(false)}>Fechar</button>
        </Modal>

        </div>
)}
