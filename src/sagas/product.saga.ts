import { put, call, all, takeLatest } from "redux-saga/effects"
import { sagaActions } from './sagasActions';
import { ProductArray } from '../provider/models/product';
import { getProducts } from '../provider/api/product/getProducts';
import { emptyProductList, saveProductList } from "../reducer/products.reducer";

export function* fetchProductsSaga(){
  try{
    const response: ProductArray = yield call(getProducts) 
    yield put (
      saveProductList(response)
    )
  } catch (e){
    yield put (
      emptyProductList()
    )
  }
}

function* BriefSaga(){
  yield all([takeLatest(sagaActions.FETCH_PRODUCTS_SAGA, fetchProductsSaga)])
}

export default BriefSaga
