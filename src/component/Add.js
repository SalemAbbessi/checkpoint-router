import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

 function Add({Addmovie}) {
        const [show, setShow] = useState(false);
        const [title, setTitle] = useState("");
        const [description, setdescription] = useState("");
        const [posterURL, setposterURL] = useState("");
        const [rate, setrate] = useState(1);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      const handleadd=()=>{
        if(title && description && posterURL && posterURL){
          Addmovie({title,description,posterURL,rate});
          handleClose();
        }
      };
        return (
          <>
            <Button variant="primary" onClick={handleShow}>
              AddMovie
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form>
      <Form.Group className="mb-3" controlId="formBasicTexte">
        <Form.Label>title</Form.Label>
        <Form.Control type="texte" placeholder="Enter Title" onChange={(e)=>setTitle(e.target.value)} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicTexte">
        <Form.Label>description</Form.Label>
        <Form.Control type="texte" placeholder="Enter Description" onChange={(e)=>setdescription(e.target.value)}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicTexte">
        <Form.Label>posterURL</Form.Label>
        <Form.Control type="texte" placeholder="Enter Poster" onChange={(e)=>setposterURL(e.target.value)}/>
        
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>rate</Form.Label>
        <Form.Control type="number" placeholder="Enter Rate" onChange={(e)=>setrate(e.target.value)}/>
        
      </Form.Group>
      </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              <Button variant="primary" onClick={handleadd}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      
      
      
  
}
export default Add