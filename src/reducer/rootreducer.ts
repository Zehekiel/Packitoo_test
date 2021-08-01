import { combineReducers } from "redux"
import productSlice from './product.reducer';
import briefListReducer from '../reducer/brief.reducer';

const rootReducer = combineReducers({
  briefReducer: briefListReducer,
  productReducer : productSlice,
})

export type RootReducerState = ReturnType<typeof rootReducer>

export default rootReducer
