import React from 'react';
import BriefForm from '../components/briefForm/briefForm';
import BriefList from '../components/listBrief/briefList';
import './app.css'

function App() {

  return (
    <main className='App'>
      <BriefForm/>
      <BriefList/>
    </main>
  );
}

export default App;
