/* eslint-disable @typescript-eslint/no-array-constructor */
import { Product } from '../provider/models/product'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    value: new Array()
  },
  reducers: {
    saveList: (state, action: PayloadAction<Array<Product>>) => {
      state.value = action.payload
    },
    deleteOneProduct: (state, action: PayloadAction<number>) => {
      const arrayFiltered = state.value.filter((product: Product)=> product.id !== action.payload)
      state.value = arrayFiltered
    },
    setList: (state, action: PayloadAction<Product>) => {
      const arrayReduce: Array<Product> = state.value.reduce((acc: Array<any>, product: Product)=> {
        if (product.id !== action.payload.id){
          acc.push(product)
        } else {
          acc.push(action.payload)
        }
        return acc
      }, [])
      state.value = arrayReduce
    },
    addProduct: (
      state: { value: Array<any> },
      action: PayloadAction<Product>
    ) => {
      state.value.push(action.payload)
    },
    emptyList: (state) => {
      state.value = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { saveList, addProduct, emptyList, deleteOneProduct, setList } = productListSlice.actions

export default productListSlice.reducer