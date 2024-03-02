import { useState } from "react";
import { Link } from "react-router-dom";

const EmpCreate = () => {


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
  const [json, setJson] = useState({

    name: '',
    username: 0,
    password: '',
    age: '',
    gender:'',
    dob:'',
    phoneno:'',
    alternateno:'',
    permanentAddress:'',
    currentAddress:''
  });


  async function handleSubmit(event) {
    event.preventDefault();
    try {
	setJson({
      id:id,
      name: name,
      age: age,
      gender: gender
    })
    await instance.post('/add',{
        id:id,
        name: name,
        age: age,
        gender: gender
      })
  
      alert("Registeration Successfull");

      setId("");
      setName("");
      setAge("");
      setGender("");
    } catch {
      alert("Failed")
    }
  }




  return (
    <div className="bg-primary vh-auto">
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container-create mt-5">
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2 className="text-center">Add new patient</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input className="form-control"></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Username</label>
                      <input className="form-control" ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Password</label>
                      <input className="form-control"></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Age</label>
                      <input className="form-control"></input>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">
                      Gender
                    </label>
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>Male</option>
                      <option>Female</option>
                  
                    </select>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>D.O.B</label>
                      <input className="form-control" type="date"></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Phone no</label>
                      <input className="form-control" type="number"></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Aternate no</label>
                      <input className="form-control" type="number"></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Permanent Adress</label>
                      <input className="form-control" type="number"></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Current Address</label>
                      <input className="form-control" ></input>
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
