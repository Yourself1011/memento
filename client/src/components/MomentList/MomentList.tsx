import { Link } from 'react-router-dom';
import { Moment } from '../../types/moment';

const MomentList = ({className=''}) => {

  const moments = JSON.parse(localStorage.getItem("moments") as string);

  return (
    <div className={`pages-container ${className}`}>
      <div style={{display: moments ? "flex" : "none"}}>
        <p>Name</p>
        <p>Date Created</p>
      </div>
      {
        moments ? moments.map((value:Moment, index:number) => {
          return (
            <div>
              <Link to={`/edit/${index}`}>{value.name}</Link>
              <p>{value.createdDate}</p>
            </div>
          )
        }) : <p>No moments found</p>
      }
    </div>
)
}

export default MomentList