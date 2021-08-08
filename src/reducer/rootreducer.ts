import { combineReducers } from 'redux'
import briefListReducer from './briefList.reducer'
import productListSlice from './productList.reducer'

const rootReducer = combineReducers({
  briefListReducer: briefListReducer,
  productListReducer : productListSlice,
})

export type RootReducerState = ReturnType<typeof rootReducer>

export default rootReducer
