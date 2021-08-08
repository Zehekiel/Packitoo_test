import React, { useState } from 'react'
import { useAppSelector } from '../../hooks'
import { Product, ProductArray } from '../../provider/models/product'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

function SelectProduct(props: {OnChange: Function, dataTestid: string}) {
  const productList:  ProductArray = useAppSelector((state) => state.productListReducer.value)
  const [productSelected, setProductSelected] = useState<Product>(new Product())

  function handleChange ( product: Product) {
    setProductSelected(product)
    props.OnChange(product.id)
  }

  return (
    <Select
      value={productSelected.name}
      data-testid= {props.dataTestid}
    >
      <MenuItem 
        value={new Product().name} 
        onClick={() => handleChange(new Product())}
        data-testid= 'firstItem'
      >
        {new Product().name}
      </MenuItem>

      {productList.map((product: Product, index: number)=> (
        <MenuItem
          data-testid= {`Item${index}`}
          value={product.name} 
          key={product.name + index}
          onClick={() => handleChange(product)}
        > {product.name}</MenuItem>
      ))}
    </Select>
  )
}

export default SelectProduct
