import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useParams } from "react-router-dom";
import instance from "./api";
import PuffLoader from "react-spinners/PuffLoader";

const EmpDetail = () => {
  const { userid } = useParams();
  let [loading, setLoading] = useState(false);
  const [patientData, patientDataChange] = useState({});

  useEffect(() => {
    instance.get("/userdetailbyid/" + userid).then((res) => {
      patientDataChange(res.data);
    });
    setLoading(true);
  }, []);

  console.log(patientData);

  return (
    <div className="bg-primary vh-100">
      <div className="row ">
        <div className="offset-lg-3 col-lg-6">
          <div className="container-details mt-5 mb-5">
            <div className="card row" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2 className="text-center mt-3">
                  <b>PATIENT DETAILS</b>
                </h2>
              </div>
              <div className="card-body"></div>

              {
                <div>
                  <div className="pb-3">
                    <b>Patient Name</b> - {patientData.userName}
                  </div>
                  <div className="pb-3">
                    <b>Age</b> - {patientData.age}{" "}
                  </div>
                  <div className="pb-3">
                    <b>Date Of Birth</b> - {patientData.dateOfBirth}{" "}
                  </div>
                  <div className="pb-3">
                    <b>Phone No</b> - {patientData.phoneNo}{" "}
                  </div>
                  <div className="pb-3">
                    <b>Aternate no</b> - {patientData.alternateNo}
                  </div>
                  <div className="pb-3">
                    <b>Gender</b> - {patientData.gender}
                  </div>
                 {patientData.address.map((items) => {
                    <div>
                      <b>Address type - {items.addressType}</b>
                    <b>Country -{items.country}</b>
                    <b>State -{items.state}</b>
                    <b>City -{items.city}</b>
                    <b>Zipcode -{items.zip_code}</b>
                    </div>
                 })}
                  <Link to="/dashboard" className="btn btn-danger mb-3 ">
                    Back to Listing
                  </Link>
                </div>
              }

              {/* <div>
                <div className="pb-3">patient name : Arun</div>

                <div className="pb-3">Phone : 2103987097 </div>
                <div className="pb-3">Aternate no : 2103987097 </div>
                <div className="pb-3">
                  Address : 234,road st, arni , tvmalai{" "}
                </div>
                <div className="pb-3">Medicines : </div>
                <Link to="/dashboard" className="btn btn-danger mb-3 ">Back to Listing</Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpDetail;
