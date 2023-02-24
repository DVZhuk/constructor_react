import React, { useState } from 'react';
import { AuthContext } from './components/Context/Context';
import GridSelect from './components/GridSelect';
import Layout from './components/Layout';

function App() {
  const [layoutSelect, setLayoutSelect] = useState('layout--landing');
  const [resetLayout, setResetLayout] = useState(false)

  // const handleChange = (event) => {
  //   setGridSelect(event.target.value)
  //   console.log(event)
  // }

  return (
    <div className="App">
      <AuthContext.Provider value={{
        resetLayout,
        setResetLayout
      }}>
        <GridSelect setLayoutSelect={setLayoutSelect}/>
        <Layout layoutSelect={layoutSelect}/>
      </AuthContext.Provider>
      
    </div>
  );
}

export default App;
