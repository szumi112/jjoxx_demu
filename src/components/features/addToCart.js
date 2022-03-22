import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartQuantity: 0,
    cartIcon: {value: 0},
    cartTotalAmount: 0,
    value: 0,
}


export const addToCartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        
        add(state, action ) {

            const itemIndex = state.cartItems.findIndex(
                (props) => props.id === action.payload.id
                );
                if(itemIndex >= 0){
                    state.cartItems[itemIndex].cartQuantity += 1;
                } else {
                    const tempProduct = {...action.payload, cartQuantity: 1}
                    state.cartItems.push(tempProduct);
                }
        },
        remove(state, action) {
            const removeItem = state.cartItems.filter(
                (cartItem) => cartItem.id !== action.payload.id 
            
            );

            state.cartItems = removeItem;
            state.value -= 1;
        },
        increment: (state) => {
            const Items = state.cartItems.filter(
                (element, index) => state.cartItems.indexOf(element) === index);
                state.value = Items.length;
        },
        getTotal(state) {
            let { total } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    
                    const { price } = cartItem;
                    const itemTotal = price;
                    
                    cartTotal.total += itemTotal;

                    return cartTotal;
                },
                    {
                    total: 0,
                    }
            );
            total = parseFloat(total.toFixed(2));
            state.cartTotalAmount = total;
        },
        clearCart(state) {
            state.cartItems = [];
        },
        clearCartIcon(state) {
            state.value = 0;
        }
    },

});

export const {add, remove, increment, getTotal, clearCart, clearCartIcon} = addToCartSlice.actions;


export default addToCartSlice.reducer;