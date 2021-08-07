import React, { useState } from 'react';
import { useAppSelector } from '../hooks';
import { Product, ProductArray } from '../provider/models/product';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { createSelector } from 'reselect';
import FormControl from '@material-ui/core/FormControl';

function SelectProduct(props: {OnChange: Function}) {
  const productList:  ProductArray = useAppSelector((state) => state.productListReducer.value)
  const [productSelected, setProductSelected] = useState<Product>(new Product());
  console.log('productSelected', productSelected)


  function handleChange ( product: Product) {
    setProductSelected(product)
    props.OnChange(product.id)
  };

  return (
      <Select
        value={productSelected.name}
      >
        <MenuItem value={'Tous les produits'}> Tous les produits</MenuItem>

        {productList.map((product: Product, index: number)=> (
          <MenuItem 
            value={product.name} 
            key={product.name + index}
            onClick={(e) => handleChange(product)}
          > {product.name}</MenuItem>
        ))}
      </Select>
  )
}

export default SelectProduct
