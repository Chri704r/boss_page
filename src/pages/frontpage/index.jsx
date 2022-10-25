import React, {useState, useEffect} from 'react'
import {useLocation, Link} from 'react-router-dom';

import './style.scss'

const Frontpage = () => {
    const { search } = useLocation()

    const [login, setLogin] = useState(false)

    useEffect(() => {
        if (search) {
            setLogin(true);
        } else (
            setLogin(false)
        )
    })

    //Checking if the user is logged in, send to either the forum or login page
    const ForumLink = () =>{

        if(login){
            return <Link className="secondaryButton" to={`forum${search}`}>Gå til forum </Link>
        } else{
            return <Link className="secondaryButton" to={`login${search}`}>Gå til forum </Link>
        }
    }

    return (
        <>
            <section id='splash_section'>
                <img className="splashImg" src='./splash1.3.webp' width='3500' height='3000' alt='hånd der tager en bog ud af bogreol på bibliotek'></img>
                <h1>Udlånsstyring af bøger, computere og mere</h1>
                <p>BOSS er et specialiseret værktøj til styring af udlån af bøger, computere, iPads, kameraer, cykler og meget andet</p>
                <button className='CTA'>
                    <Link className="ctaLink" to={`contact${search}`}>Kom i kontakt </Link>
                </button>
            </section>
            <section id='icons_section'>
                <div>
                    <img src='./puzzle_ikon.svg' className='icon' width='100' height='100' alt='cirkel med puzzlespilsbrikker, ikon for integrering' ></img>
                    <h3>Tæt integrering</h3>
                    <p>Boss er tæt integreret med Ludus, Lectio, Uddata+ og Tabulex.</p>
                </div>
                <div>
                    <img src='./books_ikon.svg' className='icon' width='100' height='100' alt='cirkel med stabel af bøger, ikon for alt i en'></img>
                    <h3>alt i en</h3>
                    <p>Boss indeholder alle rutiner til udlån, aflevering og efterfølgende regningshåndtering.</p>
                </div>
                <div>
                    <img src='./tools_ikon.svg' className='icon' width='100' height='100' alt='cirkel med to web vinduer, ikon for særlige værktøjer'></img>
                    <h3>særlige værktøjer</h3>
                    <p>Boss har mange særlige værktøjer som går udover det almindelige bogdepots funktioner bl.a. WebBoss.</p>
                </div>
            </section>
            <section id='forum_section'>
                <div id='forum_wrapper'>
                <img src='./kvinde_ved_computer1.webp' width='6000' height='4000' alt='kvinde der sidder og smiler mens hun bruger en computer'></img>
                <div>
                    <h3>Få hurtig og nem vejledning</h3>


                    <p>Prøv Boss’ nye forum hvor du hurtigt og nemt kan få vejledning eller svar på dine spørgsmål, af Boss eller andre brugere. I forummet kan du finde svar på ofte stillede spørgsmål, stille et nyt spørgsmål, samt hjælpe andre med at finde en løsning. </p>
                    <p>Har du et ønske eller forespørgsel kan dette også gøres via. forummet.</p>
                    <p>Kom i gang og bliv en del af fællesskabet, ved at oprette en bruger i dag, og oplev den nye funktion.</p>
                    <ForumLink/>
                </div>
                </div>
            </section>
            <section id='boss_section'>
                <div>
                    <h3>hvad er boss</h3>

                    <p>Boss er et system til udlånsstyring af bøger computere, ipads og mere. Boss har i dag over 200 installationer og benyttes af gymnasier, VUC’er og handelsskoler i hele Danmark. </p>
                    <p>Boss håndterer oprettelse af bøger, udlån, hjemkaldelse og regningshåndtering. Herunder er håndtering af e- og i-bøger indbygget, og udlån kan registreres titel- eller eksemplarbaseret. </p>
                    <p>Boss er tæt integreret med Ludus, Lectio, Uddata+ og Tabulex og har en række ekstra værktøjer, der gør det endnu nemmere at bruge bl.a WebBoss, der giver undervisere mulighed for at bestille og hjemkalde bøger til deres hold. </p>

                </div>
                <img src='./students.webp' height='4000' width='6000' alt='to elever under uddannelse, sidder på et bibliotek med hver sin bog' ></img>
            </section>
            <section id='review_section'>
                <p className='citat'>“ Med BOSS er der altid styr på vores bøger. Det er nemt og hurtigt og jeg er bare så glad for at bruge det ”</p>
                <p className='citat_afsender'>Knud Hansen</p>
            </section>
         </>
    )
}

export default Frontpage