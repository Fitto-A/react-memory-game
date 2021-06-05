import React, { useState, useContext, useEffect } from 'react';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [score, setScore] = useState(0);
    const [maxScore, setMaxScore] = useState(0);
    const [newestCharacter, setNewestCharacter] = useState([]);
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [isWinAlertOpen, setIsWinAlertOpen] = useState(false);

    const showAlertRepeatCard = () => {
        setIsAlertOpen(true)
    }

    const closeAlert = () => {
        setIsAlertOpen(false);
        setIsWinAlertOpen(false);
    }

    const handleWin = () => {
        if(score === 12){
            setIsWinAlertOpen(true);
        }
    }

    useEffect(() => {
        handleWin();
    }, [score]) 


    const sumScore = (cardBtn) => {
        const selectedCharacter = newestCharacter.includes(cardBtn);

        if(selectedCharacter === false) {
            setNewestCharacter([...newestCharacter, cardBtn]);
            setScore(score + 1);
        }
        else {
            showAlertRepeatCard()
            setNewestCharacter([])
            setScore(0)
        }
        checkMaxScore()
    }

    const shuffleArray = (newCards) => {
        for (let i = newCards.length - 1; i > 0; i--) {
          let randomIdx = Math.floor(Math.random() * i);
          [newCards[randomIdx], newCards[i]] = [newCards[i], newCards[randomIdx]];
        }
    }

    const checkMaxScore = () => {
        if(score > maxScore){
            setMaxScore(score)
        }
        else if(maxScore === 12){
            console.log('nice memory, you win');
        }
    }

    return <AppContext.Provider 
        value={{score, maxScore, sumScore, shuffleArray, isAlertOpen, closeAlert, isWinAlertOpen}}
        >
        {children}
    </AppContext.Provider>   
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }