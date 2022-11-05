import React from "react"
import { ReactDOM } from "react"
import Input from "./Input"

const Login = () => {
    return (
        <form className="form">
            <Input type="text" text="Username" />
            <Input type="password" text="Password" />
            <button type="submit">Login</button>
        </form>
    )
}

export default Login