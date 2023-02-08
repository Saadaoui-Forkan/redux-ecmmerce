import { createSlice } from '@reduxjs/toolkit'
import { storeData } from '../../assets/data/dummyData'

export const productSlice = createSlice({
    name: "products",
    initialState: {
        filteredProducts: [],
        // same thing if we write *** filteredProducts: storeData ***
        singleProduct: [],
    },
    reducers: {
        filterProducts(state,action){
            try {
                const filter = storeData.filter(prod => prod.type === action.payload)
                state.filteredProducts = filter
            } catch (error) {
                return error
            }
        },
        singleProduct(state,action){
            try {
                const singleItem = storeData.filter(item => item.id === action.payload)
                state.singleProduct = singleItem
                // console.log(singleItem)
            } catch (error) {
                
            }
        }
    }
})

export const { filterProducts,singleProduct } = productSlice.actions
export default productSlice.reducer