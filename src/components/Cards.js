import React, { useState, useEffect } from 'react';
import colors from '../data';
import { useGlobalContext } from './context';

const Cards = () => {
    const { score, maxScore, sumScore , shuffleArray } = useGlobalContext();
    const [cards, setCards] = useState(colors);

    const handleScore = (e) =>{
        // const name = e.target.textContent;
        const name = e.target.alt;
        sumScore(name);
    }

    useEffect(()=>{
        const newCards = [...cards];
        shuffleArray(newCards);
        setCards(newCards);
    }, [score, maxScore])

    return (
        <section>
                <div className='cards-container'>
                    {cards.map((color)=>{
                        const {title, src} = color
                        return <article 
                            className='card'
                            key={src} 
                            onClick={handleScore}
                        >
                            <div className="image-container">
                                <img src={src} alt={title} />
                                <h3 className='name'>{title}</h3>
                            </div>

                        </article>
                    })}
                </div>
        </section>
    )
}

export default Cards
