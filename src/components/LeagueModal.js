import React from 'react';
import { Modal,Button } from 'react-bootstrap/lib/';


const LeagueModal =({toggleModal,showModal,hideModal}) => {
  return(
    <div>
    <Button
      bsStyle="primary"
      bsSize="large"
      onClick={toggleModal}
    >
      Launch contained modal
    </Button>

    <Modal
      show={showModal}
      onHide={hideModal}
      container={this}
      aria-labelledby="contained-modal-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={hideModal}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default LeagueModal;
