import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import instance from "../Dashboard/api";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Validation from "../Dashboard/Vallidation";

import React from "react";

const Treatment = () => {
  const { userid } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    userId: userid,
    summary: "",
    suggestion: "",
    diagnosis: "",
    conclusion: "",
    appointmentDate: "",
    medicine: "",
    dosage: "",
    morning: "",
    afternoon: "",
    night: "",
    beforeFood: "",
    afterFood: "",
  });

  function handleInput(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  async function handleSubmit() {
    try {
      await instance.post("/treatmentpost", {
        userId: userid,
        summary: values.summary,
        suggestion: values.suggestion,
        diagnosis: values.diagnosis,
        conclusion: values.conclusion,
        appointment_date: values.appointmentDate,
        patientMendicationList: [
          {
            medicine: values.medicine,
            dosage: values.dosage,
            timeList: [
              {
                morning: values.morning,
                afternoon: values.afternoon,
                night: values.night,
                // before:values.beforeFood,
                after: values.afterFood,
              },
            ],
          },
        ],
      })
     
    } catch (error) {
      console.log(error);
      toast.error("Server Error", { theme: "colored" });
    }
    toast.success("Treatment Added", { theme: "colored" });
    navigate("/dashboard");
  }

  return (
    <div className="bg-primary vh-auto">
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container-create mt-5 mb-5" onSubmit={handleSubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2 className="text-center">Add Medicines for patient</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12 pb-4">
                    <div className="form-group">
                      <label>
                        <b>Summary</b>
                      </label>
                      <input
                        className="form-control"
                        name="summary"
                        type="textarea"
                        // value={values.username}
                        onChange={handleInput}
                        // onChange={(e) => setUserame(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 pb-4">
                    <div className="form-group">
                      <label>
                        <b>Suggestion</b>
                      </label>
                      <input
                        className="form-control"
                        name="suggestion"
                        type="paragraph"
                        // value={values.password}
                        onChange={handleInput}
                        // onChange={(e) => setPassword(e.target.value)}
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12 pb-4">
                    <div className="form-group">
                      <label>
                        <b>Diagnosis</b>
                      </label>
                      <input
                        type="text"
                        name="diagnosis"
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
                        <b>Conclusion</b>
                      </label>
                      <input
                        type="text"
                        name="conclusion"
                        // value={values.dob}
                        onChange={handleInput}
                        // onChange={(e) => setDob(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12 pb-4">
                    <div className="form-group">
                      <label>
                        <b>Appointment Date</b>
                      </label>
                      <input
                        type="date"
                        name="appointmentDate"
                        // value={values.dob}
                        onChange={handleInput}
                        // onChange={(e) => setDob(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12 pb-4">
                    <div className="form-group">
                      <label>
                        <b>Medicine</b>
                      </label>
                      <input
                        type="text"
                        name="medicine"
                        // value={values.dob}
                        onChange={handleInput}
                        // onChange={(e) => setDob(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12 pb-4">
                    <div className="form-group">
                      <label>
                        <b>Dosage</b>
                      </label>
                      <input
                        type="text"
                        name="dosage"
                        onChange={handleInput}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12 pb-4">
                    <div className="form-group d-flex flex-row">
                      <label>
                        <b>Morning </b>
                      </label>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="morning"
                          onChange={handleInput}
                          // id="exampleRadios1"
                          value="true"
                        />
                        <label class="form-check-label" for="exampleRadios1">
                          Yes
                        </label>
                      </div>
                      <div class="form-check ">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="morning"
                          onChange={handleInput}
                          // id="exampleRadios2"
                          value="false"
                        />
                        <label class="form-check-label" for="exampleRadios2">
                          No
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 pb-4">
                    <div className="form-group d-flex flex-row">
                      <label>
                        <b>Afternoon </b>
                      </label>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="afternoon"
                          value="true"
                          onChange={handleInput}
                        />
                        <label class="form-check-label" for="exampleRadios1">
                          Yes
                        </label>
                      </div>
                      <div class="form-check ">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="afternoon"
                          onChange={handleInput}
                          value="false"
                        />
                        <label class="form-check-label" for="exampleRadios2">
                          No
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 pb-4">
                    <div className="form-group d-flex flex-row">
                      <label>
                        <b>Night </b>
                      </label>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="night"
                          onChange={handleInput}
                          value="true"
                        />
                        <label class="form-check-label" for="exampleRadios1">
                          Yes
                        </label>
                      </div>
                      <div class="form-check ">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="night"
                          onChange={handleInput}
                          value="false"
                        />
                        <label class="form-check-label" for="exampleRadios2">
                          No
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 pb-4">
                    <div className="form-group d-flex flex-row">
                      <label>
                        <b>Before Food </b>
                      </label>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="beforeFood"
                          onChange={handleInput}
                          value="true"
                        />
                        <label class="form-check-label" for="exampleRadios1">
                          Yes
                        </label>
                      </div>
                      <div class="form-check ">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="beforeFood"
                          onChange={handleInput}
                          value="false"
                        />
                        <label class="form-check-label" for="exampleRadios2">
                          No
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 pb-4">
                    <div className="form-group d-flex flex-row">
                      <label>
                        <b>After Food </b>
                      </label>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="afterFood"
                          onChange={handleInput}
                          value="true"
                        />
                        <label class="form-check-label" for="exampleRadios1">
                          Yes
                        </label>
                      </div>
                      <div class="form-check ">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="afterFood"
                          onChange={handleInput}
                          value="false"
                        />
                        <label class="form-check-label " for="exampleRadios2">
                          No
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group d-flex justify-content-end">
                      <button className="btn btn-success" type="submit">
                        <b>Save</b>
                      </button>
                      <Link to="/dashboard" className="btn btn-danger">
                        <b>Back</b>
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

export default Treatment;

// <div className="col-lg-12 pb-4">
// <div className="form-group">
//   <label><b></b></label>
//   <div class="form-check">
//     <input
//       class="form-check-input"
//       type="checkbox"
//       onChange={handleInput}
//       name="morning"
//       id="flexCheckDefault"
//     />
//     <label class="form-check-label" for="flexCheckDefault">
//       Morning
//     </label>
//   </div>
//   <div class="form-check">
//     <input
//       class="form-check-input"
//       type="checkbox"
//       name="afternoon"
//       onChange={handleInput}
//       id="flexCheckChecked"
//     />
//     <label class="form-check-label" for="flexCheckChecked">
//       Afternoon
//     </label>
//   </div>
//   <div class="form-check">
//     <input
//       class="form-check-input"
//       type="checkbox"
//       onChange={handleInput}
//       name="night"
//       id="flexCheckChecked"
//     />
//     <label class="form-check-label" for="flexCheckChecked">
//       Night
//     </label>
//   </div>
// </div>
// </div>
