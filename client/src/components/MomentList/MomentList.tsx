import { Link } from "react-router-dom";
import { Moment } from "../../types/moment";

const MomentList = ({ className = "" }) => {
  const moments = JSON.parse(localStorage.getItem("moments") as string);

  return (
    <div className={`pages-container ${className}`}>
      <div>
        <p>Name</p>
        <p>Date Created</p>
      </div>
      {moments.map((value: Moment, index: number) => {
        return (
          <div>
            <Link to={`/edit/${index}`}>{value.name}</Link>
            <p>{new Date(value.createdDate).toLocaleString("en-CA")}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MomentList;
