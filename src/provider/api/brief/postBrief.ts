import { Brief, BriefArray } from "../../models/brief";

export function postBrief (newBrief: Brief): Promise<BriefArray>{
  return fetch('http://localhost:4000/briefs',{
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBrief),
  }
  )
  .then((response) => response.json())
  .then((apiResponse: BriefArray)=>{
    return apiResponse
  })
  
  .catch((e) => {
    console.error('error postBrief', e)
    return []
  })
}
