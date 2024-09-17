import React, { Component } from 'react'

export default class MultipleInputs extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: " hania khan",
            email: "hania.shahid@gmail.com"
        }
    }
    // handleName = (e) => {
    //     this.setState({
    //         name: e.target.value,
    //     })
    // };

    // handleEmail = (e) => {
    //     this.setState({
    //         email: e.target.value
    //     })
    // };

    handleChange = (e) => {
        console.log(e.target.value)
        // ye name input wala name h jo hmne input ko property de hy name
        console.log(e.target.name)
        //  ye line email ko small letter mai likhne k liye h
        const new_value = (e.target.name === 'email') ? e.target.value.toLowerCase() : e.target.value;

        // obj ki property ko exists krne k liye hum [] brackets ka use kty hn
        this.setState({
            // [e.target.name]: e.target.value  OR
            [e.target.name]: new_value.toLowerCase()
        })

    };

    render() {
        return (
            <div>
                <form>
                    <h1> {this.state.name} </h1>
                    <h1> {this.state.email} </h1>

                    <label>Enter Name : </label>
                    <input name='name' type='text' value={this.state.name} onChange={this.handleChange} placeholder='Enter Your Name' />
                    <br /><br />
                    <label>Enter Email : </label>
                    <input name='email' type='text' value={this.state.email} onChange={this.handleChange} placeholder='Enter Your Email' />
                    <br /><br />
                    <input type='submit' value='submit' />

                </form>
            </div>
        )
    }
}
