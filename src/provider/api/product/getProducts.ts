import { ProductArray } from "../../models/product";

export function getProducts (): Promise<ProductArray>{
  return fetch('http://localhost:3000/products')
  .then((response) => response.json())
  .then((apiResponse: ProductArray)=> (apiResponse) )
  .catch((e) => {
    console.error('error getBriefs', e)
    return []
  })
}
