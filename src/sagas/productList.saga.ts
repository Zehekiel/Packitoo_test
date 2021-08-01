import { put, call, all, takeLatest } from "redux-saga/effects"
import { sagaActions } from './sagasActions';
import { ProductArray } from '../provider/models/product';
import { getProducts } from '../provider/api/product/getProducts';
import { emptyProductList, saveProductList } from "../reducer/productList.reducer";

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

function* ProductListSaga(){
  yield all([takeLatest(sagaActions.FETCH_PRODUCTSLIST_SAGA, fetchProductsSaga)])
}

export default ProductListSaga
