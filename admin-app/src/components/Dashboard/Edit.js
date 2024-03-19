import React from 'react'
// import { Link } from 'react-router-dom'
import { useEffect , useState} from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import instance from './api';
import { toast } from 'react-toastify';

const Edit = () => {
  const navigate = useNavigate();
  const { userid } = useParams();
  const [patientData, patientDataChange] = useState([]);

  const [Userid, setUserId] = useState("");
  const [username, setUserame] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [alternateno, setAlternateno] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [currentAddress, setCurrentaddress] = useState("");
  

  useEffect(() => {
    instance.get("/getuserbyid/" + userid).then((res) => {
      // patientDataChange(res.data)

      patientDataChange(res.data);
      setUserId(res.data.userid);
      setUserame(res.data.userName);
      setPassword(res.data.password);
      setAge(res.data.age);
      setGender(res.data.gender);
      setDob(res.data.dateOfBirth);
      setPhoneno(res.data.phoneNo);
      setAlternateno(res.data.alternateNo);
    });
  }, []);
  console.log(patientData);

  // setUserame(patientData.userName);
  // setPassword(patientData.password);
  // setAge(patientData.age);
  // setGender(patientData.gender);
  // setPhoneno(patientData.phoneNo);
  // setAlternateno(patientData.alternateno);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await instance.put("/update", {
        userid : Userid,
        userName: username,
        password: password,
        age: age,
        gender: gender,
        phoneNo: phoneno,
        dateOfBirth: dob,
        aternateNo: alternateno
        
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
      toast.success("Updated successfully",{theme:'colored'});
      navigate('/dashboard');
      setUserame("");
      setPassword("");
      setAge("");
      setGender("");
      setPhoneno("");
      setAlternateno("");
      setDob("");

    } catch {
      alert("Failed")
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
                      placeholder={username}
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
                      <label><b>Phone No</b></label>
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
                      <label><b>Aternate No</b></label>
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
  )
}

export default Edit