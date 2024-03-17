// import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import home from "../Home/homestyle.css";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./homestyle.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import instance from "../api";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    instance
      .get("/userdetails")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  // const [openPopup, setOpenPopup] = useState(false);
  return (
    <div className="container-two">
      <div className="card">
        <div className="card-title ">
          <div class="d-flex flex-row ">
            <h4 className="text-center">Patient List</h4>
          </div>

          <div className="add-container-one">
            <input
              type="text"
              class="form-control"
              placeholder="Search patient by name"
            ></input>
            <div>
              <div className="btn btn-primary w-10 p-1 ">Search</div>
            </div>
            {/* <div className="add-one">Search</div> */}
          </div>
        </div>
        <div className="card-body">
          <div>
            <Link to="/dashboard/create" className="btn btn-primary  w-10 p-1">
              Add new (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>UserId</td>
                <td>UserName</td>
                <td>Number</td>
                <td>Age</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {/* {
                data.map((user, index) => {
                  return <tr key={index}>
                    <td></td>

                  </tr>

                })
              } */}
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Home;

{
  /* <tr>
                <td>Arun</td>
                <td>128328873</td>
                <td>21</td>
                <td>
                  <Link to="/dashboard/edit" className="btn btn-success w-10 p-1">Edit</Link>
                  <Link to="/dashboard" className="btn btn-danger w-10 p-1">Remove</Link>
                  <Link to="/dashboard/details" className="btn btn-primary w-10 p-1">Details</Link>
                </td>
              </tr> */
}
