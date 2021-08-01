import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducer/rootreducer'

import briefSaga from './sagas/briefList.saga'
import postBriefSaga from './sagas/postBrief.saga'
import productsSaga from './sagas/productList.saga'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(briefSaga)
sagaMiddleware.run(productsSaga)
sagaMiddleware.run(postBriefSaga)

export const action = ({type, payload}: {type: string, payload: any}) => store.dispatch({type, payload})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

