import React from 'react';
import { useGlobalContext } from './context'

const Alert = () => {
    const { isWinAlertOpen, closeAlert } = useGlobalContext();

    const handleCloseAlert = (e) => {
        const alerta = document.getElementById('alert');
        if(e.target !== alerta){
            closeAlert();
        }
    }

    return (
        <div 
            className={`${isWinAlertOpen ? 'show-alert alert-overlay' : 'alert-overlay' }`}
            onClick={handleCloseAlert}
        >
            <div id='alert' className='container-alert'>
                <h3>You win!!</h3>
                <h4>Good Memory!!</h4>
            </div>
        </div>
    )
}

export default Alert

