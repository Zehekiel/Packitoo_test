import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Brief, BriefArray } from '../../provider/models/brief';
import { Product, ProductArray } from '../../provider/models/product';
import { sagaActions } from '../../sagas/sagasActions';
import { createSelector } from 'reselect'
import './listBrief.css'
import OneBrief from '../brief/brief';
import { saveBriefList } from '../../reducer/briefList.reducer';
import SelectProduct from '../selectProduct';

function ListBrief() {
  let briefsList:  BriefArray = useAppSelector((state) => state.briefListReducer.value)
  const productList:  ProductArray = useAppSelector((state) => state.productListReducer.value)

  const dispatch = useAppDispatch()

  const getStateList = (state :BriefArray) => state

  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_BRIEFLIST_SAGA})
  }, [dispatch])

  const getFilteredBriefList = (id: number ) => {
    console.log('id', id)
    return createSelector(
      getStateList,
      (list) => {
        if (id !== -1) {
          const filteredList = briefsList.filter(s => s.productId === id)
          console.log('filteredList', filteredList)
          briefsList = filteredList
        } else {
          console.log('id !== -1', id !== -1)
          console.log('list', list)
          saveBriefList(list)  
        }
      }
    )(briefsList)
  }


  return (
    <article className='listBriefArticle' >
      <SelectProduct OnChange={(e: number)=> getFilteredBriefList(e)}/>
      <ul className='briefList'>
        {
          briefsList.map((brief: Brief, index: number)=> (
            <OneBrief brief= {brief} key={brief.title + index} />
          ))
        }
      </ul>
    </article>
  )
}

export default ListBrief
