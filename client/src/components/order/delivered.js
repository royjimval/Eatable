import React, { Component } from 'react'
import { Row, Col, Collection, CollectionItem, Preloader, Icon } from 'react-materialize'
import { getPreorder } from '../../accions/preorderAccions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './order.css'

let totals = 0;

class Delivered extends Component {
    componentDidMount() {
        this.props.getPreorder("2");
        this.resetTotal();
    }

    resetTotal(){
        totals=0;
    }

    isCooked(preorder_item) {
        if (preorder_item.finished === true) {
            return (
                <Row>
                    <Col s={4} className='secondary-content'>
                        <Icon>check_circle</Icon>
                    </Col>
                </Row>)
        } else {
            return (
                <Row>
                    <Col s={4} className='secondary-content'>
                        <Preloader size='small' />
                    </Col>
                </Row>)
        }
    }

    isSended(preorder_item) {
        if (preorder_item.sended === true) {
            return(
                <Row>
                    <Col m={2} className='center-align'>
                        {
                            this.isCooked(preorder_item)
                        }
                    </Col>
                    <Col m={8}>
                        <h6 className='left'>{preorder_item.name}</h6>
                    </Col>
                    <Col m={2}>
                        <h6 className='left'>{preorder_item.price}</h6>
                        {this.sumPrices(preorder_item.price)}
                    </Col>
                </Row>
            )
        }
    }

    sumPrices(price){
         totals = totals + price
    }


    render() {
        const { preorder } = this.props.preorder;
        return (
            <div>
                <Row>
                    <Col m={10} l={10} xl={10}>
                        <Collection header="Delivered" className='z-depth-1-half'>
                            <CollectionItem>
                            {this.resetTotal()}
                                {
                                    preorder.map((preorder_item) =>
                                        (
                                            this.isSended(preorder_item)

                                        ))
                                }
                            </CollectionItem>
                            <CollectionItem>
                                <Row>
                                    <Col m={6}>
                                        <h4 className='right'>Total:</h4>
                                    </Col>
                                    <Col m={6}>
                                        <h4 className='left red-text'>${totals}</h4>
                                    </Col>
                                </Row>
                            </CollectionItem>
                        </Collection>
                    </Col>
                </Row>
            </div>
        )
    }
}

Delivered.propTypes = {
    getPreorder: PropTypes.func.isRequired,
    preorder: PropTypes.object.isRequired,

};

const mapStateToProps = state => ({
    preorder: state.preorder
});


export default connect(mapStateToProps, { getPreorder })(Delivered);