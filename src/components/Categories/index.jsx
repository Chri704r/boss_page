import React from 'react'

import './style.scss'

//Creating the category check boxes and handle if they are checked or not
const Category = ({cat, setClickedCategoies, clickedCategoies, setCounter, setHideError, counter}) => {

    const handleChange = (event) => {
        if (event.target.checked) {
            setClickedCategoies([...clickedCategoies, event.target.value])
            setCounter(count => count + 1)
            setHideError(true)

        } else {
            setClickedCategoies(
                clickedCategoies.filter((category) => category !== event.target.value),
              );
              setCounter(count => count - 1)
              if(counter === 0){
              setHideError(false)
              }
        }
    }

    return (
        <div className="category-wrapper">
            <input type="checkbox" id={cat.category} className="pop-category-checkbox" name='category' value={cat.id} onChange={handleChange}/>
            <label className="pop-category-label" htmlFor={cat.category}>{cat.category}</label>
        </div>
    )
}

export default Category