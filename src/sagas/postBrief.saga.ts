import { put, call, all, takeLatest } from "redux-saga/effects"
import { sagaActions } from './sagasActions';
import { Brief } from "../provider/models/brief";
import { postBrief } from "../provider/api/brief/postBrief";
import { addBrief } from "../reducer/briefList.reducer";

export function* fetchPostBrief({payload}:any){
  try{
    const response: Brief = yield call(postBrief, payload) 
    yield put (
      addBrief(response)
    )
  } catch (e){
    console.error('error fetchPostBrief', e)
  }
}

function* ProductListSaga(){
  yield all([takeLatest(sagaActions.FETCH_POSTBRIEF_SAGA, fetchPostBrief)])
}

export default ProductListSaga