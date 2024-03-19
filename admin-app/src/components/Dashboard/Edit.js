import React from 'react'
// import { Link } from 'react-router-dom'
import { useEffect , useState} from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import instance from './api';

const Edit = () => {
  const { userId } = useParams();
  console.log(userId);

  useEffect(() => {
    loadUser();
     }, []);
 
     const loadUser= async()=>{
       await instance.get("/getuserbyid/" + userId).then(res => {
        setData(res.data.data.data)
         console.log(Data) 
       })
      }

const navigate = useNavigate();

  const [Data, setData] = useState("");
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
  

  return (
    <div className="bg-primary vh-100">
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container-create mt-5">
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2 className="text-center">Edit patient detail</h2>
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
                      <label>Age</label>
                      <input className="form-control"></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Phone</label>
                      <input className="form-control"></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Alternate no</label>
                      <input className="form-control"></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Address</label>
                      <input className="form-control"></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>
                      <Link to="/dashboard" className="btn btn-danger">Back</Link>
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