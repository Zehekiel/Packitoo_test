import { BriefArray } from '../provider/models/brief';
import { put, call, all, takeLatest } from "redux-saga/effects"
import { getBriefs } from "../provider/api/brief/getBrief"
import { saveBriefList } from "../reducer/briefList.reducer"
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

function* BriefListSaga(){
  yield all([takeLatest(sagaActions.FETCH_BRIEF_SAGA, fetchBriefsSaga)])
}

export default BriefListSaga