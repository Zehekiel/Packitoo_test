import { Product } from '../../src/provider/models/product'
import reducer, {
  saveProductList,
} from '../../src/reducer/productList.reducer'
const product = new Product()
const basicProduct =  { ...product }

it('should handle a new product being added to an empty list', () => {
  const previousState = { value: [] }
  const newState = [ basicProduct, basicProduct ]
  expect(reducer(previousState, saveProductList(newState)).value).to.equal(newState)
})
