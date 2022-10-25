import React from 'react'
import './style.scss'

const About = () => {
    return (
        <>
        <img id='form1' src='./form1.svg'></img>
        <>
            <h2>Missionen der gør BOSS ajour</h2>
            <section id='about_section'>
            <div>
            <h3>Hvem er Boss</h3>
            <p>BOSS Informatik blev startet i 1992 og har i alle årene været det mest anvendte system til VUC’er, Gymnasier og Erhvervsskoler.</p>
            <p>BOSS er et system til udlånsstyring af bøger computere, ipads og mere. BOSS er windowsbaseret og afvikles lokalt, i net-miljøer eller i f.eks. Citrix-miljøer. BOSS er BDE-baseret. BOSS indeholder en række faciliteter, som går langt udover et almindeligt bogdepots funktioner, men som kan hjælpe en skole med mange vigtige funktioner. Alle faciliteter er gratis, når man har BOSS.</p>
            </div>
            <img src='./bog_scan2.jpg' alt='bog bliver scannet'></img>
            </section>
            <section id='owner_section'>
            <div id='owner_desk_wrapper'>
                    <p className='citat'>“ Det der er værd at gøre, er også værd at gøre godt “</p>
                    <p className='citat_afsender'>Torben Piilmann</p>
                </div>
            <img id="portrait" src='./torben-portrait.jpg'></img>
                <div id='torben_wrapper'>
                    <div>
                    <h3>Torben Piilmann</h3>
                    <p>Torben er ejer af BOSS og manden der sørger for at systemet virker. Torben har uddannelse i søværnet som elektronik mekaniker, og er uddannet elektroniktekniker på Frederiksberg teknisk skole. Herudover har han i 2020 taget kursus i Cloud teknologi og database på CPH Business. </p>
                    <p>Torben i mange år arbejdet som tekniker, hvor han har arbejdet med software og hardware. Inden han ejede BOSS arbejdede han hos TagVision som teknisk chef, og samarbejdede de sidste 10 år sammen med BOSS.</p>
                    <p>Torben er en udpræget ‘gør det selv’ mand, som grundet gå på mod og nysgerrighed kan alt fra at undervise, til at bygge et hus eller reparere en bil eller båd. Hans mission er at modernisere og videreudvikle BOSS så systemet bliver mere brugervenligt. </p>
                    </div>
                </div>
                <img id='work_img' src='./torben-present.jpg'></img>
            </section>
            <section id='vision_section'>
                <div id='vision_wrapper'>
                <h3>Visioner for boss</h3>
                <p>BOSS har en vision om at flytte systemet til en moderne platform, hvor databasen bliver Cloud baseret, og data dermed ligger i skyen. Dette betyder at der vil være minimal vedligholdelse fra brugerens side og systemet automatisk vil blive opdateret. Du skal som bruger derfor ikke længere bruge tid på at opdatere, og opleve eventuelle udfordringer med dette. Visionen er dermed at BOSS systemet skal gøres moderne, så du som bruger får lettere ved at benytte systemet. </p>
                </div>
                <img src='./vision_grafik.png'></img>
            </section>
        </>
        <img id='form2' src='form7.svg'></img>
        </>
    )
}

export default About