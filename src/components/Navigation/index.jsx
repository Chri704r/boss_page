import React, { useEffect, useCallback } from 'react';
import { useState } from 'react';
import {useLocation, Link, useSearchParams} from 'react-router-dom';

import './style.scss';
import './menu.scss'
import NavLink from './NavLink';


const Navbar = () => {

    const pathname = window.location.pathname

    const [ active, setActive ] = useState(false)
    const [color, setColor] = useState('transparent')
    const [activeLink, setActiveLink] = useState('/')
    const [login, setLogin] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const [accounts, setAccounts] = useState(null)


    useEffect(() => {
        
        setActiveLink(pathname)

    })

    const { search } = useLocation()
    

    const handleClick = () => {
        if (active) {
            setActive(false)
        } else {
            setActive(true)
        }
    }

    const handleNavClick = () => {
        if (active) {
            setActive(false)
        } else {
            setActive(true)
        }
    }

    useEffect(() => {
        if (search) {
            setLogin(true);
        } else (
            setLogin(false)
        )
    })

    const user = searchParams.get("id") 

    if (user) {
        //Getting the user, if logged in
         useEffect(() => {
            
            fetch(`accounts.json`, {
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
              }})
            .then((response) => response.json() )
            .then((data) => {
                //console.log('data', data)
                setAccounts(data.accounts[0].firstname.substring(0,1) + data.accounts[0].lastname.substring(0,1))
            })
        },[])
    } else {
        useEffect(() => {
            setAccounts("")
        })
        
    }

    //Change manu color on scroll
    const listenScrollEvent = e => {
        if (window.scrollY > 5) {
            setColor('white')
        } else {
            setColor('transparent')
        }  
    }

    window.addEventListener('scroll', listenScrollEvent)

    if(pathname === '/chri704r.github.io/boss_info/login'){
        return (
            <div></div>
        )
    } else{
        return (
            <div className='nav-wrapper' style={{backgroundColor: color, transition: '0.5s ease-in', }}>
                <nav className="Navbar" >
                    <div className='logoContainer'>
                        <Link onClick={handleClick} to={'./' + search}>
                            <img src="./boss_logo.webp" width='4724' height='2953' alt='BOSS logo'></img>
                        </Link>
                        
                    </div>
                    <div className='rightWrapper'>

                    <div onClick={handleNavClick} id={login ? "btn-login" : "btn"} className={active ? 'active' : 'not-active'}>
                        <span className='nav-span'></span>
                        <span className='nav-span'></span>
                        <span className='nav-span'></span>
                    </div>

                    <ul className={active ? 'nav-menu active' : 'nav-menu not-active'}>
                        {NavLink(login).map((item, index) => {
                            
                            const path = item.url === "/logout" ? "/" : item.url + search
                                return (
                                    <li key={index}><Link onClick={handleNavClick} to={path} className={activeLink === "/kea/hovedopgave/boss_info" + item.url ? `${item.cName} activeLink` : item.cName}>
                                    {item.title}   
                                    </Link></li>
                                )
                        })}
                    </ul>
                        <div className={login ? 'profilePic' : ''}>
                            <span>{accounts}</span>
                        </div>
                    </div>
                </nav>
            </div>
        )
}
}


export default Navbar;