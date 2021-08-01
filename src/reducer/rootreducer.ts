import { combineReducers } from "redux"
import productSlice from './product.reducer';
import briefListReducer from '../reducer/brief.reducer';
import productListSlice from './products.reducer';

const rootReducer = combineReducers({
  briefReducer: briefListReducer,
  productListReducer : productListSlice,
  productReducer : productSlice,
})

export type RootReducerState = ReturnType<typeof rootReducer>

export default rootReducer
