import React from 'react';
import Hello from './components/hello/hello';
import ButtonAppBar from './components/menu/menu';


function App() {

  const getTime = () => {
    return (new Date()).toLocaleDateString();
  }


  return (
    <div >
      <Hello />
      <ButtonAppBar />
      <div>
        {getTime()}
      </div>
    </div>
  );
}

export default App;
