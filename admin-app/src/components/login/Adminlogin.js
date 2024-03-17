import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../Dashboard/api";

const Adminlogin = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [Data, setData] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await instance
        .get("/getuser/" + userName)
        .then((response) => setData(response.data));
      console.log(Data);

      
      if (Data.userName === userName) {
        alert("Registeration Successfull");
        navigate("/dashboard");
      } else {
        alert("Invalid userName or password");
      }

      setUserName("");
      setPassword("");
    } catch (error) {
      console.log(error)
      alert("Not Found");
    }
  }

  return (
    <div className="login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary  ">
      <div className="40-w p-5 rounded bg-white">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center mb-3">Login</h3>
          <div className="mb-4">
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="Username"
              className="form-control"
            ></input>
          </div>
          <div className="mb-4">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="form-control"
            ></input>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Adminlogin;
