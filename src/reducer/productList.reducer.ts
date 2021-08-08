import { Product } from '../provider/models/product'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    value: new Array()
  },
  reducers: {
    saveProductList: (state, action: PayloadAction<Array<Product>>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { saveProductList } = productListSlice.actions

export default productListSlice.reducer