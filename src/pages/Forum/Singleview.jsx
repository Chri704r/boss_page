import { useParams, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

import './single.scss'
import Response from "../../components/response";
import ChangeTimestamp from "../../components/Timestamp";
import WarningPopup from "../../components/WarningPopup";


const Singleview = () => {

    const id = useParams().questionId

    const [question, setQuestion] = useState(null)

    const [searchParams, setSearchParams] = useSearchParams()
    const [answerContent, setAnswerContent] = useState("")

    const [warningModal, setWarningModal] = useState(false)  

    const [verifyArray, setVerifyArray] = useState([])

    //Async funtion to fetch the data from the api
    async function getData() {
        fetch('../questions.json', {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
         }})
        .then((response) => response.json() )
        .then((data) => setQuestion(data))
    }

    console.log("questions", question);

    //function wrapped in use effect
    useEffect(() => {
        getData()
    },[])

    const checkVerified = (answer) => {
        
        let patchArray = question.questions[0].answers.filter(answer => answer.verified == 1)

        if (patchArray.length === 0) {
            changeVerified(answer)
        } else {
            setWarningModal(true)
            patchArray.push(answer)
            setVerifyArray(patchArray) 
        }
    }

    const createPatchArray = () => {
        verifyArray.map((answer) => {
            changeVerified(answer)
        })
    }


    const changeVerified = (answer) => {
        console.log('to verify', answer)

      let jsonBody = {}

        if(answer.verified == 1){
            jsonBody = {
                verified: 0
            }
        } else{
            jsonBody = {
                verified: 1
            }
        }

    //    fetch(`https://boss-info-extra.herokuapp.com/api/answers/${answer.id}`, {
    //         method: "PATCH",
    //         headers: {
    //           "Content-Type": "application/json; charset=utf-8",
    //           "api-key": "nSY1oe7pw05ViSEapg09D4gHG87yJCTX67uDa1OO",
    //           "cache-control": "no-cache"
    //         },
    //         body: JSON.stringify(jsonBody),
    //       })
    //         .then(console.log("questions after patch", question))
    //         .then(() => getData());
    }

    //post request for answers
    const handleSubmit = (event) => {
        event.preventDefault()
        
        const user = searchParams.get("id")

        //json object to post as body in the request
        const answer = {
            content: answerContent,
            verified: 0,
            question_id: id,
            account_id: user
        }

        // fetch("https://boss-info-extra.herokuapp.com/api/answers", {
        //     method: "post",
        //     headers: {
        //       "Content-Type": "application/json; charset=utf-8",
        //       "api-key": "nSY1oe7pw05ViSEapg09D4gHG87yJCTX67uDa1OO",
        //       "cache-control": "no-cache"
        //     },
        //     body: JSON.stringify(answer),
        //   })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data)
        //         setAnswerContent("")
        //         document.querySelector('#answer-input').value = ""
        //     });   
    }

    const scrollToInput = () => {
        document.querySelector("#respond-wrapper").scrollIntoView({ behavior: 'smooth' })
        document.querySelector("#respond-wrapper input").focus({preventScroll: true})
    }

    if(question) {
        return (
            <>
            <WarningPopup primeFuction={createPatchArray} getData={getData} warningModal={warningModal} setWarningModal={setWarningModal} header={'Erstat verificeret svar'} warning={'Der findes allerede et verificeret svar på dette spørgsmål, og kan kun indeholde et. Ønsker du at erstatte det verificerede svar med det nye?'} primButton={'Erstat'} secButton={'Behold'} />
            <div id="single-view-container">
            <button className="go_back_single"  onClick={() => history.back()}></button>
            <div id="single-content">
                <h1>{question.questions[0].title}</h1>
                <div id="profile-wrapper">
                <div className='circle-name'> <span>{question.questions[0].account.firstname.substring(0,1) + question.questions[0].account.lastname.substring(0,1)}</span></div>
                    <div>
                        <span className="profile-name">{`${question.questions[0].account.firstname} ${question.questions[0].account.lastname}`}</span>
                        <span className="time-stamp">{<ChangeTimestamp timestamp={question.questions[0].createdAt}></ChangeTimestamp>}</span>
                    </div>
                </div>
                <p id="question-content">{question.questions[0].content}</p>
                <div id="category-wrapper">
                    {question.questions[0].categories.map((cat) => {
                        return (
                            <span className='cat'>{cat.category}</span>
                        )
                    })}
                </div>
                <div id="flex-wrapper">
                    <span id="comment-amount">{question.questions[0].answers.length} svar</span>
                    <button className="secondaryButton" onClick={scrollToInput}>Besvar spørgsmål</button>
                </div>
                <hr className="devider"></hr>
                
                <div id="response-wrapper">
                    {question.questions[0].answers.map((answer, i) => {
                        return (
                            <Response key={i} checkVerified={checkVerified} changeVerified={changeVerified} answer={answer} getData={getData}  ></Response>
                        )
                    })}
                </div>
                <form id="respond-wrapper" onSubmit={handleSubmit}>
                    <input id="answer-input" placeholder={`Skriv et svar til ${question.questions[0].account.firstname} ${question.questions[0].account.lastname}`} type="text" required onChange={event => setAnswerContent(event.target.value)}></input>
                    <div id="input_border"></div>
                    <button type="submit">➤</button>
                </form>
                

            </div>
            </div>
            </>
        )
    } else {
        return <p>loading</p>
    }
    

}

export default Singleview