import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice ({
    name: "cart",
    initialState: {
        cart: [],
        amount: 0,
        totalAmount: 0,
        totalPrice: 0
    },
    reducers: {
        addToCart(state,action){
            const productId = action.payload;
            try {
                const exist = state.cart.find((product) => 
                    product.id === productId.id &&
                    product.size === productId.size &&
                    product.color === productId.color
                )
                if (exist) {
                    exist.amount ++;
                    exist.totalPrice += productId.price;
                    state.totalAmount ++;
                    state.totalPrice += productId.price; 
                } else {
                    state.cart.push({
                        id: productId.id,
                        price: productId.price,
                        size: productId.size,
                        name: productId.name,
                        color: productId.color,
                        amount: 1,
                        img: productId.img,
                        totalPrice: productId.price
                    })
                }
                state.totalAmount ++;
                state.totalPrice += productId.price;
            } catch (error) {
                return error
            }
        }
    }
})
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;