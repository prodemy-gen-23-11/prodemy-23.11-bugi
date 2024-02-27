import { ADD_TO_CART } from "../types";

const initialState = {
    cartData: []
};

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartData: [...state.cartData, action.payload]
            };
        default:
            return state;
    }
};

export default cartReducer;