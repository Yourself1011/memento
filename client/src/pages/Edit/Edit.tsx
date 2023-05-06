import "./Edit.scss";
import { useState, useEffect } from "react";
import { Moment } from "../../types/moment";
import { useParams } from "react-router-dom";

const Edit = () => {
    const { id: rawId } = useParams();
    console.log(rawId);
    let id = rawId ? parseInt(rawId) : 0;

    const moments = JSON.parse(localStorage.getItem("moments") ?? "");

    if (!moments) {
        id = 0;
        localStorage.setItem(
            "moments",
            JSON.stringify([
                {
                    text: "",
                    createdDate: Date.now(),
                },
            ] as Moment[])
        );
    }

    const [text, setText] = useState<string>(moments[id].text);

    useEffect(() => {
        moments[id].text = text;
        localStorage.setItem("moments", JSON.stringify(moments));
    }, [text]);

    return (
        <div className="edit">
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
