import React, { Component } from 'react'
import { Button, Navbar, NavItem } from 'react-materialize'
import Confirmation from '../../modal/confirmation'
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../../../accions/itemAccions'
import PropTypes from 'prop-types';

import '../waiter.css'


class WaiterAssist extends Component {

  componentDidMount() {
    this.interval1 = setInterval(() => this.props.getItems(), 2000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval1);
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };


  render() {
    const { items } = this.props.item;
    return (
      <div>
        <Navbar className='nav-color scrl'>
          {
            items.map((item) => (
              <NavItem>
                <Button className='orange darken-1 white-text' onClick={this.onDeleteClick.bind(this, item._id)}>table {item.idtable}</Button>
              </NavItem>
            ))
          }
        </Navbar>
        <Confirmation />
      </div>
    )
  }
}
WaiterAssist.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems, deleteItem })(WaiterAssist);
