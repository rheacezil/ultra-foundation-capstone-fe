import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function JoinModalButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Join
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Hi!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Before you click 'I will attend' please note that clicking this button
          means you will be given a slot for this volunteer opportunity. We've
          prepared this event so you could have a great time volunteering.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning">I will attend</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
