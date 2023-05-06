import { useState } from "react";
import { Card } from "../../types/card";
import "./CreateFlashcard.scss";

interface CreateFlashcardProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function CreateFlashcard({ open, setOpen }: CreateFlashcardProps) {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");

  const rawCards: string = localStorage.getItem("cards") ?? "[]";

  if (!rawCards) {
    localStorage.setItem("cards", "[]");
  }

  const cards: Card[] = JSON.parse(rawCards);

  return (
    <>
      {open && (
        <div className="modalbg">
          <div className="modal">
            <h1 className="text-center">Create a Flashcard</h1>
            <label className="mt-4 block">
              Front:
              <textarea
                className="border-2 w-[100%] resize-none h-32"
                value={front}
                onChange={(e) => setFront(e.target.value)}
              />
            </label>
            <label className="mt-4 block">
              Back:
              <textarea
                className="border-2 w-[100%] resize-none h-32"
                value={back}
                onChange={(e) => setBack(e.target.value)}
              />
            </label>
            <div className="flex justify-end gap-2 mt-4">
              <button onClick={() => setOpen(false)}>Cancel</button>
              <button
                className="bg-accent text-white"
                onClick={() => {
                  cards.push({
                    question: front,
                    answer: back,
                    stage: 3,
                  });
                  localStorage.setItem("cards", JSON.stringify(cards));
                  setFront("");
                  setBack("");
                  setOpen(false);
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CreateFlashcard;
