import { useState } from "react";
import { Link } from "react-router-dom";
import instance from "./api";
import { useNavigate } from "react-router-dom";
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const EmpCreate = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [username, setUserame] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [alternateno, setAlternateno] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [currentAddress, setCurrentaddress] = useState("");
  // const [json, setJson] = useState({
  //   id:"",
  //   name: "",
  //   username: 0,
  //   password: "",
  //   age: "",
  //   gender: "",
  //   dob: "",
  //   phoneno: "",
  //   alternateno: "",
  //   permanentAddress: "",
  //   currentAddress: "",
  // });

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await instance.post("/create", {
        userName: username,
        password: password,
        age: age,
        gender: gender,
        phoneNo: phoneno,
        aternateNo: alternateno,
        dateOfBirth: dob,
      })
      console.log({
        userName: username,
        password: password,
        age: age,
        gender: gender,
        phoneNo: phoneno,
        aternateNo: alternateno,
        dateOfBirth: dob,
      });
      console.log(permanentAddress);
      toast.success("New User Added",{theme:'colored'});
      navigate('/dashboard');
      setUserame("");
      setPassword("");
      setAge("");
      setGender("");
      setPhoneno("");
      setAlternateno("");
      setDob("");

    } catch {
      toast.error("Enter Valid Details",{theme:'colored'});
    }
  }

  return (

    <div className="bg-primary vh-auto">
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form onSubmit={handleSubmit} className="container-create mt-5">
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2 className="text-center">Add new patient</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  
                  <div className="col-lg-12 pb-4">
                    <div className="form-group">
                      <label><b>Username</b></label>
                      <input
                        value={username}
                        onChange={(e) => setUserame(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12 pb-4">
                    <div className="form-group">
                      <label><b>Password</b></label>
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12 pb-4">
                    <div className="form-group">
                      <label><b>Age</b></label>
                      <input
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div class="form-group pb-4">
                    <label for="exampleFormControlSelect1"><b>Gender</b></label>
                    <select
                      checked={gender}
                      onChange={(e) => setGender(e.target.checked)}
                      type="checkbox"
                      class="form-control"
                      id="exampleFormControlSelect1"
                    >
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>

                  <div className="col-lg-12 pb-4">
                    <div className="form-group">
                      <label><b>D.O.B</b></label>
                      <input
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="form-control"
                        type="date"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12 pb-4">
                    <div className="form-group">
                      <label><b>Phone no</b></label>
                      <input
                        value={phoneno}
                        onChange={(e) => setPhoneno(e.target.value)}
                        className="form-control"
                        type="number"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12 pb-4">
                    <div className="form-group">
                      <label><b>Aternate no</b></label>
                      <input
                        value={alternateno}
                        onChange={(e) => setAlternateno(e.target.value)}
                        className="form-control"
                        type="number"
                      ></input>
                    </div>
                  </div>

                  {/* <div className="col-lg-12">
                    <div className="form-group">
                      <label>Country</label>
                      <input
                        value={permanentAddress}
                        onChange={(e) => setPermanentAddress(e.target.value)}
                        className="form-control"
                        type="text"
                      ></input>
                    </div>
                  </div>

                  
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>State</label>
                      <input
                        value={permanentAddress}
                        onChange={(e) => setPermanentAddress(e.target.value)}
                        className="form-control"
                        type="text"
                      ></input>
                    </div>
                  </div>


                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>City</label>
                      <input
                        value={permanentAddress}
                        onChange={(e) => setPermanentAddress(e.target.value)}
                        className="form-control"
                        type="text"
                      ></input>
                    </div>
                  </div>


                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Zipcode</label>
                      <input
                        value={permanentAddress}
                        onChange={(e) => setPermanentAddress(e.target.value)}
                        className="form-control"
                        type="number"
                      ></input>
                    </div>
                  </div> */}

                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>
                      <Link to="/dashboard" className="btn btn-danger">
                        Back
                      </Link>
                      {/* <div className="btn btn-danger">Back</div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmpCreate;
