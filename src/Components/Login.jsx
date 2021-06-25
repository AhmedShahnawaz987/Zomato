import React, { useState } from 'react'
// import {Container} from "react-bootstrap";
import {Tab, Nav, Col, Row} from "react-bootstrap";


function Login() {
    // const [open,setOpen]=useState(false)
    // const button=()=>{
    //     setOpen(!open)
    // }
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <>
            
            {/* <a onClick={button}  className="link1" >
                Log in
              </a>
            {open && (
                
            <div className="login">
                <h2>Log in</h2>

                    <input type="text"></input>

            </div>
            
            )} */}
            {/* <div className="link">
      <Button  onClick={handleShow}><a href="#abc" className="link1">click</a>
        
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
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
    </div> */}
    
        </>
    )
}

export default Login
