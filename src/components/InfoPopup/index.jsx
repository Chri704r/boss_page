import React from 'react';
import '../WarningPopup/style.scss'

const InfoPopup = ({state, setState, header, warning, buttonTxt}) => {
    return(
        <div className={state ? 'modal_container_info showing' : 'modal_container_info hiding'}>
            <div className='modal_background'>
                <div className='modal'>
                    <h2>{header}</h2>
                    <p>{warning}</p>
                    <div className='button_wrapper'>
                    <button onClick={() => setState(false)} className='primaryButton'>{buttonTxt}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoPopup