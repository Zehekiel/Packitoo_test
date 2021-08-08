import { ProductArray } from "../../models/product";

export function getProducts (): Promise<ProductArray>{
  return fetch('http://localhost:4000/products')
  .then((response) => response.json())
  .then((apiResponse: ProductArray)=> (apiResponse) )
  .catch((e) => {
    console.error('error getProducts', e)
    return []
  })
}
