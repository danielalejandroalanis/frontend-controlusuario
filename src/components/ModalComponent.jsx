import React from "react";
import Modal from "react-bootstrap/Modal";
import "../sass/ModalComponent.scss";
const ModalComponent = ({ state, setState, title, body, footer }) => {
  const isDarkTheme = localStorage.getItem("theme");
  const handleClose = () => setState(false);

  return (
    <>
      <Modal show={state} onHide={handleClose}>
        <Modal.Header
          className={isDarkTheme === "dark" ? "modal-dark" : "modal-light"}
          closeButton
        >
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body
          className={isDarkTheme === "dark" ? "modal-dark" : "modal-light"}
        >
          {body}
        </Modal.Body>
        <Modal.Footer
          className={isDarkTheme === "dark" ? "modal-dark" : "modal-light"}
        >
          {footer}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComponent;
