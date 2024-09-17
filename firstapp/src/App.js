import logo from './logo.svg';
import './App.css';
import ControllForm from './ControllForm';
import { useState } from 'react';
import MultipleInputs from './MultipleInputs';
import FunctionInputs from './FunctionInputs';
import OtherInputs from './OtherInputs';
import MultipleChecks from './MultipleChecks';

function App() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(" Hello " + e.target[0].value);
    alert('Welcome to Our Website' + ' ' + e.target[0].value)
  }
  return (
    <div className="App">
      {/* <form onSubmit={handleSubmit}> */}
        
        {/* <h1> {name} </h1> */}
        {/* e k ander pure text box ki detail store hojaye gi */}

        {/* Enter Name : <input onChange={(e) => setName(e.target.value.toLowerCase().substring(0, 10).replace('&', '$'))} type='text' value={name} placeholder='Enter Name' /> */}
        <br /><br />
        {/* <input type='submit' value='submit' /> */}
      {/* </form> */}

      <ControllForm/>
      {/* <FunctionInputs/> */}
      {/* <OtherInputs/> */}
      {/* <MultipleChecks/> */}
      {/* <MultipleInputs/> */}


    </div>
  );
}

export default App;
