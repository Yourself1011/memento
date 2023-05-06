import { GrDocument, GrHomeRounded } from "react-icons/gr";
import { BsCardList } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai"
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

function Sidebar() {
    return (
        <div className="border-r-[#e7e7ef] p-6 border-r-2 flex flex-col sidebar">
            <p className="font-bold text-2xl text-center">Amonus</p>
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
    );
}

export default Sidebar;
