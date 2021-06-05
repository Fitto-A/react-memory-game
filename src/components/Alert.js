import React from 'react';
import { useGlobalContext } from './context'

const Alert = () => {
    const { isAlertOpen, closeAlert } = useGlobalContext();

    const handleCloseAlert = (e) => {
        const alerta = document.getElementById('alert');
        if(e.target !== alerta){
            closeAlert();
        }
    }

    return (
        <div 
            className={`${isAlertOpen ? 'show-alert alert-overlay' : 'alert-overlay' }`}
            onClick={handleCloseAlert}
        >
            <div id='alert' className='container-alert'>
                <h3>Nice Try!!</h3>
                <h4>That card is repeated, try again!</h4>
{/* 
                <h3>{`${showAlertRepeatCard === true ? 'Nice Try!' : 'You win!!' }`}</h3>
                <h4>{`${showAlertRepeatCard === true ? 'Good Memory!!' : 'That card is repeated, try again!' }`}</h4> */}
            </div>
        </div>
    )
}

export default Alert



// topo
// snake
// marge
// nelson
// burns
// barnie
// carl
// bart
// homero
// family
// maggie 
// lisa 
