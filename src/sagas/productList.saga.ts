import { put, call, all, takeLatest } from 'redux-saga/effects'
import { sagaActions } from './sagasActions'
import { ProductArray } from '../provider/models/product'
import { getProducts } from '../provider/api/product/getProducts'
import { saveProductList } from '../reducer/productList.reducer'

export function* fetchProductsSaga(){
  try{
    const response: ProductArray = yield call(getProducts) 
    yield put (
      saveProductList(response)
    )
  } catch (e){
    console.error('error fetchProductsSaga', e)
  }
}

function* ProductListSaga(){
  yield all([takeLatest(sagaActions.FETCH_PRODUCTSLIST_SAGA, fetchProductsSaga)])
}

export default ProductListSaga
