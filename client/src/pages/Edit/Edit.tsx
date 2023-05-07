import "./Edit.scss";
import { useState, useEffect } from "react";
import { Moment } from "../../types/moment";
import { useParams } from "react-router-dom";
import { Card } from "../../types/card";
import { AiOutlineLoading } from "react-icons/ai";
import { BsCheck, BsX } from "react-icons/bs";
import { generate } from "../../utils/cohere";

const Edit = () => {
  const [success, setSuccess] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState("Generate Flashcards");
  const { id: rawId } = useParams();
  const id = rawId ? parseInt(rawId) : 0;

  const rawCards: string = localStorage.getItem("cards") ?? "[]";

  if (!rawCards) {
    localStorage.setItem("cards", "[]");
  }

  const cards: Card[] = JSON.parse(rawCards);

  const moments = JSON.parse(localStorage.getItem("moments") as string);

  if (!moments || !moments[id]) {
    localStorage.setItem(
      "moments",
      JSON.stringify([
        {
          name: "Untitled Moment",
          text: "",
          createdDate: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
        },
      ] as Moment[])
    );
  }
  localStorage.setItem("lastEdited", id.toString());

  const [text, setText] = useState<string>(moments[id].text);
  const [name, setName] = useState<string>(moments[id].name);

  useEffect(() => {
    moments[id].text = text;
    moments[id].name = name;
    localStorage.setItem("moments", JSON.stringify(moments));
  }, [text, name]);

  return (
    <div className="edit">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="name-input"
      />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoFocus
        placeholder="Type something..."
      />
      <div className="flex gap-4 mb-8">
        <button
          className={`font-bold text-2xl ${loading ? "show no" : "hide"} ${
            success ? "success" : success == false ? "failure" : ""
          }`}
          onClick={async () => {
            if (!loading) {
              setLoading(true);
              setLoadingMsg("Generating...");
              try {
                const output =
                  "[" +
                  (await generate(text)).generations[0].text.split("[").at(-1);
                localStorage.setItem(
                  "cards",
                  JSON.stringify(
                    cards.concat(
                      (JSON.parse(output) as Card[]).map((x) => {
                        return { ...x, file: name, stage: 3 };
                      })
                    )
                  )
                );
                setSuccess(true);
                setLoadingMsg("Flashcards Generated!");
              } catch (err) {
                setSuccess(false);
                setLoadingMsg("Error!");
                console.error(err);
              } finally {
                setLoading(false);
              }
            }
          }}
          disabled={loading}
        >
          ⚡ {loadingMsg} <AiOutlineLoading className="loading" />
          {!loading && success && <BsCheck className={`resultIndicator`} />}
          {!loading && success == false && (
            <BsX className={`resultIndicator`} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Edit;
