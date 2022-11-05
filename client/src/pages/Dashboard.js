import React from "react"
import { ReactDOM, useState } from "react"
import Login from '../components/Login'
import Register from '../components/Register'

const Dashboard = () => {

    // const [active, setActive] = useState(true)

    return (
        // <div className='landingpage'>
        //     <div className='content-container'>
        //         <div className='tab-register' onClick={() => setActive(true)}>
        //             <h2 style={{ color: active ? '#c20114' : null }}>Register</h2>
        //         </div>

        //         <div className='tab-login' onClick={() => setActive(false)}>
        //             <h2 style={{ color: !active ? '#c20114' : null }}>Login</h2>
        //         </div>
        //     </div>

        //     {active ? <Register /> : <Login />}
        // </div>

        <div className="container">
            <h1>Dashboard</h1>
        </div>
    )


}

export default Dashboard