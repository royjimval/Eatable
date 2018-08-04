import React, { Component } from 'react'
import './navbar.css';
import { Parallax, Row, Button, Navbar, NavItem, Icon, Col } from 'react-materialize'
import { Link } from 'react-router-dom';


export default class NavBarAdmin extends Component {
  render() {
    return (
      <div className="navmenu">
        <Row>
          <div>
            <Parallax className='header' imageSrc="https://source.unsplash.com/collection/281387/900x200" />
          </div>
          <Navbar className="nabAdmin">
            <Link to="/General">
              <div className="contenedor" id="uno">
                <Row>
                  <Col>
                    <img class="icon" src="assets/general.svg" />
                  </Col>
                  <Col>
                    <p className="texto">General</p>
                  </Col>
                </Row>
              </div>
            </Link>

            <Link to="/Usuario">
              <div className="contenedor" id="dos">
                <Row>
                  <Col>
                    <img class="icon" src="assets/boy.svg" />
                  </Col>
                  <Col>
                    <p className="texto">Users</p>
                  </Col>
                </Row>
              </div>
            </Link>

            <div className="contenedor" id="tres">
              <Row>
                <Col>
                  <img class="icon" src="assets/warehouse.svg" />
                </Col>
                <Col>
                  <p className="texto">Inventory</p>
                </Col>
              </Row>
            </div>

            <div className="contenedor" id="cuatro">
              <Row>
                <Col>
                  <img class="icon" src="assets/cashier.svg" />
                </Col>
                <Col>
                  <p className="texto">Casher</p>
                </Col>
              </Row>
            </div>


            <Link to="/ReportsView">

              <div className="contenedor" id="cinco">
                <Row>
                  <Col>
                    <img class="icon" src="assets/report.svg" />
                  </Col>
                  <Col>
                    <p className="texto">Reports</p>
                  </Col>
                </Row>
              </div>
            </Link>

            <div className="contenedor" id="seis">
              <Row>
                <Col>
                  <img class="icon" src="assets/menu.svg" />
                </Col>
                <Col>
                  <p className="texto">Categories</p>
                </Col>
              </Row>
            </div>


            <div className="login right" id="uno">
              <Row>
                <Col>
                  <img class="icon" src="assets/stand-by.svg" />
                </Col>
              </Row>
            </div>
          </Navbar>
        </Row>
      </div >
    )
  }
}