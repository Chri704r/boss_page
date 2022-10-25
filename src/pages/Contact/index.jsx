import React, {useState, useEffect} from 'react'
import {useLocation, Link} from 'react-router-dom';
import './style.scss'

const Contact = () => {
    const { search } = useLocation()

    const [submitButtonClicked, setSubmitButtonClicked] = useState(false)
    const [login, setLogin] = useState(false)
    const [nameInput, setNameInput] = useState("")
    const [mailInput, setMailInput] = useState("")
    const [messageInput, setMessageInput] = useState("")

    const [nameError, setNameError] = useState(false)
    const [mailError, setMailError] = useState(false)
    const [messageError, setMessageError] = useState(false)

    useEffect(() => {
        if (search) {
            setLogin(true);
        } else (
            setLogin(false)
        )
    })

    const ForumLink = () =>{
        //go to forum if you are logged in otherwise go to login
        if(login){
            return <Link to={`/forum${search}`} className='forum-link'>Gå til forum </Link>
        } else{
            return <Link to={`/login${search}`} className='forum-link'>Gå til forum </Link>
        }
    }

    const inputNameChange = (event) =>{
        setNameInput(event.target.value)
        if(submitButtonClicked == true) {
            setNameError(false)
        }
    }

    const inputMailChange = (event) =>{
        setMailInput(event.target.value)
        if(submitButtonClicked == true) {
            setMailError(false)
        }
    }

    const inputMessageChange = (event) =>{
        setMessageInput(event.target.value)
        if(submitButtonClicked == true) {
            setMessageError(false)
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(nameInput === "" || mailInput === "" || messageInput === ""){
        if(nameInput == ""){
        setNameError(true)
        }
        if(mailInput == ""){
            setMailError(true)
        }
        if(messageInput == ""){
            setMessageError(true)
        }
        } else{
            setNameError(false)
            setMailError(false)
            setMessageError(false)
            window.location.reload(true);
        }
    }



    return(
    <>
    <img id='form' src='./form1.svg'></img>
    <>
        <h2>Lad os snakke sammen</h2>
        <section id='form_section'>
            <div>
                <h3>Kontakt os</h3>
                <p>Kontakt BOSS via formularen eller ring til os. Er vi ikke til stede så læg en besked, så vender vi tilbage hurtigst muligt. </p>
                <p>Er du allerede kunde så prøv vores nye forum og få hurtigt svar fra os eller andre brugere. </p>  
            </div>
            <form onSubmit={handleSubmit} className='contact-form'>
                <div className='input_wrapper'>
                    <label htmlFor="fname">navn</label>
                    <input type='text' id="fname" name="fname" placeholder='Skriv dit navn her' onInput={(event) => inputNameChange(event)}></input>
                    <p className={nameError ? 'error_message_contact name' :  'error_message_contact name error_hide_contact'}>Skal udfyldes</p>
                </div>
                <div className='input_wrapper'>
                    <label htmlFor="mail">email</label>
                    <input type='email' id="mail" name="mail" placeholder='F.eks. Hans@hansen.dk' onInput={(event) => inputMailChange(event)}></input>
                    <p className={mailError ? 'error_message_contact mail' :  'error_message_contact mail error_hide_contact'}>Skal udfyldes</p>
                </div>
                <div className='input_wrapper'>
                    <label>besked</label>
                    <textarea  placeholder='Hvad ønsker du at skrive?' onInput={(event) => inputMessageChange(event)}></textarea>
                    <p className={messageError ? 'error_message_contact message' :  'error_message_contact message error_hide_contact'}>Skal udfyldes</p>
                </div>
                <button onClick={() => setSubmitButtonClicked(true)} className='secondaryButton contact-button'>Send</button>
            </form>
        </section>
        <section id='contact_section'>
            <div className=''>
                <img className='icon' src='./telefon_ikon.svg'></img>
                <h3>Giv et opkald</h3>
                <p>+45 12 34 56 78</p>
            </div>
            <div>
                <img className='icon' src='./mail_ikon.svg'></img>
                <h3>send mail</h3>
                <p>Torben@bossinfo.dk</p>
            </div>
            <div>
                <img className='icon' src='./forum_ikon.svg'></img>
                <h3>besøg forum</h3>
                <ForumLink/>
            </div>
        </section>
    </>
    </>
    )

}

export default Contact