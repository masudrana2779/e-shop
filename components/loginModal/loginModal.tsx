import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";

const LoginModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className="btn btn-success" onClick={handleShow}>Join</button>

            <Modal show={show} onHide={handleClose} animation={true} centered>
                <Modal.Header closeButton>
                        <div className="text-center"><h2>Welcome Back</h2></div>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default LoginModal;