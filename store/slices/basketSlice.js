import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    items: [],
    product: [],
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        setProduct(state, action) {
            state.product = action.payload;
        },
        addToBasket: (state, action) => {
            state.items = [...state.items, action.payload];
        },
        removeFromBasket: (state, action) => {
            const index = state.items.findIndex(
                (basketItem) => basketItem.id === action.payload.id
            );

            let newBasket = [...state.items];

            if (index >= 0) {
                //Item exists in basket, remove it from basket
                newBasket.splice(index, 1);
            } else {
                //Item is not in basket
                console.warn(
                    `Can't remove product (id ${action.payload.id}) as its not in basket`
                );
            }

            state.items = newBasket;
        },
    },
});

export const { addToBasket, removeFromBasket, setProduct } =
    basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectProduct = (state) => state.basket.product;
export const selectTotal = (state) =>
    state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
