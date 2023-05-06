import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Flashcards.scss";

type Card = {
    question: string,
    answer: string
}

let cardIndex = 0
const cards: Card[] = [
    {
        question: 'What is the speed of sound at regular atmospheric pressure and temperature?',
        answer: '343 m/s'
    },
    {
        question: 'Where was ice cream invented?',
        answer: 'China'
    },
    {
        question: 'Which popular space-themed game is developed by InnerSloth?',
        answer: 'Among Us'
    }
]

const Flashcards = () => {
    const navigate = useNavigate()
    const [flashcardOpen, setFlashcardOpen] = useState(false)

    const [currentCard, setCurrentCard] = useState<Card>(cards[0])
    const [cardsAllCompleted, setCardsAllCompleted] = useState(false)

    const handleShowButtonClick = () => {
        setFlashcardOpen(true)
    }

    const handleResponseClick = (text: string) => {
        setFlashcardOpen(false)
        cardIndex += 1
        if (cardIndex >= cards.length) {
            setCardsAllCompleted(true)
        }
        else {
            setCurrentCard(cards[cardIndex])
        }
    }

    const SpacedRepetitonResponse = ({ text } : { text: string}) => {
        return <div onClick={() => handleResponseClick(text)}>
            <span>{text}</span>
        </div>
    }

    return (
        <div className="flashcards">
            { cardsAllCompleted
                ? <div className="container">
                    <h2>You've completed all of your cards!</h2>
                    <button onClick={() => navigate('/edit')}></button>
                </div>
                : <div className="container">
                    <h2>{currentCard.question}</h2>
                    
                    { !flashcardOpen 
                        ? <button onClick={handleShowButtonClick}>Show answer</button>
                        : <div>
                            <p>{currentCard.answer}</p>
                            <SpacedRepetitonResponse text="Skip" />
                            <SpacedRepetitonResponse text="Forgot" />
                            <SpacedRepetitonResponse text="Recalled" />
                        </div>
                    }
                </div>
            }
        </div>
    );
};

export default Flashcards;
