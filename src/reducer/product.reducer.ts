import { Product } from '../provider/models/product'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const productListSlice = createSlice({
  name: 'product',
  initialState: {
    value: new Product()
  },
  reducers: {
    saveProduct: (state, action: PayloadAction<Product>) => {
      state.value = action.payload
    },
    deleteProduct: (state) => {
      state.value = new Product()
    },
  },
})

// Action creators are generated for each case reducer function
export const { saveProduct, deleteProduct } = productListSlice.actions

export default productListSlice.reducer