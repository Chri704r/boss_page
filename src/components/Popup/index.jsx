import React, {useState, useEffect, useCallback} from 'react';
import './style.scss'
import Category from '../Categories'
import { useSearchParams } from 'react-router-dom';

const Popup = ({modal, setModal, getQuestionData}) => {

    const [categories, setCategories] = useState(null)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [submitClicked, setSubmitClicked] = useState(false)

    const [counter, setCounter] = useState(0)
    const [hideError, setHideError] = useState(true)
    const [subjectError, setSubjectError] = useState(false)
    const [questionError, setQuestionError] = useState(false)


    const [searchParams, setSearchParams] = useSearchParams()
    const [clickedCategoies, setClickedCategoies] = useState([])

    //get request for cadegories
    useEffect(() => {
        fetch('categories.json', {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
         }})
        .then((response) => response.json() )
        .then((data) => setCategories(data))
    },[])

    //to hide and show the pop up
    const toggleModal = useCallback(() => {
        setClickedCategoies([])
        document.querySelector('#title-input').value = ""
        document.querySelector('#content-input').value = ""
        setTitle("")
        setContent("")
        setCounter(0)
        document.querySelectorAll('.pop-category-checkbox').forEach((checkbox) => {
            if (checkbox.checked) {
                checkbox.checked = false
            }
        })
        setModal(false)
        document.body.classList.remove('no-scroll');
    }, [setModal])

    const inputTitleChange = (event) =>{
        setTitle(event.target.value)
        if(submitClicked == true) {
            setSubjectError(false)
        }
    }
    const inputContentChange = (event) =>{
        setContent(event.target.value)
        if(submitClicked == true) {
            setQuestionError(false)
        }
    }

    //To post a new question
    const handleSubmit = (event) => {
        event.preventDefault()
        
        if(counter > 0 && title !== "" && content !== "") {
        
        const user = searchParams.get("id")

        const question = {
            title: title,
            content: content,
            account_id: user,
            categories: clickedCategoies
        }

    //    fetch("https://boss-info-extra.herokuapp.com/api/questions", {
    //         method: "post",
    //         headers: {
    //           "Content-Type": "application/json; charset=utf-8",
    //           "api-key": "nSY1oe7pw05ViSEapg09D4gHG87yJCTX67uDa1OO",
    //           "cache-control": "no-cache"
    //         },
    //         body: JSON.stringify(question),
    //       })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             toggleModal()
    //             getQuestionData()
    //         });


        setSubjectError(false)
        setQuestionError(false)
        toggleModal()
        getQuestionData('from popup')
        }else{
            setSubmitClicked(true)
            if(counter < 1)
            setHideError(false)
            if(title === ""){
                setSubjectError(true)
            }
            if(content === ""){
                setQuestionError(true)
            }
        }

        
    }
    

    
    if(categories){
    return(
    <div className={modal ? 'modal_container showing' : 'modal_container hiding'}>
        <div className='modal_background'>
            <div className='modal'>
                <button onClick={toggleModal} id='close-popup-button'>✕</button>
                <div className='form_wrapper'>
                <h2>Opret spørgsmål</h2>
                <form onSubmit={handleSubmit}>
                    <div className='input_wrapper'>
                        <label>Hvad omhandler dit spørgsmål?</label>
                        <input id='title-input' placeholder="F.eks. ønske til system, fejl ved oprettelse osv." type="text" onChange={event => inputTitleChange(event)}></input>
                        <p className={subjectError ? 'error_message subject' :  'error_message subject error_hide'}>Skal udfyldes</p>
                    </div>
                    <div className='input_wrapper'>
                        <label>Hvad vil du gerne spørge om?</label>
                        <textarea id='content-input' placeholder="Uddyb gerne dit spørgsmål" onChange={event => inputContentChange(event)}></textarea>
                        <p className={questionError ? 'error_message content' :  'error_message content error_hide'}>Skal udfyldes</p>
                    </div>
                    <h3>Tilføj kategori *</h3>
                    <p className='info_txt'>Vælg en eller flere kategorier, som dit spørgsmål relaterer til.</p>
                    <legend className='cat_wrapper' >
                    {categories.categories.map((cat, i) => {
                            return (
                                <Category key={i} cat={cat} setHideError={setHideError} counter={counter} setCounter={setCounter} setClickedCategoies={setClickedCategoies} clickedCategoies={clickedCategoies} ></Category>
                            )
                        })}
                    </legend>
                    <p className={hideError ? 'error_message error_hide': 'error_message'}>Vælg mindst en kategori dit spørgsmål hører under</p>
                    <button className='primaryButton opret_button'>Opret spørgsmål</button>
                </form>
                </div>
            </div>
        </div>
    </div>
    )
} else{
    return <p>loading..</p>
}
}

export default Popup