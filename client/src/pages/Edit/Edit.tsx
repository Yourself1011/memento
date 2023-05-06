import "./Edit.scss";
import { useState, useEffect } from "react";
import { Moment } from "../../types/moment";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { id: rawId } = useParams();
  const id = rawId ? parseInt(rawId) : 0;

  const moments = JSON.parse(localStorage.getItem("moments") as string);

  if (!moments || !moments[id]) {
    localStorage.setItem(
      "moments",
      JSON.stringify([
        {
          name: "Untitled Moment",
          text: "",
          createdDate: Date.now(),
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
    </div>
  );
};

export default Edit;
