import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {setAuth} from '../redux/authReducer'
import { useNavigate } from "react-router-dom";



export default function Dashboard() {
    const auth = useSelector((state) => state.auth.authenticated)
    const dispatch = useDispatch()
    const navigate = useNavigate();


    const onLogout = () =>{
        dispatch(setAuth({auth: false, token: ''}))
        navigate("/")
    }

    if (auth) {
        return (
            <div>
                <button onClick = {onLogout}>Logout</button>
                <h1>Dashboars</h1>
            </div>
        )
    }
    else {
        return (
            <div>
                <h3>403 - Not Authenticated</h3>
            </div>)
    }
}