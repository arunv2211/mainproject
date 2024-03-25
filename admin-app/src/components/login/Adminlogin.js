import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../Dashboard/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validation from "./LoginValidation";

 

const Adminlogin = () => {

  const navigate = useNavigate();
  const [errors, setError] = useState({});
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [Data, setData] = useState([]);
 

  function handleChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    // setError(validation(Data));
    try {
      await instance
        .get("/getuser/" + values.username + "/" + values.password)
        .then((response) => {
        setData(response.data)
        });

        
      if (Data.userName === values.username) {
        toast.success("Login success", { theme: "colored" });
        navigate("/dashboard");
      } else {
        toast.error("Invalid username or password", { theme: "colored" });
      }

  
      setValues.username("");
      setValues.password("");
      // setUserName("");
      // setPassword("");
    } catch (error) {
      console.log(error);
      toast.error("Not Found", { theme: "colored" });
    }
  }

  return (
    <div className="login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary  ">
      <div className="40-w p-5 rounded bg-white">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center mb-3">Login</h3>
          <div className="mb-4">
            <input
              name="username"
              className="form-control"
              value={values.username}
              onChange={handleChange}
              type="text"
              // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
              placeholder="Username"
            ></input>
            {errors.username && (
              <p style={{ color: "red", fontSize: "13px" }}>
                {errors.username}
              </p>
            )}
          </div>

          <div className="mb-4">
            <input
              className="form-control"
              name="password"
              value={values.password}
              onChange={handleChange}
              type="password"
              // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required
              placeholder="Password"
            ></input>
            {errors.password && (
              <p style={{ color: "red", fontSize: "13px" }}>
                {errors.password}
              </p>
            )}
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
