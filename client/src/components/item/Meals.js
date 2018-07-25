import React, { Component } from 'react';
import { Col, Icon, Row, Button, Collapsible } from 'react-materialize';
import '../item/item.css';
import ModalEdit from '../modal/edit'
import { getproduct_Meal } from '../../accions/productAccion';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CollapsibleItem from '../../../../node_modules/react-materialize/lib/CollapsibleItem';



class Meal_Component extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            ingredients: [],
            extra: [],
            photo: "",
            ids: "",
            price: ""
        }
    }

    componentDidMount() {
        this.props.getproduct_Meal();
    }

    datamodal = (product_item) => {
        this.setState({
            name: product_item.name,
            ingredients: product_item.ingredients,
            photo: product_item.photo,
            extra: product_item.extra,
            ids: product_item._id,
            price: product_item.price
        })
    }




    render() {
        const { meal } = this.props.product;
        return (
            <div>
                <Collapsible popout >
                    <CollapsibleItem header='MEAL' icon='arrow_drop_down_circle'> 
                <Row>
                    <div className='space'></div>
                    {
                        meal.map((product_item) => (
                            <Col s={8} m={3} l={3} className='push-s2 center' key={product_item._id} >
                                <div class=" cardd z-depth-3" >
                                    <div >
                                        <Row className='hdr'>
                                            <Col s={9} m={9} className="left-align">
                                                <h5>{product_item.name}</h5>
                                            </Col>
                                            <Col s={3} m={3} className="right-align">
                                                <h5 className='green-text'>${product_item.price}</h5>
                                            </Col>
                                        </Row>
                                    </div>
                                    <img class="crdImg" src={product_item.photo} alt=""></img>

                                    <div class="center supporting_text">
                                        <div className='hide-on-med-and-down'>
                                            <Row>
                                                <Col m={12}>
                                                    <button data-target='modalEdit' className='btns' onClick={() => this.datamodal(product_item)}>ADD TO ORDER</button>
                                                </Col>
                                            </Row>
                                        </div>

                                        <div className='hide-on-med-and-up show-on-medium-and-down'>
                                            <Row>
                                                <Col s={12} m={12}>
                                                    <Button flat className='icn-btn' data-target="modalEdit" onClick={() => this.datamodal(product_item)}>
                                                        <Icon small>edit</Icon>
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>

                                </div>
                            </Col>
                        ))
                    }
                </Row>
                </CollapsibleItem>
                </Collapsible>
                <ModalEdit datapass={this.state} />
            </div >
        )
    }
}

Meal_Component.propTypes = {
    getproduct_Meal: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    product: state.product,
    preorder: state.preorder
});


export default connect(mapStateToProps, { getproduct_Meal })(Meal_Component);
