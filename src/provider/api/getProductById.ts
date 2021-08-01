import { ProductArray } from './../models/product';

export function getProductById (id: string): Promise<ProductArray>{
  return fetch(`http://localhost:3000/products/${id}`)
  .then((response) => response.json())
  .then((apiResponse: ProductArray)=> (apiResponse) )
  .catch((e) => {
    console.error('error getBriefs', e)
    return []
  })
}
