import React, { Component } from 'react'

export default class ControllForm extends Component {
  constructor() {
    super()
  
    this.state = {
       data: '' 
    }
  }
// e means Event. e k ander pure onchange ki propery arahi hn or agr mai likh do e.target to wo mujy event ka input dega.  
  hanleChange = (e) => {
    // console.log(e.target.value)
    this.setState({
        // data:e.target.value.toLowerCase()
        data:e.target.value.toLowerCase().substring(0,15)
       
        
    });
  }
  handleForm = (e) => {
    // ye page ko reload hone se rukhta h
    e.preventDefault()
    console.log(e.target[0].value.toUpperCase())
   
  }
  
    render() {
    return (
      <div>
  
        <form onSubmit={this.handleForm}>
            {/* 0 and 1 pe mujy input or button mil raha h */}
             <h1> {this.state.data} </h1>
            Enter Name : <input onChange={this.hanleChange} type='text' value={this.state.data} />
            <br/> <br/>
            {/* <button></button> */}
            <button  type='submit' value='Submit'> Click me</button>
        </form>
      </div>
    )
  }
}
