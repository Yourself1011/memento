import { Link } from "react-router-dom";
import { Moment } from "../../types/moment";
import { useNavigate } from "react-router-dom";

const MomentList = ({ className = "" }) => {
  const moments = JSON.parse(localStorage.getItem("moments") as string);
  const navigate = useNavigate();
  
  return (
    <table className={`${className} pages-container`}>
      <tr>
        <th>Index</th>
        <th>Name</th>
        <th>Date Created</th>
      </tr>
      {
        moments ? moments.map((value: Moment, index: number) => {
          return (
            <tr
              className="hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                navigate(`/edit/${index}`);
              }}
            >
              <td>{index}</td>
              <td>
                <Link to={`/edit/${index}`}>
                  {value.name}
                </Link>
              </td>
              <td>{value.createdDate}</td>
            </tr>
          );
        }) : <p>No Moments found</p>
      }
    </table>
  );
};

export default MomentList;
