import { BriefArray } from './../provider/models/brief';
import { put, call, all, takeLatest } from "redux-saga/effects"
import { getBriefs } from "../provider/api/getBrief"
import { saveBriefList } from "../reducer/brief.reducer"
import { sagaActions } from './sagasActions';

export function* fetchBriefsSaga(){
  try{
    const response: BriefArray = yield call(getBriefs) 
    yield put (
      saveBriefList(response)
    )
  } catch (e){
    yield put (
      saveBriefList([])
    )
  }
}

function* BriefSaga(){
  yield all([takeLatest(sagaActions.FETCH_BRIEF_SAGA, fetchBriefsSaga)])
}

export default BriefSaga