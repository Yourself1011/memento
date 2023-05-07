import { GrDocument, GrHomeRounded } from "react-icons/gr";
import { BsCardList, BsEyeFill, BsPersonFill } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "/Memento.svg";
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
        <p className="font-bold text-[32px] py-6 flex items-center justify-between">
          Memento <img src={logo} alt="logo" className="h-10" />
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
        <NavLink to="/ocr">
          <BsEyeFill />
          Text Recognition
        </NavLink>
        <NavLink to="/signin">
          <BsPersonFill />
          Sign in/sign up
        </NavLink>
      </div>
      <Create />
    </div>
  );
}

export default Sidebar;
