import { useState } from "react";
import { Link } from "react-router-dom";

const EmpCreate = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [username, setUserame] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [alternateno, setAlternateno] = useState("");
  const [permanentAddress, setPermanentaddress] = useState("");
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

  function handleSubmit(event) {
    event.preventDefault();
    // console.log({id,name,username,password,age,gender,dob,phoneno,alternateno,permanentAddress,currentAddress})
    const userData = ({username,password,age,gender,dob,phoneno,alternateno,permanentAddress,currentAddress});

    // setJson({
    //   // id: id,
    //   name: name,
    //   age: age,
    //   gender: gender,
    // });
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
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        value={id}
                        disabled="disabled"
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div  className="form-group">
                      <label>Name</label>
                      <input value={name} onChange={e=>setName(e.target.value)} className="form-control"></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Username</label>
                      <input value={username} onChange={e=>setUserame(e.target.value)} className="form-control"></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Password</label>
                      <input value={password} onChange={e=>setPassword(e.target.value)} className="form-control"></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div  className="form-group">
                      <label>Age</label>
                      <input value={age} onChange={e=>setAge(e.target.value)} className="form-control"></input>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Gender</label>
                    <select checked={gender} onChange={e=>setGender(e.target.checked)} type="checkbox" class="form-control" id="exampleFormControlSelect1">
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>D.O.B</label>
                      <input value={dob} onChange={e=>setDob(e.target.value)} className="form-control" type="date"></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Phone no</label>
                      <input value={phoneno} onChange={e=>setPhoneno(e.target.value)} className="form-control" type="number"></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Aternate no</label>
                      <input value={alternateno} onChange={e=>setAlternateno(e.target.value)} className="form-control" type="number"></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Permanent Address</label>
                      <input value={permanentAddress} onChange={e=>setPermanentaddress(e.target.value)} className="form-control" type="number"></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Current Address</label>
                      <input value={currentAddress} onChange={e=>setCurrentaddress(e.target.value)} className="form-control"></input>
                    </div>
                  </div>

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
