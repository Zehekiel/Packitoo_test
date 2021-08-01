import { combineReducers } from "redux"
import productSlice from './product.reducer';
import briefListReducer from './briefList.reducer';
import productListSlice from './productList.reducer';
import briefReducer from "./brief.reducer";

const rootReducer = combineReducers({
  briefListReducer: briefListReducer,
  briefReducer: briefReducer,
  productListReducer : productListSlice,
  productReducer : productSlice,
})

export type RootReducerState = ReturnType<typeof rootReducer>

export default rootReducer
