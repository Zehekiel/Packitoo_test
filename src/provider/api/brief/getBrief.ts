import { BriefArray } from '../../models/brief'

export function getBriefs (): Promise<BriefArray>{
  return fetch('http://localhost:4000/briefs')
    .then((response) => response.json())
    .then((apiResponse: BriefArray)=> (apiResponse) )
    .catch((e) => {
      console.error('error getBriefs', e)
      return []
    })
}
