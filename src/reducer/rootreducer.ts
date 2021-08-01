import { combineReducers } from "redux"
import productListSlice from '../reducer/product.reducer copy';
import briefListReducer from '../reducer/brief.reducer';

const rootReducer = combineReducers({
  briefReducer: briefListReducer,
  productReducer : productListSlice,
})

export type RootReducerState = ReturnType<typeof rootReducer>

export default rootReducer
