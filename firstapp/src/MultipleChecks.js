import React, { useState } from 'react'

function MultipleChecks() {
  const [fruitsArray , setFruitsArray] = useState([]);

    const handleChange = (e) => {
     const value = e.target.value;
     const checked = e.target.checked;

  console.log(value,checked);

//   true ki condition mai if ka part chalraha h or unchecked ki condition mai else chaly ga
  if(checked){
    setFruitsArray([
        // fruitsArray ek empty array h jo usetate mai deya h
        ...fruitsArray , value])
  }else{

    // filter humhy serif checked item dega o unchecked ko nikl dega
    setFruitsArray(fruitsArray.filter((e) => (e !== value) ))
  }
   
    }
    const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(fruitsArray)
       
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Select Fruits: &nbsp;</label>
        <input type='checkbox' name='fruits' value='Apple' onChange={handleChange}/>
        <label>Apple</label>
        &nbsp;

        <input type='checkbox' name='fruits' value='Mango'onChange={handleChange}/>
        <label>Mango</label>
        &nbsp;

        <input type='checkbox' name='fruits' value='Banana'onChange={handleChange}/>
        <label>Banana</label>
        &nbsp;

        <input type='checkbox' name='fruits' value='Pomegrant'onChange={handleChange}/>
        <label>Pomegrant</label>
        <br/><br/>

        <input type='submit' value='Submit'/>
        </form>
    </div>
  )
}

export default MultipleChecks
