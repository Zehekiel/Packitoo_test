import { Product } from '../../models/product';

export function getProductById (id: number): Promise<Product>{
  return fetch(`http://localhost:3000/products/${id}`)
  .then((response) => response.json())
  .then((apiResponse: Product)=> (apiResponse) )
  .catch((e) => {
    console.error('error getProductById', e)
    return new Product()
  })
}
