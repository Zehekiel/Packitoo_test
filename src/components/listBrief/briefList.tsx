import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Brief, BriefArray } from '../../provider/models/brief';
import { sagaActions } from '../../sagas/sagasActions';
import { createSelector } from 'reselect'
import './briefList.css'
import SelectProduct from '../ui/selectProduct';
import BriefCard from '../ui/card/briefCard';
import { CircularProgress } from '@material-ui/core';

function BriefList() {
  const briefsList:  BriefArray = useAppSelector((state) => state.briefListReducer.value)
  const [productIdSelected, setProductIdSelected] = useState(-1)
  const [loading, setLoading] = useState(true);

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_BRIEFLIST_SAGA})
    window.setTimeout(() => {
      setLoading(false)
    }, 2000);
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

  function onSelectProduct (id: number){
    setProductIdSelected(id)
    setLoading(true)
    window.setTimeout(() => {
      setLoading(false)
    }, 1500);
  }


  return (
    <article className='listBriefArticle' data-testid='briefList'>
      <SelectProduct OnChange={(e: number)=> onSelectProduct(e)}/>
      <ul className='briefList'>
        { 
          loading ? 
            <CircularProgress size={80} /> 
          : 
            getFilteredBriefList(productIdSelected).map((brief: Brief, index: number)=> (
              <BriefCard brief= {brief} key={brief.title + index} />
            ))
        }
      </ul>
    </article>
  )
}

export default BriefList
