import { GrDocument, GrHomeRounded } from "react-icons/gr"
import { BsCardList } from "react-icons/bs"
import { NavLink } from "react-router-dom";
import './Sidebar.scss'

function Sidebar() {
  return ( 
    <div className="border-r-[#e7e7ef] border-r-2 flex flex-col sidebar justify-between shrink-0">
      <div>
        <p className='font-bold text-2xl bg-accentbutyoucanbarelyseeit p-6 flex items-center justify-between'>Memento <p>logo</p></p>
        <div className="p-8">
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
      </div>
      <div>
        <a className='create'>+ Create</a>
      </div>

    </div> 
  );
}

export default Sidebar;