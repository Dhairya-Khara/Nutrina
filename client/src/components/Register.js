import React from "react"
import { ReactDOM, useState } from "react"
import Input from "./Input"
import axios from 'axios'

// const Register = () => {
//     return (
//         <form className="form">
//             <Input type="text" text="Username" />
//             <Input type="password" text="Password" />
//             <button type="submit">Register</button>
//         </form>
//     )
// }

class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }
    }

    onEmailUpdate = (e) => {
        const email = e.target.value;
        this.setState(() => {
            return { email }
        })
    }

    onPasswordUpdate = (e) => {
        const password = e.target.value;
        this.setState(() => {
            return { password }
        }
        )
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.email)
        console.log(this.state.password)
        const url = `http://localhost:8080/createUser`
        axios.post(url, { "email": this.state.email, "password": this.state.password }).then(async (res) => {
            if (res.status === 200) {
                alert("User with email " + this.state.email + " has been created.")
                this.setState(() => {
                    return ({
                        email: "",
                        password: ""
                    })
                })
            }
            else {
                alert("Error")
            }
        })
    }

    render() {
        return (
            <form className="form" onSubmit={this.onFormSubmit}>
                <Input type="text" value = {this.state.email} onChange = {this.onEmailUpdate}/>
                <Input type="password" value = {this.state.password} onChange = {this.onPasswordUpdate}/>
                <button type="submit">Register</button>
            </form>
        )
    };
}



export default Register