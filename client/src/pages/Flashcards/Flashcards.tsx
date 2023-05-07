import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Flashcards.scss";
import { Card } from "../../types/card";
import { useReward } from 'react-rewards';

// const cards: Card[] = [
//     {
//         question: 'What is the speed of sound at regular atmospheric pressure and temperature?',
//         answer: '343 m/s'
//     },
//     {
//         question: 'Where was ice cream invented?',
//         answer: 'China'
//     },
//     {
//         question: 'Which popular space-themed game is developed by InnerSloth?',
//         answer: 'Among Us'
//     }
// ]

const Flashcards = () => {
  const navigate = useNavigate();
  const [flashcardOpen, setFlashcardOpen] = useState(false);

  const rawCards: string = localStorage.getItem("cards") ?? "[]";

  if (!rawCards) {
    localStorage.setItem("cards", "[]");
  }

  const cards: Card[] = JSON.parse(rawCards);

  const { reward, isAnimating } = useReward('rewardId', 'confetti', {
    lifetime: 350,
    elementCount: 40,
    spread: 60,
    startVelocity: 20
  });

  const [currentCard, setCurrentCard] = useState<Card>(cards[0]);
  const [cardsAllCompleted, setCardsAllCompleted] = useState(false);

  const handleShowButtonClick = () => {
    setFlashcardOpen(true);
  };

  const handleResponseClick = () => {
    const index = cards.findIndex((c) => c.question === currentCard.question)!;
    const difference = cards[index].stage - 1;
    if (difference <= 0) {
      cards.splice(index, 1);
    } else {
      cards[index].stage = difference;
    }

    setFlashcardOpen(false);

    const newCard = cards?.[Math.floor(Math.random() * cards.length)];

    if (!newCard) {
      setCardsAllCompleted(true);
    } else {
      setCurrentCard(newCard);
    }
  };

  const SpacedRepetitonResponse = ({ text }: { text: string }) => {
    return (
      <button
        className={`srsresponse ${text}`}
        onClick={() => {
          handleResponseClick()
          if (text === 'Recalled') {
            console.log('reward')
            reward();
          }
        }}
      >
        {text}
      </button>
    );
  };

  return (
    <div className="flashcards">
      <div className="w-full bg-accentbutyoucanbarelyseeit p-6">
        <h1>Flashcards</h1>
        <p className="flex items-center">
          Review and remember by studying flashcards
        </p>
      </div>
      {(cards === undefined || cards.length === 0) ? <p className='text-left'>No cards found</p> : 
        cardsAllCompleted ? (
          <div className="container">
            <h2>You've completed all of your cards!</h2>
            <button onClick={() => navigate("/edit")}>Create more cards</button>
          </div>
        ) : (
          <div className="container">
            <div>
              {currentCard?.file && <p>{currentCard.file}</p>}
              <h2>{currentCard.question}</h2>
            </div>
            <div id="rewardId" className='w-4 ml-auto mr-auto'></div>
            <p className={`answer ${flashcardOpen ? "" : "closed"}`}>
              {flashcardOpen ? currentCard.answer : "(Answer will appear here)"}
            </p>
  
            {!flashcardOpen ? (
              <div>
                <button className="w-full mt-4" onClick={handleShowButtonClick}>
                  Show answer
                </button>
              </div>
            ) : (
              <div className="w-full flex srsbox">
                <SpacedRepetitonResponse text="Skip" />
                <SpacedRepetitonResponse text="Forgot" />
                <SpacedRepetitonResponse text="Recalled" />
              </div>
            )}
          </div>
        )    
      }
    </div>
  );
};

export default Flashcards;
