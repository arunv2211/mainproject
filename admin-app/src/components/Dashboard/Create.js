import { useState } from "react";
import { Link } from "react-router-dom";
import instance from "./api";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Validation from "./Vallidation";

const EmpCreate = () => {
  const navigate = useNavigate();
  // const [id, setId] = useState("");
  // const [name, setName] = useState("");
  // const [username, setUserame] = useState("");
  // const [password, setPassword] = useState("");
  // const [age, setAge] = useState("");
  // const [gender, setGender] = useState("");
  // const [dob, setDob] = useState("");
  // const [phoneno, setPhoneno] = useState("");
  // const [alternateno, setAlternateno] = useState("");
  // const [permanentAddress, setPermanentAddress] = useState("");
  // const [currentAddress, setCurrentaddress] = useState("");
  const [values, setValues] = useState({
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

  const [errors, setErrors] = useState({});

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
    // event.preventDefault();
    try {
      await instance.post("/create", {
        userName: values.username,
        password: values.password,
        age: values.age,
        gender: values.gender,
        phoneNo: values.phoneno,
        aternateNo: values.alternateno,
        dateOfBirth: values.dob,
        address: [
          {
            address_type: "permanent",
            country: values.country,
            state: values.state,
            city: values.city,
            zip_code: values.zip_code,
          },
          {
            address_type: "current",
            country: values.currentcountry,
            state: values.currentstate,
            city: values.currentcity,
            zip_code: values.currentzip_code,
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
                        <b>Username</b>
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
