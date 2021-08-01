import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getBriefs } from '../../provider/api/getBrief';
import { getProductById } from '../../provider/api/getProductById';
import { Brief, BriefArray } from '../../provider/models/brief';
import { sagaActions } from '../../sagas/sagasActions';
import './briefForm.css'

function BriefForm() {
  const briefList = useAppSelector((state) => state.briefReducer.value)
  const dispatch = useAppDispatch()

  useEffect(() => {
      dispatch({ type: sagaActions.FETCH_BRIEF_SAGA })
  }, [dispatch])

  async function onSelectBrief (productId: string){
    const productChoosed = await getProductById(productId)
    console.log('onSelectBrief ~ productChoosed', productChoosed)
  }

  return (
      <select onChange={(e)=> onSelectBrief(e.target.value)}>
        <option className='briefSection' value={0}> Sélectionner une option</option>
        {briefList.map((brief: Brief)=>(
          <option key={brief.id} className='briefSection' value={brief.productId} >
            {brief.title}
          </option>
        ))}
      </select>
  )
}

export default BriefForm;
