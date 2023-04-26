import { createSlice } from "@reduxjs/toolkit";
import { checkOutProductList } from "./InitialValuesCheckOutProduct";

const checkOutProductSlice = createSlice({
    name: "checkoutProducts",
    initialState: checkOutProductList,
    reducers: {
        addToBasket: (state, action) => {
            // console.log(state,action);
            state.push(action.payload);
        },
        removeFromBasket: (state, action) => {
            const { id } = action.payload;
            const removeProduct = state.find(product => product.id === id);
            if (removeProduct) {
                return state.filter(f => f.id !== id);
            }
        },
    },
});

export const { addToBasket, removeFromBasket, totalPrice } = checkOutProductSlice.actions;
export default checkOutProductSlice.reducer;