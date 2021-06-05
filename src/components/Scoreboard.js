import React from 'react'
import { useGlobalContext } from './context';

const Scoreboard = () => {
    const { score, maxScore } = useGlobalContext();

    return (
        <div className='container-score'>
            <h2>Score: {score}</h2>
            <h2>Max Score: {maxScore}</h2>
        </div>
    )
}

export default Scoreboard
