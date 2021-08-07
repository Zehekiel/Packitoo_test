import React from 'react';
import { createSelector } from 'reselect';
import { useAppSelector } from '../../hooks';
import { Brief } from '../../provider/models/brief';
import { Product, ProductArray } from '../../provider/models/product';
import './brief.css'

function OneBrief(props:{brief:  Brief}) {
  const productList:  ProductArray = useAppSelector((state) => state.productListReducer.value)
  const { brief } = props

  const StateProduct = (state: number) => state
  const getProduct = createSelector(
    StateProduct,
    state => productList.reduce((acc: Product, product: Product) => {
      if (product.id === state){
        acc = product
        return acc
      }
      return acc
    })
  )

  return (
    <ol key={brief.title} className='brief'>
      <p>{brief.title}</p>
      <p>{brief.comment}</p>
      <p>{getProduct(brief.productId).name}</p>
    </ol>
  )
}

export default OneBrief;
