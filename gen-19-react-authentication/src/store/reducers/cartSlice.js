import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartData: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCartAction: (state, action) => {
            const selectedItem = state.cartData.find((item) => item.id == action.payload.id);
            if (selectedItem == null) {
                state.cartData.push(action.payload);
            } else {
                selectedItem.quantity += action.payload.quantity;
            }
        },
        quantityIncreaseAction: (state, action) => {
            const selectedItem = state.cartData.find((item) => item.id == action.payload.id);
            if (selectedItem != null) {
                selectedItem.quantity += 1;
            }
        },
        quantityDecreaseAction: (state, action) => {
            const selectedItem = state.cartData.find((item) => item.id == action.payload.id);
            if (selectedItem != null) {
                if (selectedItem.quantity > 1) {
                    selectedItem.quantity -= 1;
                } else if (selectedItem.quantity == 1) {
                    state.cartData.splice(state.cartData.indexOf(selectedItem), 1);
                }
            }
        },
        removeItemAction: (state, action) => {
            const selectedItem = state.cartData.find((item) => item.id == action.payload.id);
            if (selectedItem != null) {
                state.cartData.splice(state.cartData.indexOf(selectedItem), 1);
            }
        }
    }
});

export const { addToCartAction, quantityIncreaseAction, quantityDecreaseAction, removeItemAction } = cartSlice.actions;

export default cartSlice.reducer;