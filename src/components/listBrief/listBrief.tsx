import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Brief, BriefArray } from '../../provider/models/brief';
import { sagaActions } from '../../sagas/sagasActions';
import { createSelector } from 'reselect'
import './listBrief.css'
import OneBrief from '../brief/brief';
import SelectProduct from '../selectProduct';

function ListBrief() {
  let briefsList:  BriefArray = useAppSelector((state) => state.briefListReducer.value)
  const [productIdSelected, setProductIdSelected] = useState(-1)
  const dispatch = useAppDispatch()


  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_BRIEFLIST_SAGA})
  }, [dispatch])

  const getStateId = (state :number) => state

  const getFilteredBriefList = createSelector(
    getStateId,
    (id) => {
      if (id >=0){
        const filteredList = briefsList.filter(s => s.productId === id)
        return filteredList
      } else {
        return briefsList
      }
    }
  )


  return (
    <article className='listBriefArticle' >
      <SelectProduct OnChange={(e: number)=> setProductIdSelected(e)}/>
      <ul className='briefList'>
        {
          getFilteredBriefList(productIdSelected).map((brief: Brief, index: number)=> (
            <OneBrief brief= {brief} key={brief.title + index} />
          ))
        }
      </ul>
    </article>
  )
}

export default ListBrief
