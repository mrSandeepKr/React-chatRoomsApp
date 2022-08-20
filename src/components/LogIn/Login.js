import React from 'react'
import Button from '@mui/material/Button'
import './login.css'
import { auth, provider } from '../../Firebase'
import { signInWithPopup } from "firebase/auth";
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';

const Login = () => {
    const [{}, dispatch] = useStateValue();
    
    const signIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {

                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            }).catch((error) => {
                alert(error.message)
            })
    }

    return (
        <div className='login'>
            <div className='login__container'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png' alt='xyz' />
                <div className="login__text">
                    Let's login to WhatsApp
                </div>
                <Button type='submit' onClick={signIn}>
                    Sign in with Google
                </Button>
            </div>
        </div>
    )
}

export default Login