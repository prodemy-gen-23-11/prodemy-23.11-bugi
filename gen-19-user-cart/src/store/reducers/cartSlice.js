import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    userId: 0,
    cartData: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCartAction: (state, action) => {
            const selectedItem = state.cartData.find((item) => item.id == action.payload.id);

            const product = {
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price,
                discount: action.payload.discount,
                imageUrl: action.payload.imageUrl,
                quantity: action.payload.quantity
            }

            if (selectedItem == null) {
                state.cartData.push(product);

                const payload = { productList: state.cartData };

                axios.patch(`http://localhost:3000/cart/${state.userId}`, payload);
            } else {
                selectedItem.quantity += action.payload.quantity;

                const payload = { productList: state.cartData };

                axios.patch(`http://localhost:3000/cart/${state.userId}`, payload);
            }
        },
        quantityIncreaseAction: (state, action) => {
            const selectedItem = state.cartData.find((item) => item.id == action.payload.id);

            if (selectedItem != null) {
                selectedItem.quantity += 1;

                const payload = { productList: state.cartData }

                axios.patch(`http://localhost:3000/cart/${state.userId}`, payload);
            }
        },
        quantityDecreaseAction: (state, action) => {
            const selectedItem = state.cartData.find((item) => item.id == action.payload.id);

            if (selectedItem != null) {
                if (selectedItem.quantity > 1) {
                    selectedItem.quantity -= 1;

                    const payload = { productList: state.cartData }

                    axios.patch(`http://localhost:3000/cart/${state.userId}`, payload);
                } else if (selectedItem.quantity == 1) {
                    state.cartData.splice(state.cartData.indexOf(selectedItem), 1);

                    const payload = { productList: state.cartData }

                    axios.patch(`http://localhost:3000/cart/${state.userId}`, payload);
                }
            }
        },
        removeItemAction: (state, action) => {
            const selectedItem = state.cartData.find((item) => item.id == action.payload.id);

            if (selectedItem != null) {
                state.cartData.splice(state.cartData.indexOf(selectedItem), 1);

                const payload = { productList: state.cartData }

                axios.patch(`http://localhost:3000/cart/${state.userId}`, payload);
            }
        },
        fillFromApi: (state, action) => {
            if (action.payload.length != state.cartData.length) {
                state.cartData = [];
                action.payload.map((item) => state.cartData.push(item));
            }
        },
        createNewCartAction: (state, action) => {
            const selectedUserId = action.payload.userId;

            axios
                .post(`http://localhost:3000/cart/`, { id: selectedUserId, productList: [] })
                .then((res) => {
                    state.userId = res.data.id;
                });
        },
        setUserIdStateAction: (state, action) => {
            state.userId = action.payload;
        }
    }
});

export const { addToCartAction, quantityIncreaseAction, quantityDecreaseAction, removeItemAction, fillFromApi, createNewCartAction, setUserIdStateAction } = cartSlice.actions;

export default cartSlice.reducer;