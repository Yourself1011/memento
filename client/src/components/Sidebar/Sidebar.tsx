import { GrDocument, GrHomeRounded } from "react-icons/gr";
import { BsCardList, BsEyeFill } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import Create from "../Create/Create";
import { useEffect, useState } from "react";
import "./Sidebar.scss";

function Sidebar() {
  const navigate = useNavigate();
  const [lastEdited, setLastEdited] = useState(
    localStorage.getItem("lastEdited") ?? "0"
  );

  function storageChange() {
    setLastEdited(localStorage.getItem("lastEdited") ?? lastEdited);
  }

  useEffect(() => {
    storageChange();
    window.addEventListener("storage", storageChange);
    return window.removeEventListener("storage", storageChange);
  }, [navigate]);

  return (
    <div className="border-r-[#e7e7ef] border-r-2 flex flex-col justify-between shrink-0 sidebar">
      <div className="px-6">
        <p className="font-bold text-2xl py-6 flex items-center justify-between">
          Memento <p>logo</p>
        </p>
        <NavLink to="/">
          <GrHomeRounded />
          Home
        </NavLink>
        <NavLink to="/moments">
          <AiOutlineUnorderedList />
          Moments
        </NavLink>
        <NavLink to={`/edit/${lastEdited}`}>
          <GrDocument />
          Edit
        </NavLink>
        <NavLink to="/cards">
          <BsCardList />
          Flashcards
        </NavLink>
      </div>
      <Create />
    </div>
  );
}

export default Sidebar;
