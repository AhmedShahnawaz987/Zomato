import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import india from "../india.png";
import { Navbar } from "react-bootstrap";
import search from "../search.png";
import location from "../marker.png";
import arrow from "../arrow.png";
// import {NavDropdown} from 'react-bootstrap';
// import { Container, Row, Col, Alert} from "react-bootstrap";
import { Container } from "react-bootstrap";
// import Login from "./Login";
function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [open, setOpen] = useState(false);
  const button = () => {
    setOpen(!open);
  };
  return (
    <body>
      <div className="mainnavbar ">
        <Navbar expand="lg" className="navbar">
          <Container>
            <div>
              <img
                className="zomato-image"
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="zomato"
              ></img>
            </div>

            <div className="droptext-box1">
              <div className="droptext-box">
                <div className="location">
                  <img
                    className="location1"
                    src={location}
                    alt="location.."
                  ></img>

                  <input
                    type="text"
                    placeholder="Ywca, 1, AshokaRd, Hanu"
                    className="location2"
                  ></input>
                </div>

                <img src={arrow} alt="aarrow.." className="arrow"></img>
                <p className="bar">|</p>
                <div className="search">
                  <img src={search} alt="search1" className="search1"></img>
                  <input
                    type="text"
                    className="search2"
                    placeholder="Search for restaurant, cuisins or a dish."
                  ></input>
                </div>
              </div>
            </div>

            {/* <div className="link">
            <>
            
            <a onClick={button}  className="link1" >
                Log in
              </a>
            {open && (
                
            <div className="login">
              <Container>
               
                <h2>Log in</h2>
                <img src="ex.svg" alt="ex"></img>
               
                </Container>
            </div>
            
            )}
        </> */}
            <div className="link">
              <>
                <a onClick={handleShow} href="#ah" className="link1">
                  Log in
                </a>

                <Modal show={show} onHide={handleClose} className="Modal">
                  <Container className="container-model">
                    <div className="Modal-head-body-footer">
                      <Modal.Header closeButton className="Modal-head">
                        <h2>Log in</h2>
                      </Modal.Header>
                      <Modal.Body className="Modal-body">
                        <div className="log-text">
                          <div>
                            <img
                              src={india}
                              alt="india"
                              className="india"
                            ></img>
                            <select className="drop-flags">
                              <option className="drop-flags1">India</option>
                              <option className="drop-flags1">UAE</option>
                              <option className="drop-flags1">Argentina</option>
                            </select>
                          </div>
                          <p className="bar1">|</p>
                          <input
                            type="number"
                            className="input-text-flags"
                            placeholder="Phone number"
                          ></input>
                        </div>
                        <Button variant="danger" className="button-otp">
                          Send OTP
                        </Button>
                        <div className="or-line-or">
                          <hr className="or-line"></hr>
                          <span className="or">or</span>
                        </div>

                        
                          <div className="log-email">
                            <img src="gmail.svg" alt="gmail" className="log-email-img"></img>
                            Continue with the email
                          </div>

                          <div className="log-email">
                            <img src="google.svg" alt="google" className="log-email-img"></img>
                            Continue with the Google
                          </div>

                      </Modal.Body>
                      <Modal.Footer className="modal-footer">
                       
                        new to Zomato?
                       <a href="create" className="create-acc">Create account</a>
                      </Modal.Footer>
                    </div>
                  </Container>
                </Modal>
              </>

              {/* <a href="login" className="link1" >
                Log in
              </a> */}
              <a className="link1" href="#sign up">
                Sign up
              </a>
            </div>
          </Container>
        </Navbar>
      </div>
    </body>
  );
}
export default NavBar;
