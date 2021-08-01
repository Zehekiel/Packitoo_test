import { Product } from './../provider/models/product';
import { put, call, all, takeLatest } from "redux-saga/effects"
import { getBriefs } from "../provider/api/getBrief"
import { sagaActions } from './sagasActions';
import { deleteProduct, saveProduct } from '../reducer/product.reducer';

export function* fetchProductSaga(){
  try{
    const response: Product = yield call(getBriefs) 
    yield put (
      saveProduct(response)
    )
  } catch (e){
    yield put (
      deleteProduct()
    )
  }
}

function* ProductSaga(){
  yield all([takeLatest(sagaActions.FETCH_PRODUCT_SAGA, fetchProductSaga)])
}

export default ProductSaga
