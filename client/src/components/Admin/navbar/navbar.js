import React, { Component } from 'react'
import './navbar.css';
import { Parallax, Row, Navbar, NavItem, Col } from 'react-materialize'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class NavBarAdmin extends Component {
  render() {
    const role = this.props.auth.user.role

    if (role === 'all') {
      return (
        <div className="navmenu">
          <Row>
            <div>
              <Parallax className='header' imageSrc="https://source.unsplash.com/collection/281387/900x200" />
            </div>
            <Navbar className="nabAdmin">
              <NavItem className="conteinernav" componentClass={Link} href="/General" to="/General">
                <img className='menu-icon iconnav' src='assets/general.svg' width='31px' />
                General
            </NavItem>

              <NavItem className="conteinernav" componentClass={Link} href="/User" to="/User">
                <img className='menu-icon iconnav' src='assets/boy.svg' width='31px' />
                Users
            </NavItem>

              <NavItem className="conteinernav" componentClass={Link} href="/Inventory" to="/Inventory">
                <img className='menu-icon iconnav' src='assets/warehouse.svg' width='31px' />
                Inventory
            </NavItem>

              <NavItem className="conteinernav" componentClass={Link} href="/cashier" to="/cashier">
                <img className='menu-icon iconnav' src='assets/cashier.svg' width='31px' />
                Cashier
            </NavItem>

              <NavItem className="conteinernav" componentClass={Link} href="/ReportsView" to="/ReportsView">
                <img className='menu-icon iconnav' src='assets/report.svg' width='31px' />
                Reports
            </NavItem>

              <NavItem className="conteinernav" componentClass={Link} href="/addProduct" to="/addProduct">
                <img className='menu-icon iconnav' src='assets/menu.svg' width='30px' />
                Add Product
            </NavItem>

              <NavItem className="conteinernav" componentClass={Link} href="/addIngredient" to="/addIngredient">
                <img className='menu-icon iconnav' src='assets/harvest.svg' width='30px' />
                Add Ingredient
            </NavItem>

              <NavItem className="conteinernav right" componentClass={Link} href="/General" to="/General">
                <img className='menu-icon iconnav' src='assets/stand-by.svg' width='30px' />
                Logout
            </NavItem>
            </Navbar>
          </Row>
        </div >
      )
    }
    else {
      return (
        <h1>No se puede mi joven</h1>
      )
    }
  }
}

NavBarAdmin.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(NavBarAdmin)