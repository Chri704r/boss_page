
import { useState} from 'react'

const LoginSection = ({state, data}) => {

    const [mail, setMail] = useState('')
    const [passwordLogin, setPasswordLogin] = useState('')
    const [loginError, setLoginError] = useState(false)

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [passwordSignup, setPasswordSignup] = useState("")

    const [firstnameError, setFirstnameError] = useState(false)
    const [lastnameError, setLastnameError] = useState(false)
    const [mailError, setMailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
        

    //To login a user
    const handleSubmit = (event) => {
        event.preventDefault()
        if (data) {  
            const filteredAccounts = data.accounts.filter(account => account.email == mail)
            
            if (filteredAccounts.length > 0) {

                if (passwordLogin.toLocaleLowerCase() === filteredAccounts[0].password) {

                    window.location.href=`/chri704r.github.io/boss_info/forum?id=${filteredAccounts[0].id}&type=${filteredAccounts[0].accountTypeId}`;
                    setLoginError(false)

                    }  else {
                        setLoginError(true)
                    }
            } else {
                setLoginError(true)
            }
        }
    }

    //To validate sigup input
    const validateInputs = (event) => {
        event.preventDefault()

        let isValid = true

        if (firstname == '') {
            setFirstnameError(true)
            isValid = false
        } else {
            if (firstnameError == true) {
                setFirstnameError(false)
            }
        }

        if (lastname == '') {
            setLastnameError(true)
            isValid = false
        } else {
            if (lastnameError == true) {
                setLastnameError(false)
            }
        }

        if (!email.includes('@') ) {
            setMailError(true)
            isValid = false
        } else if (email == '') {
            setMailError(true)
            isValid = false
        } else {
            if (mailError == true) {
                setMailError(false)
            }
        }

        console.log('the word', passwordSignup)
        const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$')
        console.log(validPassword)

        if (!validPassword.test(passwordSignup)) {
            console.log('invalid')
            setPasswordError(true)
            isValid = false
        } else {
            console.log('valid')
            if (passwordError == true) {
                console.log('remove')
                setPasswordError(false)
            }
        }
        if (isValid) {
            handleSignup()
        }
        
    }

    //To post a new account
    const handleSignup = () => {

        //The json object for an account
        const account = {
            firstname: firstname.substring(0,1).toUpperCase() + firstname.substring(1).toLocaleLowerCase(),
            lastname: lastname.substring(0,1).toUpperCase() + lastname.substring(1).toLocaleLowerCase(),
            email: email.toLocaleLowerCase(),
            password: passwordSignup
        }
    
        // fetch("https://boss-info-extra.herokuapp.com/api/accounts", {
        //     method: "post",
        //     headers: {
        //         "Content-Type": "application/json; charset=utf-8",
        //         "api-key": "nSY1oe7pw05ViSEapg09D4gHG87yJCTX67uDa1OO",
        //         "cache-control": "no-cache"
        //     },
        //         body: JSON.stringify(account),
        //     })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data)
        //         window.location.href=`/kea/hovedopgave/boss_info/forum?id=${data.id}`
        //     });
    }

    if (state === true) {
        return (
            <>
            <h3>Log ind</h3>
            <form onSubmit={handleSubmit}>
                    <div className='input-wrapper'>
                        <label htmlFor='email' className='login-label'> EMAIL</label>
                        <input placeholder="Skriv din mail her" id='email' className={loginError == true ? 'login-input error-border' : 'login-input'} type='email' onChange={event => setMail(event.target.value)}></input>
                    </div>
                    
                    <div className='input-wrapper'>
                        <label htmlFor='password' className='loginlabel'>ADGANGSKODE</label>
                        <input placeholder="Skriv din adgangskode her" id='password' className={loginError == true ? 'login-input error-border' : 'login-input'} type='password' onChange={event => setPasswordLogin(event.target.value)}></input>
                    </div>

                    <div className='error-wrapper'>
                        <span className={loginError == true ? 'error-center showError' : 'error hideError'}>Forkert email eller adgangskode</span>
                    </div>
                    
                    <div className='button-wrapper'>
                        <button className='primaryButton' type='submit'>Log ind</button>
                    </div>
                    
                </form>
                </>
        )
    } else {
        return (
                <>
                <h3>Opret bruger</h3>
                <form onSubmit={validateInputs} noValidate>
                    <div className='name-input-wrapper'>
                    <div className='input-wrapper'>
                        <label htmlFor="fname" className='login-label'>Fornavn</label>
                        <input placeholder="Skriv dit fornavn her" id='fname' type='text' className={firstnameError == true ? 'error-border login-input' : 'login-input'} onChange={event => setFirstname(event.target.value)}></input>
                        <div className='error-wrapper'>
                            <span className={firstnameError == true ? 'error showError' : 'error hideError'}>Skal udfyldes</span>
                        </div>
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor="lname" className='login-label'>Efternavn</label>
                        <input placeholder="Skriv dit efternavn her" id='lname' type='text' className={lastnameError == true ? 'error-border login-input' : 'login-input'} onChange={event => setLastname(event.target.value)}></input>
                        <div className='error-wrapper'>
                            <span className={lastnameError == true ? 'error showError' : 'error hideError'}>Skal udfyldes</span>
                        </div>
                    </div>
                    </div>
                    
                    <div className='input-wrapper'>
                        <label htmlFor='email' className='login-label'> EMAIL</label>
                        <input placeholder="Skriv din mail her" id='email' className={mailError == true ? 'error-border login-input' : 'login-input'} type='email' onChange={event => setEmail(event.target.value)}></input>
                        <div className='error-wrapper'>
                            <span className={mailError == true ? 'error showError' : 'error hideError'}>Benyt en gyldig E-mail</span>
                        </div>
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor='password' className='login-label'>ADGANGSKODE</label>
                        <input placeholder="Skal indeholde 8 tegn, 1 tal og 1 bogstav" id='password' className={passwordError == true ? 'error-border login-input' : 'login-input'} type='password' onChange={event => setPasswordSignup(event.target.value)}></input>
                        <div className='error-wrapper'>
                            <span className={passwordError == true ? 'error showError' : 'error hideError'}>Adgangskoden skal 8 tegn og indeholde min 1 tal og 1 bogstav</span>
                        </div>
                    </div>

                    <div className='button-wrapper'>
                        <button  className='primaryButton' type='submit'>Opret bruger</button>
                    </div>
                </form>
                </>
        )
    }
}

export default LoginSection