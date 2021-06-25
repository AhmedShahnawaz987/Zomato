import React from "react";
import { Container } from "react-bootstrap";
import { Button, Modal } from "react-bootstrap";
import diggin from "../diggin.webp";
import {Tab, Nav, Col, Row} from "react-bootstrap";
import search from "../search.png";

export default function Delivery() {
  const [modalShow, setModalShow] = React.useState(false);
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Filters
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <section  className="section1">
            <section style={{ width:"30%"}} className="section2">

              <div className="filter-links3">

                <div className="filter-links1">
              <a href="sortby" className="filter-links-a">Sort by</a>
              </div>

              <div className="filter-links1">
              <a href="#link" className="filter-links-a">Cuisines</a>
              </div>

              <div className="filter-links1">
              <a href="#link" className="filter-links-a">Rating</a>
              </div>
              <div className="filter-links1">
              <a href="#link" className="filter-links-a">Cost per person</a>
              </div>
              <div className="filter-links1">
              <a href="#link" className="filter-links-a">More filters</a>
              </div>
              
              </div>
            
            
            </section>
            <section> */}
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <div className="filter-links3">
          <div  className="filter1">
        <Nav.Item className="filter-links">
          <Nav.Link eventKey="first"  >Sort by</Nav.Link>
        </Nav.Item>
        </div>
        <div className="filter1">
        <Nav.Item className="filter-links" >
          <Nav.Link eventKey="second" >Cuisines</Nav.Link>
        </Nav.Item>
        </div>
        <div className="filter1">
        <Nav.Item className="filter-links">
          <Nav.Link eventKey="third" >Rating</Nav.Link>
        </Nav.Item>
        </div>
        <div className="filter1">
        <Nav.Item className="filter-links">
          <Nav.Link eventKey="fourth" >Cost per person</Nav.Link>
        </Nav.Item>
        </div>
        <div className="filter1">
        <Nav.Item className="filter-links">
          <Nav.Link eventKey="fifth" >More filters</Nav.Link>
        </Nav.Item>
        </div>
        </div>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <form>
          <input type="radio" value="Popularty"  name="radio-filter"/>
          <label>Popularity</label><br/>
          <input type="radio" value="Rating" name="radio-filter"/>
          <label>Rating:High to Low</label><br/>
          <input type="radio" value="Popularty" name="radio-filter"/>
          <label>Delivery time</label><br/>
          <input type="radio" value="Popularty" name="radio-filter"/>
          <label>Cost:High to Low</label><br/>
          <input type="radio" value="Popularty" name="radio-filter"/>
          <label>Cost:Low to High </label><br/>
          </form>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <div className="cousins-search">
            <img src={search} alt="srch" className="filter-search"/>
            <input type="text" placeholder="search here" className="filter-cousin-text"/>
            </div>
            <div className="cousin-checkbox">
              <div>
              <input type="checkbox" value="Africa"/>
              <label>Afghan</label>
              </div>
                <div>
              <input type="checkbox" value="Africa"/>
              <label>American</label>
              </div>
              <div>
              <input type="checkbox" value="Africa"/>
              <label>Arabian</label>
              </div>
              <div>
              <input type="checkbox" value="Africa"/>
              <label>Assamese</label>
              </div>
              <div>
              <input type="checkbox" value="Africa"/>
              <label>BBQ</label>
              </div>
              <div>
              <input type="checkbox" value="Africa"/>
              <label>Belgian</label>
              </div>
              <div>
              <input type="checkbox" value="Africa"/>
              <label>Biriyani</label>
              </div>
              <div>
              <input type="checkbox" value="Africa"/>
              <label>Bengali</label>
              </div>
              <div>
              <input type="checkbox" value="Africa"/>
              <label>Bakery</label>
              </div>
              <div>
              <input type="checkbox" value="Africa"/>
              <label>Brazilian</label>
              </div>
              <div>
              <input type="checkbox" value="Africa"/>
              <label>Africa</label>
              </div>
              <div>
              <input type="checkbox" value="Africa"/>
              <label>Africa</label>
              </div>
              <div>
              <input type="checkbox" value="Africa"/>
              <label>Africa</label>
              </div>
              <div>
              <input type="checkbox" value="Africa"/>
              <label>Africa</label>
              </div><div>
              <input type="checkbox" value="Africa"/>
              <label>Africa</label>
              </div><div>
              <input type="checkbox" value="Africa"/>
              <label>Africa</label>
              </div>
              <div>
              <input type="checkbox" value="Africa"/>
              <label>Africa</label>
              </div>
              </div>
          
        </Tab.Pane>
        <Tab.Pane eventKey="fifth">
        <div className="cousins-search">
            <img src={search} alt="srch" className="filter-search"/>
            <input type="text" placeholder="search here" className="filter-cousin-text"/>
            </div>
            <div> 
              <input type="checkbox"></input>
              <label>Pure veg</label><br/>
              <input type="checkbox"></input>
              <label>Great offers</label>
            </div>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
            {/* <div style={{float:'right'}}>
              <h1>bwuf</h1>
            </div> */}
              {/* </section>
          </section> */}
    
        </Modal.Body>
        <Modal.Footer className="Model-footer-cousins me-auto">
        <Button onClick={props.onHide} variant="light" className="apply-button">Clear all</Button>

          <Button onClick={props.onHide} variant="danger" className="apply-button">Apply</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <div className="Delivery-main">
      <div className="headline"></div>
      <Container>
        <div className="Buttons ">
          
          <button type="button" className="btn btn-outline-secondary Buttons1 " onClick={() => setModalShow(true)}>
            <img src="equ.svg" alt="equ" className="equ" /> Filters
          </button>
          <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
          <button type="button" className="btn btn-outline-secondary Buttons1">
            Rating: 4.0+
          </button>
          <button type="button" className="btn btn-outline-secondary Buttons1">
            Safe and Hygenic
          </button>
          <button type="button" className="btn btn-outline-secondary Buttons1">
            Pure Veg
          </button>
          <button type="button" className="btn btn-outline-secondary Buttons1">
            <img src="time.svg" alt="time" className="deli-time" />
            Delivery Time
          </button>
          <button type="button" className="btn btn-outline-secondary Buttons1">
            Great
          </button>
        </div>

        <div className="headline-collections">
          <h1>Best Food in Delhi NCR</h1>
        </div>

        <main className="Main">
          <div className="collections">
            <div className="collections1">
                <img className="diggin" src={diggin} alt="diggin"></img>
                <div className="offer">
                  <p className="offer1">₹75 OFF</p>
                </div>
                <div className="Cafe-delhi-heights">
                  <p classname="Cafe-delhi-heights1">Cafe Delhi Heights</p>

                  <div className="staars">
                  <div className="stars">
                    <i>
                      <img src="stars.svg" className="stars11" alt="stars" />
                    </i>
                    <i>
                      <img src="stars.svg" className="stars11" alt="stars" />
                    </i>
                    <i>
                      <img src="stars.svg" className="stars11" alt="stars" />
                    </i>
                    <i>
                      <img src="stars.svg" className="stars11" alt="stars" />
                    </i>
                    <i>
                      <img src="staar.svg" className="stars11" alt="stars1" />
                    </i>
                    <div className="reviews">
                      <p>4.3</p>
                    </div>
                    <div className="review-restaurant">
                      <p>(110 restaurant reviews)</p>
                    </div>
                  </div>

                  <div className="rate-and-time">
                    <div className="rate-and-time11">
                      <div className="rate-and-time1">
                        <p>Pizza Fast Food</p>
                      </div>
                      <p className="rate-and-time2">
                        <span>200 For one</span>
                        <span></span> 35min
                      </p>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          

     
          <div className="collections">
            <div className="collections1">
                <img className="diggin" src={diggin} alt="diggin"></img>
                <div className="offer">
                  <p className="offer1">₹75 OFF</p>
                </div>
                <div className="Cafe-delhi-heights">
                  <p classname="Cafe-delhi-heights1">Cafe Delhi Heights</p>

                  <div className="stars">
                    <i>
                      <img src="stars.svg" className="stars11" alt="stars" />
                    </i>
                    <i>
                      <img src="stars.svg" className="stars11" alt="stars" />
                    </i>
                    <i>
                      <img src="stars.svg" className="stars11" alt="stars" />
                    </i>
                    <i>
                      <img src="stars.svg" className="stars11" alt="stars" />
                    </i>
                    <i>
                      <img src="staar.svg" className="stars11" alt="stars1" />
                    </i>
                    <div className="reviews">
                      <p>4.3</p>
                    </div>
                    <div className="review-restaurant">
                      <p>(102 restaurant reviews)</p>
                    </div>
                  </div>

                  <div className="rate-and-time">
                    <div className="rate-and-time11">
                      <div className="rate-and-time1">
                        <p>Pizza Fast Food</p>
                      </div>
                      <p className="rate-and-time2">
                        <span>150 For one</span>
                        <span></span> 30min
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        

      
          <div className="collections">
            <div className="collections1">
                <img className="diggin" src={diggin} alt="diggin"></img>
                <div className="offer">
                  <p className="offer1">₹75 OFF</p>
                </div>
                <div className="Cafe-delhi-heights">
                  <p classname="Cafe-delhi-heights1">Cafe Delhi Heights</p>

                  
                  <div className="stars">
                    <i>
                      <img src="stars.svg" className="stars11" alt="stars" />
                    </i>
                    <i>
                      <img src="stars.svg" className="stars11" alt="stars" />
                    </i>
                    <i>
                      <img src="stars.svg" className="stars11" alt="stars" />
                    </i>
                    <i>
                      <img src="stars.svg" className="stars11" alt="stars" />
                    </i>
                    <i>
                      <img src="staar.svg" className="stars11" alt="stars1" />
                    </i>
                    <div className="reviews">
                      <p>4.3</p>
                    </div>
                    <div className="review-restaurant">
                      <p>(102 restaurant reviews)</p>
                    </div>
                  </div>

                  <div className="rate-and-time">
                    <div className="rate-and-time11">
                      <div className="rate-and-time1">
                        <p>Pizza Fast Food</p>
                      </div>
                      <p className="rate-and-time2">
                        <span>150 For one</span>
                        <span></span> 30min
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        

     
          <div className="collections">
            <div className="collections1">
                <img className="diggin" src={diggin} alt="diggin"></img>
                <div className="offer">
                  <p className="offer1">₹75 OFF</p>
                </div>
                <div className="Cafe-delhi-heights">
                  <p classname="Cafe-delhi-heights1">Cafe Delhi Heights</p>

                  
                  <div className="stars">
                    <i>
                      <img src="stars.svg" className="stars11" alt="stars" />
                    </i>
                    <i>
                      <img src="stars.svg" className="stars11" alt="stars" />
                    </i>
                    <i>
                      <img src="stars.svg" className="stars11" alt="stars" />
                    </i>
                    <i>
                      <img src="stars.svg" className="stars11" alt="stars" />
                    </i>
                    <i>
                      <img src="staar.svg" className="stars11" alt="stars1" />
                    </i>
                    <div className="reviews">
                      <p>4.3</p>
                    </div>
                    <div className="review-restaurant">
                      <p>(102 restaurant reviews)</p>
                    </div>
                  </div>

                  <div className="rate-and-time">
                    <div className="rate-and-time11">
                      <div className="rate-and-time1">
                        <p>Pizza Fast Food</p>
                      </div>
                      <p className="rate-and-time2">
                        <span>150 For one</span>
                        <span></span> 30min
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="collections">
            <div className="collections1">
                <img className="diggin" src={diggin} alt="diggin"></img>
                <div className="offer">
                  <p className="offer1">₹75 OFF</p>
                </div>
                <div className="Cafe-delhi-heights">
                  <p classname="Cafe-delhi-heights1">Cafe Delhi Heights</p>

                  
                  <div className="stars">
                    <i>
                      <img src="stars.svg" className="stars11" alt="stars" />
                    </i>
                    <i>
                      <img src="stars.svg" className="stars11" alt="stars" />
                    </i>
                    <i>
                      <img src="stars.svg" className="stars11" alt="stars" />
                    </i>
                    <i>
                      <img src="stars.svg" className="stars11" alt="stars" />
                    </i>
                    <i>
                      <img src="staar.svg" className="stars11" alt="stars1" />
                    </i>
                    <div className="reviews">
                      <p>4.3</p>
                    </div>
                    <div className="review-restaurant">
                      <p>(102 restaurant reviews)</p>
                    </div>
                  </div>

                  <div className="rate-and-time">
                    <div className="rate-and-time11">
                      <div className="rate-and-time1">
                        <p>Pizza Fast Food</p>
                      </div>
                      <p className="rate-and-time2">
                        <span>150 For one</span>
                        <span></span> 30min
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        

      
          
        

      
          <div className="collections">
            <div className="collections1">
                <img className="diggin" src={diggin} alt="diggin"></img>
                <div className="offer">
                  <p className="offer1">₹75 OFF</p>
                </div>
                <div className="Cafe-delhi-heights">
                  <p classname="Cafe-delhi-heights1">Cafe Delhi Heights</p>

                  
                  <div className="stars">
                    <i>
                      <img src="stars.svg" className="stars11" alt="stars" />
                    </i>
                    <i>
                      <img src="stars.svg" className="stars11" alt="stars" />
                    </i>
                    <i>
                      <img src="stars.svg" className="stars11" alt="stars" />
                    </i>
                    <i>
                      <img src="stars.svg" className="stars11" alt="stars" />
                    </i>
                    <i>
                      <img src="staar.svg" className="stars11" alt="stars1" />
                    </i>
                    <div className="reviews">
                      <p>4.3</p>
                    </div>
                    <div className="review-restaurant">
                      <p>(102 restaurant reviews)</p>
                    </div>
                  </div>

                  <div className="rate-and-time">
                    <div className="rate-and-time11">
                      <div className="rate-and-time1">
                        <p>Pizza Fast Food</p>
                      </div>
                      <p className="rate-and-time2">
                        <span>150 For one</span>
                        <span></span> 30min
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>        
</main>

      </Container>
    </div>
  );
  
}
function sortby()
{
  return(
    <div>uiygwudygewufg</div>
  )
}
