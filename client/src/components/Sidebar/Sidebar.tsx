import { GrDocument, GrHomeRounded } from "react-icons/gr";
import { BsCardList } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai"
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

function Sidebar() {
  return (
    <div className="border-r-[#e7e7ef] border-r-2 flex flex-col justify-between shrink-0 sidebar">
      <div className='px-6'>
        <p className="font-bold text-2xl py-6 flex items-center justify-between">Amonus <p>logo</p></p>
        <NavLink to="/">
          <GrHomeRounded />
          Home
        </NavLink>
        <NavLink to='/pages'>
          <AiOutlineUnorderedList/>
          Pages
        </NavLink>
        <NavLink to="/edit/0">
          <GrDocument />
          Edit
        </NavLink>
        <NavLink to="/cards">
          <BsCardList />
          Flashcards
        </NavLink>
      </div>
      <div>
        <a className='create'>+ Create</a>
      </div>
    </div>
  );
}

export default Sidebar;
