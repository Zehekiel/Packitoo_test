import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { getProductById } from '../../provider/api/product/getProductById';
import { Brief } from '../../provider/models/brief';
import { Product } from '../../provider/models/product';
import { saveProduct } from '../../reducer/product.reducer';
import { sagaActions } from '../../sagas/sagasActions';
import SelectProduct from '../selectProduct';
import './briefForm.css'

function BriefForm() {
  const [brief, setBrief] = useState(new Brief())

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_PRODUCTSLIST_SAGA})
  }, [dispatch])

  async function onSelectProduct (productId: number){
    onChangeInput(productId, 'productId')
    const productChoosed: Product = await getProductById(productId)
    dispatch(saveProduct(productChoosed))
  }

  async function onChangeInput (value: string | number, field: 'title' | 'comment' | 'productId'){
    if(field === 'productId' && typeof value === 'number'){
      setBrief(old => ({...old, [field]: value}))
    } else {
      setBrief(old => ({...old, [field]: value}))
    }
  }

  function onSubmit (){
    dispatch({ type: sagaActions.FETCH_POSTBRIEF_SAGA, payload: brief })
  }

  return (
    <article className='briefArticle' >
      <form onSubmit={()=> onSubmit()} className='briefForm'>
        <input type='text' placeholder='title'  onChange ={(e)=> onChangeInput(e.target.value, 'title') }/>
        <input type='text' placeholder='comment' onChange={(e)=> onChangeInput(e.target.value, 'comment') }/>
        <SelectProduct OnChange={(e: number)=> onSelectProduct(e)}/>
        <input type="submit" value="Sauvegarder" />
      </form>
    </article>
  )
}

export default BriefForm;
