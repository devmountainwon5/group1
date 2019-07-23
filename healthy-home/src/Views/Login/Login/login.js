import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import * as actions from "../../../Ducks/action_creator"
import Register from "../Register/register"

let color = "blue"
export default function Login(props) {
	const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("Login")

    useEffect(()=> {
        window.addEventListener('resize', doTheColorThing)
        return () => {
            window.removeEventListener('resize', doTheColorThing)
        }
    }, [])

    useEffect(()=> {
        document.title = title
    },[title])

	return (
		<div>
			<div className='login-box'>
                <input type='text' value={title} name='title' onChange={e=> setTitle(e.target.value)} />
				<Link to='/home'>go home</Link>
				<hr />
				Login
				<hr />
				Email
				<input type='text' placeholder='Email' name='setEmail' value={email} onChange={e => setEmail(e.target.value)} />
				Password
				<input
					type='password'
					placeholder='Password'
					name='setPassword'
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<button type='submit' onClick={logUserIn}>
					Login
				</button>
				<Link to='/register'>Register</Link>
			</div>
		</div>
	)
}

function doTheColorThing(){
    if(color == 'blue'){
        color = 'red'
    } else {
        color = 'blue'
    }
    document.getElementById('root').style.background = color
}

function logUserIn() {
	console.log("lets login")
}