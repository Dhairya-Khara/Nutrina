import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import {setAuth} from '../redux/authReducer'

// Controller for Login use case
export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate();


    // Input Boundary for Login use case
    const onFormSubmit = (e) =>{
        e.preventDefault();
        const url = `http://localhost:8080/loginUser`
        // {email, password} is the Input Data for the Login use case
        axios.post(url, {email, password}).then(async (res)=>{
            dispatch(setAuth({auth: true, token: res.data.token}))
            navigate("/dashboard")
        }).catch((error)=>{
            alert("Invalid email or password")
        })
    }

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input type = "text" value = {email} onChange = {e => setEmail(e.target.value)} />
                <input type = "password" value = {password} onChange = {e => setPassword(e.target.value)} />
                <button>Login</button>
            </form>
        </div>
    )
}