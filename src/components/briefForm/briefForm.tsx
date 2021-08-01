import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getProductById } from '../../provider/api/product/getProductById';
import { Brief } from '../../provider/models/brief';
import { Product, ProductArray } from '../../provider/models/product';
import { saveProduct } from '../../reducer/product.reducer';
import { sagaActions } from '../../sagas/sagasActions';
import './briefForm.css'

function BriefForm() {
  const productList:  ProductArray = useAppSelector((state) => state.productListReducer.value)
  const productChoosed:  Product = useAppSelector((state) => state.productReducer.value)
  const [brief, setBrief] = useState(new Brief())

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_PRODUCTS_SAGA })
  }, [dispatch])

  async function onSelectProduct (productId: string){
    onChangeInput(productId, 'productId')
    const productChoosed: Product = await getProductById(productId)
    dispatch(saveProduct(productChoosed))
  }

  async function onChangeInput (value: string, field: 'title' | 'comment' | 'productId'){
    setBrief(old => ({...old, [field]: value}))
  }

  async function onSubmit (){
    console.log('productChoosed', productChoosed)
    console.log('brief', brief)
  }

  return (
    <article className='briefArticle' >
      <form onSubmit={()=> onSubmit()} className='briefForm'>
        <input type='text' placeholder='title'  onChange ={(e)=> onChangeInput(e.target.value, 'title') }/>
        <input type='text' placeholder='comment' onChange={(e)=> onChangeInput(e.target.value, 'comment') }/>
        <select onChange={(e)=> onSelectProduct(e.target.value)}>
          <option className='briefSection' value={0}> Sélectionner un produit</option>
          {productList.map((product: Product)=>(
            <option 
              key={product.id} 
              className='briefSection' 
              value={product.id}
            >
              {product.name}
            </option>
          ))}
        </select>
        <input type="submit" value="Sauvegarder" onClick={()=> onSubmit()}/>
      </form>
    </article>
  )
}

export default BriefForm;
