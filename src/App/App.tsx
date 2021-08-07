import React from 'react';
import BriefForm from '../components/briefForm/briefForm';
import ListBrief from '../components/listBrief/listBrief';
import './app.css'

function App() {

  return (
    <main className='App'>
      <BriefForm/>
      <ListBrief/>
    </main>
  );
}

export default App;
