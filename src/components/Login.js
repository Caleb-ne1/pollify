import React, { useState } from 'react'
import { LuVote } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail ] = useState('')
    const [password, setPassword] = useState('')

    const login = async (e) => {
        e.preventDefault();

        const user = {
            email: email,
            password: password
        }

        try {
            const response = await axios.post('http://localhost:3001/user/login', user, { withCredentials: true });

            if (response.status === 200) {
                setEmail('');
                setPassword('');
                navigate('/home');
            }
        } catch (err) {
            if (err.response) {
                alert(err.response.data.message)
            }
        }
    }

  return (
    <div className='login-container'>
      <div className='left-container'>
        <div>
        <LuVote className='icon-one'/>
        <h1>Pollify</h1>
        </div>
      </div>
      <div className='right-container'>
        <h2>Welcome to pollify</h2>
        <p>Login to your account</p>
        <form>
            <div className='row'>
                <label for="email">Email:</label>
                <input type="text" name='email' onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='row'>
                <label for="password">Password:</label>
                <input type="password" name='password' onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button className='login-btn' onClick={login}>Login</button>
        </form>

        <p>Don't have an account? Signup</p>
      </div>
    </div>
  )
}

export default Login
