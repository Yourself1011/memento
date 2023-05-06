import { useState } from "react";
import { GrDocument } from "react-icons/gr";
import { BsCardList } from "react-icons/bs";
import { createMoment } from "../../utils/createMoment";
import { useNavigate } from "react-router-dom";
import "./Create.scss";

function Create() {
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="create">
      <div className={`drawer ${display ? "show" : "hide"}`}>
        <a
          className="menuItems"
          onClick={() => {
            const momentId = createMoment();
            navigate(`/edit/${momentId}`);
            location.reload();
            setDisplay(false);
          }}
        >
          <GrDocument />
          New Moment
        </a>
        <a className="menuItems">
          <BsCardList />
          New Flashcard
        </a>
      </div>
      <a className="highlight" onClick={() => setDisplay(!display)}>
        + Create
      </a>
    </div>
  );
}

export default Create;
