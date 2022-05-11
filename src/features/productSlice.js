import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name:'products',
    initialState: {
        products: [],
    },
    reducers: {
        fetchProducts: (state, action) => {
            state.products = action.payload;
        }
    }
});

export const { fetchProducts } = productSlice.actions;


export default productSlice.reducer;