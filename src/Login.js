import React, { useState } from 'react'
import { auth } from './firebase'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import './Login.css'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const dispatch = useDispatch()
    const auth = getAuth();

    const loginToApp = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then((userAuth) => {
            const user = userAuth.user;
            dispatch(login({
                displayName:user.displayName,
                email: user.email,
                uid: user.uid,
                photoUrl: user.photoURL
            }))
        })
        .catch((error) => alert(error))
    }
    const register = () =>{
        if(!name){
            return alert('Please enter a full name')
        }

        
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            dispatch(login({
                displayName:user.displayName,
                email: user.email,
                uid: user.uid,
                photoUrl: user.photoURL
            }))
        })

        // .then((userAuth) => {
        //     const user = userAuth.user       
        //     dispatch(login({
        //         email: user.email,
        //         uid: user.displayName,
        //         displayName: name,
        //         photoUrl: profilePic,
        //     }))        
        // })
        .catch((error) => alert(error))
        
    }
  return (
    <div className='login'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png'
        alt='' />

        <form>
            <input placeholder='Full name (required if registering)' type='text' value={name}
            onChange={e => setName(e.target.value)}/>

            <input type='text' value={profilePic} placeholder='Profile pic URL (optional)'
            onChange={e => setProfilePic(e.target.value)} />

            <input type='text' placeholder='Email' value={email} 
            onChange={e => setEmail(e.target.value)}/>

            <input value={password} placeholder='Password' type='password' 
            onChange={e => setPassword(e.target.value)}/>

            <button type='submit' onClick={loginToApp}>
                Sign In
            </button>
        </form>
        <p>Not a member? 
            <span className='login__register' onClick={register}>
                Register Now
            </span>
        </p>
    </div>
  )
}
