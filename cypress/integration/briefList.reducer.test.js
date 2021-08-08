import { Brief } from '../../src/provider/models/brief'
import reducer, {
  saveBriefList,
  addBrief,
} from '../../src/reducer/briefList.reducer'
const brief = new Brief()
const basicBrief =  { ...brief }

it('should handle a new brief being added to an empty list', () => {
  const previousState = { value: [] }
  const newState = [ basicBrief, basicBrief ]
  expect(reducer(previousState, saveBriefList(newState)).value).to.equal(newState)
})


it('should handle to add one brief on a full briefList', () => {
  const previousState = { value: [ 
    { ...basicBrief, _id:'1' }, 
    { ...basicBrief, _id:'2' },
  ] }
  const newState = { value: [ 
    { ...basicBrief, _id:'1' }, 
    { ...basicBrief, _id:'2' },
    { ...basicBrief, _id:'3' }
  ] }
  expect(reducer(previousState, addBrief({ ...Brief, _id:'3' })).value).to.equal(newState.value)
})
