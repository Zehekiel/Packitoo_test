import React, { useEffect, useState } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getBriefs } from '../provider/api/getBrief';
import { Brief, BriefArray } from '../provider/models/brief';
import { saveBriefList } from '../reducer/brief.reducer';
import { sagaActions } from '../sagas/sagasActions';

function App() {
  const [briefs, setBriefs] = useState<BriefArray>([])
  console.log('briefs', briefs)
  const briefList = useAppSelector((state) => state.briefReducer.value)
  console.log('briefList', briefList)

  const dispatch = useAppDispatch()

  useEffect(() => {
    const setter= async() => {
      const newBriefList = await getBriefs()
      setBriefs(newBriefList)
      dispatch({ type: sagaActions.FETCH_BRIEF_SAGA })
    }
    setter()
    return
  }, [])

  return (
    <div className="App">
      <main>
        {briefList.map((brief: Brief)=>(
          <p>{brief.title}</p>
        ))}
      </main>
    </div>
  );
}

export default App;
