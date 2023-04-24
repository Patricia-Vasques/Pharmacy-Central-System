import { Modal } from "react-bootstrap";
import React from "react";

export const ModalMedicamentos = () => {

const [showModal, setShowModal] = useState(false);
const handleModal = () => {
    setShowModal(true);
  };

  return(
    <Modal show={showModal} onHide={() => setShowModal(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Detalhes do medicamento</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {}
  </Modal.Body>
  <Modal.Footer>
    <button onClick={(handleModal) }>Fechar</button>
  </Modal.Footer>
</Modal>
  )
}