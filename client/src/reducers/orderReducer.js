import {GET_ORDER, ORDER_LOADING, DELETE_ORDER} from '../accions/types';
  
  const initialState = {
    order: [],
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_ORDER:
        return {
          ...state,
          order: action.payload,
          loading: true
        };
        case DELETE_ORDER:
        return {
          ...state,
          order: state.order.filter(order => order._id !== action.payload)
  };
        case ORDER_LOADING:
        return {
            ...state,
            loading: true
    };
      default:
        return state;
    }
  }