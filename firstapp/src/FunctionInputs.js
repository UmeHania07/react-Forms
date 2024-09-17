import React, { useState } from 'react'

function FunctionInputs() {
    const [data, setData] = useState({
        name: " ",
        email: " "
    })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value 
        const new_value = (e.target.name === 'email') ? e.target.value.toLowerCase().replace('#' , '@')  : e.target.value;

        // console mai is liye name k sath value arahi h Q k maine console mai name k sath , coma deya h phir value
        console.log(name, value)


        //  previous k ander hmre apss previous value hoi hy or set data ose serif update krta h state mai set nhi krta
        setData((prev) => {

            return {
                // spread operator hamesha calling k time use hota h
                ...prev, [name]: new_value

            }
        });
    }
    // onsubmit ki sab value is e k parameter mai save hngi means form 
    const handleSubmit= (e) => {
        e.preventDefault()
      console.log(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1> {data.name}  </h1>  
                <h1> {data.email}  </h1>  

                <label>Enter Name:</label>
                <input name='name' type='text' value={data.name} onChange={handleChange} placeholder='Enter your Name ' />
                <br /><br />

                <label>Enter Email:</label>
                <input name='email' type='text' value={data.email} onChange={handleChange} placeholder='Enter your Email ' />
                <br /> <br />

                <input type='submit' value='Submit' />

            </form>

        </div>
    )
}

export default FunctionInputs
