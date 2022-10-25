import React from 'react';
import { useState, useEffect } from 'react';

import LoginSection from './LoginSection'
import SignupSection from './SignupSection';
import './style.scss'


const Login = () => {
    const [toLogin, setToLogin] = useState(true)
    const [accountData, setAccountData] = useState(null)

    //get request for the accounts
    // useEffect(() => {
    //     fetch('https://boss-info-extra.herokuapp.com/api/accounts', {
    //     headers: {
    //         'api-key': 'nSY1oe7pw05ViSEapg09D4gHG87yJCTX67uDa1OO',
    //     }})
    //     .then((response) => response.json() )
    //     .then((data) => setAccountData(data))
    //   },[])

      useEffect(() => {
        fetch('accounts.json', {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
         }})
        .then((response) => response.json())
        .then((data) => setAccountData(data))
        .then(console.log(accountData))
      },[])


    return (
        <>
        <button id='back-button' onClick={() => history.back()}></button>
        <div className='content-wrapper'>
            <section className='login-section'>
            <LoginSection state={toLogin} data={accountData} onButtonClick={setToLogin}></LoginSection>
            </section>
            <section className='blue-section'>
            <SignupSection state={toLogin} onButtonClick={setToLogin}></SignupSection>
            </section>
        </div>
        </>
    )
}

export default Login