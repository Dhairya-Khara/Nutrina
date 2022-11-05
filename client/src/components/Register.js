import React from "react"
import { ReactDOM, useState } from "react"
import Input from "./Input"

const Register = () => {
    return (
        <form className="form">
            <Input type="text" text="Username" />
            <Input type="password" text="Password" />
            <button type="submit">Register</button>
        </form>
    )
}

export default Register