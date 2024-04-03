import { useState } from "react";
import { Link } from "react-router-dom";
import instance from "./api";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Validation from "./Vallidation";

const EmpCreate = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [permanentAddress, setPermanentAddress] = useState("permanent");
  const [currentAddress, setCurrentaddress] = useState("current");
  const [values, setValues] = useState({
    name:"",
    username: "",
    password: "",
    age: "",
    gender: "",
    dob: "",
    phoneno: "",
    alternateno: "",
    country: "",
    state: "",
    city: "",
    zip_code: "",
    currentcountry: "",
    currentstate: "",
    currentcity: "",
    currentzip_code: "",
  });

  function handleInput(event) {
    // const newObj = {...values,[event.target.name]: event.target.value}
    // setValues(newObj)
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  function handleValidation(event) {
    event.preventDefault();
    setErrors(Validation(values));
    handleSubmit();
  }

  async function handleSubmit() {
    try {
      await instance.post("/create", {
        name: values.name,
        userName: values.username,
        password: values.password,
        age: values.age,
        gender: values.gender,
        phoneNo: values.phoneno,
        alternateNo: values.alternateno,
        dateOfBirth: values.dob,
        address: [
          {
            addressType: "Permanent",
            country: values.country,
            state: values.state,
            city: values.city,
            zipCode: values.zip_code,
          },
          {
            addressType: "Current",
            country: values.currentcountry,
            state: values.currentstate,
            city: values.currentcity,
            zipCode: values.currentzip_code,
          },
        ]
      });
      toast.success("New User Added", { theme: "colored" });
      navigate("/dashboard");
      // setUserame("");
      // setPassword("");
      // setAge("");
      // setGender("");
      // setPhoneno("");
      // setAlternateno("");
      // setDob("");
    } catch {
      toast.error("Enter Valid Details", { theme: "colored" });
    }
  }

  return (
    <div className="bg-primary vh-auto">
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form onSubmit={handleValidation} className="container-create mt-5">
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2 className="text-center">Add new patient</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  
                <div className="col-lg-12 pb-4">
                    <div className="form-group">
                      <label>
                        <b>Name</b>
                      </label>
                      <input
                        className="form-control"
                        name="name"
                        type="text"
                        // value={values.password}
                        onChange={handleInput}
                        // onChange={(e) => setPassword(e.target.value)}
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12 pb-4">
                    <div className="form-group">
                      <label>
                        <b>Email Id</b>
                      </label>
                      <input
                        className="form-control"
                        name="username"
                        type="email"
                        // value={values.username}
                        onChange={handleInput}
                        // onChange={(e) => setUserame(e.target.value)}
                      />
                      {errors.username && (
                        <p style={{ color: "red", fontSize: "13px" }}>
                          {errors.username}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12 pb-4">
                    <div className="form-group">
                      <label>
                        <b>Password</b>
                      </label>
                      <input
                        className="form-control"
                        name="password"
                        type="password"
                        // value={values.password}
                        onChange={handleInput}
                        // onChange={(e) => setPassword(e.target.value)}
                      ></input>
                      {errors.password && (
                        <p style={{ color: "red", fontSize: "13px" }}>
                          {errors.password}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12 pb-4">
                    <div className="form-group">
                      <label>
                        <b>Age</b>
                      </label>
                      <input
                        name="age"
                        onChange={handleInput}
                        // value={values.age}
                        // onChange={(e) => setAge(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12 pb-4">
                    <div className="form-group">
                      <label>
                        <b>Gender</b>
                      </label>
                      <input
                        name="gender"
                        // value={values.dob}
                        onChange={handleInput}
                        // onChange={(e) => setDob(e.target.value)}
                        className="form-control"
                        type="text"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12 pb-4">
                    <div className="form-group">
                      <label>
                        <b>D.O.B</b>
                      </label>
                      <input
                        name="dob"
                        // value={values.dob}
                        onChange={handleInput}
                        // onChange={(e) => setDob(e.target.value)}
                        className="form-control"
                        type="date"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12 pb-4">
                    <div className="form-group">
                      <label>
                        <b>Phone no</b>
                      </label>
                      <input
                        name="phoneno"
                        // value={values.phoneno}
                        onChange={handleInput}
                        // onChange={(e) => setPhoneno(e.target.value)}
                        className="form-control"
                        type="number"
                      ></input>
                      {errors.phoneno && (
                        <p style={{ color: "red", fontSize: "13px" }}>
                          {errors.phoneno}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12 pb-4">
                    <div className="form-group">
                      <label>
                        <b>Aternate no</b>
                      </label>
                      <input
                        name="alternateno"
                        // value={values.alternateno}
                        onChange={handleInput}
                        // onChange={(e) => setAlternateno(e.target.value)}
                        className="form-control"
                        type="number"
                      ></input>
                      {errors.phoneno && (
                        <p style={{ color: "red", fontSize: "13px" }}>
                          {errors.phoneno}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <label>
                      <b>Current Address :</b>
                    </label>
                    <div className="form-group">
                      <label>
                        <b>Country</b>
                      </label>
                      <input
                        name="currentcountry"
                        onChange={handleInput}
                        className="form-control"
                        type="text"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>
                        <b>State</b>
                      </label>
                      <input
                        name="currentstate"
                        onChange={handleInput}
                        className="form-control"
                        type="text"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>
                        <b>City</b>
                      </label>
                      <input
                        name="currentcity"
                        onChange={handleInput}
                        className="form-control"
                        type="text"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>
                        <b>Zipcode</b>
                      </label>
                      <input
                        name="currentzipcode"
                        onChange={handleInput}
                        className="form-control"
                        type="number"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <label>
                      <b>Permanent Address :</b>
                    </label>
                    <div className="form-group">
                      <label>
                        <b>Country</b>
                      </label>
                      <input
                        name="country"
                        onChange={handleInput}
                        className="form-control"
                        type="text"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>
                        <b>State</b>
                      </label>
                      <input
                        name="state"
                        onChange={handleInput}
                        className="form-control"
                        type="text"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>
                        <b>City</b>
                      </label>
                      <input
                        name="city"
                        onChange={handleInput}
                        className="form-control"
                        type="text"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>
                        <b>Zipcode</b>
                      </label>
                      <input
                        name="zipcode"
                        onChange={handleInput}
                        className="form-control"
                        type="number"
                      ></input>
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
