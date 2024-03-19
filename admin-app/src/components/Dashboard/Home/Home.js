// import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import home from "../Home/homestyle.css";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./homestyle.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import instance from "../api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Home() {
  const[search,setSearch] = useState('');
  const navigate = useNavigate();
  const LoadEdit = (id) => {
    navigate("/dashboard/edit/" + id);
  };

  const LoadDetail = (id) => {
    navigate("/dashboard/details/" + id);
  };

  const Removefunction = async (id) => {
    if (window.confirm("Do you want to remove?")) {
      await instance
        .delete("/delete/" + id)
        .then((res) => {
          
          window.location.reload();
          toast.success("Removed successfully",{theme:'colored'});
        })
        
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  const [Data, setData] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    await instance.get("/userdetails").then((res) => {
      setData(res.data.data.data);
      console.log(Data);
    });
  };
  console.log(Data);
  // const [openPopup, setOpenPopup] = useState(false);
  return (
    <div className="container-two">
      <div className="card">
        <div className="card-title ">
          <div class="d-flex flex-row ">
            <h4 className="text-center">Patient List</h4>
          </div>

          <div className="add-container">
            <input
              type="text"
              class="form-control"
              placeholder="Search patient by name"
              onChange={(e) => setSearch(e.target.value)}
            ></input>
            {/* <div>
              <div className="btn btn-primary w-10 p-1 ">Search</div>
            </div> */}
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
              <tr className="table-secondary">
                <th>UserId</th>
                <th>UserName</th>
                <th>Password</th>
                <th>Number</th>
                <th>Date Of Birth</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Data.filter((user =>{
              return search.toLowerCase() === '' ? user : user.userName.toLowerCase().includes(search)
              })).map((user, index) => (
                <tr key={user.userId}>
                  <td>{user.userId}</td>
                  <td>{user.userName}</td>
                  <td>{user.password}</td>
                  <td>{user.phoneNo}</td>
                  <td>{user.dateOfBirth}</td>
                  <td>
                    <a
                      onClick={() => {
                        LoadEdit(user.userId);
                      }}
                      className="btn btn-success w-10 p-1"
                    >
                      Edit
                    </a>
                    <a
                      onClick={() => {
                        Removefunction(user.userId);
                      }}
                      className="btn btn-danger w-10 p-1"
                    >
                      Remove
                    </a>
                    <a
                    onClick={() => {
                      LoadDetail(user.userId);
                    }}
                    className="btn btn-primary w-10 p-1">Details</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Home;
