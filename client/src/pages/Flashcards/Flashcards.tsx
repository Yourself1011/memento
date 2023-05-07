import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Flashcards.scss";
import { Card } from "../../types/card";
import { useReward } from "react-rewards";

type Response = "Skip" | "Forgot" | "Recalled";

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

  const [cardsDone, setCardsDone] = useState<number>(0);
  const [cardsRight, setCardsRight] = useState<number>(0);

  if (!rawCards) {
    localStorage.setItem("cards", "[]");
  }

  const cards: Card[] = JSON.parse(rawCards);

  const { reward, isAnimating } = useReward("rewardId", "confetti", {
    lifetime: 350,
    elementCount: 40,
    spread: 60,
    startVelocity: 20,
  });

  const [currentCard, setCurrentCard] = useState<Card>(
    cards.filter((x) => x.stage >= 0)[0]
  );
  const [cardsAllCompleted, setCardsAllCompleted] = useState(
    cards === undefined || cards.length === 0
  );

  const [streak, setStreak] = useState(0)

  const handleShowButtonClick = () => {
    setFlashcardOpen(true);
    setCardsDone(cardsDone + 1);
  };

  const handleResponseClick = (text: Response) => {
    const index = cards.findIndex((c) => c.question === currentCard.question)!;
    const diff = text === "Recalled" ? -1 : text === "Forgot" ? 1 : 0;
    cards[index].stage += diff;
    if (cards[index].stage > 3) cards[index].stage = 3;
    cards.push(cards[index]);
    cards.splice(index, 1);

    if (text === "Recalled") setStreak(s => s + 1)
    else if (text === "Forgot") setStreak(0)

    setFlashcardOpen(false);

    const liveCards = cards?.filter((x) => x.stage >= 0);
    const newCard =
      liveCards?.[Math.floor(Math.random() * liveCards.length * 0.5)];

    if (!newCard) {
      setCardsAllCompleted(true);
    } else {
      setCurrentCard(newCard);
    }

    localStorage.setItem("cards", JSON.stringify(cards));
  };

  const SpacedRepetitionResponse = ({ text }: { text: Response }) => {
    return (
      <button
        className={`srsresponse ${text}`}
        onClick={() => {
          handleResponseClick(text);
          if (text === "Recalled") {
            console.log("reward");
            reward();
            setCardsRight(cardsRight + 1);
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
      {cardsAllCompleted ? (
        <div className="container">
          <h2>You've completed all of your cards!</h2>
          <button onClick={() => navigate("/")}>Go home</button>
        </div>
      ) : (
        <div className="container">
          <div className="mb-4 text-xl flex justify-between">
            <p>
              Cards: {cardsRight}/{cardsDone}
            </p>
            <p>{currentCard.file}</p>
          </div>
          <div>
            <h2>{currentCard.question}</h2>
          </div>
          <div id="rewardId" className="w-4 ml-auto mr-auto"></div>
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
              <SpacedRepetitionResponse text="Skip" />
              <SpacedRepetitionResponse text="Forgot" />
              <SpacedRepetitionResponse text="Recalled" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Flashcards;
