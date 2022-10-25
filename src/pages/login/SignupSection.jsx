import React, { useCallback, useState } from 'react'

const SignupSection = ({state, onButtonClick}) => {

    //Changes between signup and login

    const handleClick = useCallback(() => {
        if(state == true){
            onButtonClick(state = false)
        } else{
            onButtonClick(state = true)
        }
      }, [onButtonClick])


    if (state === false) {
        return (
            <div>
            <h3>Log ind</h3>
            <p>Hvis du allerede har en bruger, så log ind nedenfor.</p>
                <div className='button-wrapper'>
                    <button onClick={handleClick} className='secondaryButton'>Log ind</button>
                </div>
            </div>
        )
    } else {
        return (
            <>
                <h3>Opret bruger</h3>
                <p>Hvis du allerede benytter BOSS men ikke har en bruger, så opret din bruger nedenfor.</p>
                <div className="button-wrapper">
                    <button onClick={handleClick} className='secondaryButton'>Opret bruger</button>
                </div>
            </>
        )
        
    }

}

export default SignupSection