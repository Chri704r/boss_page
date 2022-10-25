import React, {useState, useEffect} from 'react';
import './style.scss'

//Setting the state to indecate the sorting
const SortSlider = ({setSort}) => {
    const [active, setActive] = useState('newest');

      const sortQuestions = (category) =>{

        setActive(category)
        setSort(category)
        
    }

    return(
        <div className='sort_container'>
            <div className='sort_wrapper'>
                <p onClick={() => sortQuestions('newest')} className={active == 'newest' ? 'newest active' : 'newest'}>Nyeste</p>
                <p onClick={() => sortQuestions('oldest')} className={active == 'oldest' ? 'oldest active' : 'oldest'}>Ældste</p>
                <p onClick={() => sortQuestions('unanswered')} className={active == 'unanswered' ? 'unanswered active' : 'unanswered'}>Ubesvaret</p>
                <p onClick={() => sortQuestions('answered')} className={active == 'answered' ? 'answered active' : 'answered'} >Besvaret</p>
                <div className='active_sort'></div>
            </div> 
        </div>
    )
}

export default SortSlider