import axios from 'axios'
import styles from './assets/LoginApp.module.css'
import 'axios'

import { useContext, useEffect, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';

import {LoginContext} from './contexts/LoginContext'

import {AlreadyLogin} from './components/login/AlreadyLogin' 
import {ErrhandleLogin} from './components/login/ErrhandleLogin'


export function LoginApp(){
    const [name, setName] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState(null)

    const {user, setUser} = useContext(LoginContext)
    
    
    async function isAuth(){
        if(localStorage.token){
            const getAuth = await axios.get('http://localhost:5000/is-auth', {headers: {'Authorization': `Bearer ${localStorage.token}`}})
            if(getAuth.data.ok){
                setUser(getAuth.data.user)
            }
        }else{
            return false
        }
    }
    useEffect(() => {
        isAuth()
    }, [])
    async function handleLogin(event){
        event.preventDefault()
        
        try {
            const response = await axios.post('http://127.0.0.1:5000/login-api', {
              name: name,
              password: password
            });
     
            if(response.data.ok && response.data.token){
                window.location = '/'
                localStorage.setItem('token', response.data.token)
                setTimeout(() => {
                    setUser(response.data.createdUser)
                }, 100)
            }else{
                setError(response.data.message)
                const alert = document.querySelector(`.${styles.alertDangerous}`)
                alert.style.display = 'flex'
            }
          } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Login page</title>
                    <meta name="description" content="Страница для регистрации" />
                </Helmet>
                <div className="login-container bg-gray-100 flex items-center justify-center h-screen">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full rounded">
                        {error ? <ErrhandleLogin textAlert={error}/> : null}
                        {user ? AlreadyLogin() : null}
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 p-3">Login</h2>
                        <form className='p-3' onSubmit={handleLogin} action='http://127.0.0.1:5000/login-api' method='post'>
                            <div className="mb-3">
                                <input onChange={e => setName(e.target.value)} type="text" id="username" name='name' placeholder="Username"/>
                            </div>
                            <div className="mb-6">
                                <input type="password" onChange={e => setPassword(e.target.value)} id="password" name='password' placeholder="********"/>
                            </div>
                            <button type="submit" className={`${styles.submitBtn} w-full bg-tomato text-white py-2 px-4 rounded-md shadow-md hover:bg-opacity-90 transition duration-300`}>
                                Sign In
                            </button>
                        </form>
                        <a href="/" className={styles.linkHome}>Home</a>
                    </div>
                </div>
            </HelmetProvider>
        </>
    )
}