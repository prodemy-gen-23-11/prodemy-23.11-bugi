import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    cartData: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCartAction: (state, action) => {
            const selectedItem = state.cartData.find((item) => item.id == action.payload.id);

            let payload = {
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price,
                discount: action.payload.discount,
                imageUrl: action.payload.imageUrl,
                quantity: action.payload.quantity
            }

            if (selectedItem == null) {
                // api request
                axios
                    .post(`http://localhost:3000/cart/`, payload)
                    .then((res) => {
                        //redux state
                        state.cartData.push(res.data)
                    });

            } else {
                payload = {
                    id: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price,
                    discount: action.payload.discount,
                    imageUrl: action.payload.imageUrl,
                    quantity: selectedItem.quantity + action.payload.quantity
                };
                
                // api request
                axios
                    .put(`http://localhost:3000/cart/${selectedItem.id}`, payload)
                    .then((res) => {
                        // redux state
                        selectedItem.quantity += action.payload.quantity;
                    });
            }
        },
        quantityIncreaseAction: (state, action) => {
            const selectedItem = state.cartData.find((item) => item.id == action.payload.id);

            if (selectedItem != null) {
                // api request
                const payload = {
                    id: selectedItem.id,
                    name: selectedItem.name,
                    price: selectedItem.price,
                    discount: selectedItem.discount,
                    imageUrl: selectedItem.imageUrl,
                    quantity: selectedItem.quantity + 1
                };
                axios.put(`http://localhost:3000/cart/${selectedItem.id}`, payload);

                // redux state
                selectedItem.quantity += 1;
            }
        },
        quantityDecreaseAction: (state, action) => {
            const selectedItem = state.cartData.find((item) => item.id == action.payload.id);

            if (selectedItem != null) {
                if (selectedItem.quantity > 1) {
                    // api request
                    const payload = {
                        id: selectedItem.id,
                        name: selectedItem.name,
                        price: selectedItem.price,
                        discount: selectedItem.discount,
                        imageUrl: selectedItem.imageUrl,
                        quantity: selectedItem.quantity - 1
                    };
                    axios.put(`http://localhost:3000/cart/${selectedItem.id}`, payload);

                    // redux state
                    selectedItem.quantity -= 1;
                } else if (selectedItem.quantity == 1) {
                    // api request
                    axios.delete(`http://localhost:3000/cart/${selectedItem.id}`);

                    // redux state
                    state.cartData.splice(state.cartData.indexOf(selectedItem), 1);
                }
            }
        },
        removeItemAction: (state, action) => {
            const selectedItem = state.cartData.find((item) => item.id == action.payload.id);

            if (selectedItem != null) {
                // api request
                axios.delete(`http://localhost:3000/cart/${selectedItem.id}`);

                // redux state
                state.cartData.splice(state.cartData.indexOf(selectedItem), 1);
            }
        },
        fillFromApi: (state, action) => {
            console.log(action.payload);
            console.log(action.payload.length);
            console.log(state.cartData);
            console.log(state.cartData.length);

            if (action.payload.length != state.cartData.length) {
                state.cartData = [];
                action.payload.map((item) => state.cartData.push(item));
            }
        }
    }
});

export const { addToCartAction, quantityIncreaseAction, quantityDecreaseAction, removeItemAction, fillFromApi } = cartSlice.actions;

export default cartSlice.reducer;