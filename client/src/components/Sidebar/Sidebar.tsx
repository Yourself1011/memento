import { GrDocument, GrHomeRounded } from "react-icons/gr"
import { BsCardList } from "react-icons/bs"
import { NavLink } from "react-router-dom";
import './Sidebar.scss'

function Sidebar() {
  return ( 
    <div className="border-r-[#e7e7ef] p-6 border-r-2 flex flex-col sidebar justify-between">
      <div>
        <p className='font-bold text-2xl text-center'>Amonus</p>
        <NavLink to='/'>
          <GrHomeRounded/>
          Home
        </NavLink>
        <NavLink to='/edit'>
          <GrDocument/>
          Edit
        </NavLink>
        <NavLink to='/cards'>
          <BsCardList/>
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