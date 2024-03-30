import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import instance from "../Dashboard/api";
import { useParams } from "react-router-dom";
import PuffLoader from "react-spinners/PuffLoader";
import { useNavigate } from "react-router-dom";
import "./history.css"
import { toast } from "react-toastify";
import { FcOk } from "react-icons/fc";
import { MdCancel } from "react-icons/md";

function History() {
  let [loading, setLoading] = useState(false);
  const [patientHistory, patientHistoryChange] = useState({});
  const { userid } = useParams();
  const navigate = useNavigate();

  function loadBack() {
    navigate('/dashboard')
  }

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    await instance.get("/gettreatmentbyuserid/" + userid).then((res) => {
      patientHistoryChange(res.data)
      // console.log(res.config.data.status)
      // if (res.config.data.status===500) {
      //   toast.error("No History Found", { theme: "colored" });
      //   navigate('/dashboard')
      // }
      // else{
      //   patientHistoryChange(res.data)
      // }
    });
    console.log(patientHistory)
    setLoading(true);
  };

  

  return (
    <div>
      {
        loading ? (
          <div className="container-two ">
      <div className="card">
        <div className="card-title">
          <div className="add-container">
            <div>
              <div className="d-flex justify-content-between mt-4">
                <h3>Patient History</h3>
                <button className="btn btn-danger btn-sm" onClick={loadBack}>Back</button>
              </div>
              <table class="table table-striped table-bordered  mt-3">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Summary</th>
                    <th scope="col">Suggestion</th>
                    <th scope="col">Diagnosis</th>
                    <th scope="col">Conclusion</th>
                    <th scope="col">Appointment Date</th>
                    <th scope="col">Medicine</th>
                    <th scope="col">Dosage</th>
                    <th scope="col">Morning</th>
                    <th scope="col">Afternoon</th>
                    <th scope="col">NIght</th>
                    <th scope="col">Before Food</th>
                    <th scope="col">After Food</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{patientHistory.treatmentId}</td>
                    <td>{patientHistory.summary}</td>
                    <td>{patientHistory.suggestion}</td>
                    <td>{patientHistory.diagnosis}</td>
                    <td>{patientHistory.conclusion}</td>
                    <td>{patientHistory.appointmentDate}</td>
                    {patientHistory.patientMendicationList.map((items) => (
                      <td>{items.medicine}</td>
                    ))}
                    {patientHistory.patientMendicationList.map((items) => (
                      <td>{items.dosage}</td>
                    ))}
                    {patientHistory.patientMendicationList.map((items) => (
                      <td>{items.morning ? (<FcOk />) : (<MdCancel color="#E60000"/>)}</td>
                    ))}
                    {patientHistory.patientMendicationList.map((items) => (
                      <td>{items.afternoon ? (<FcOk />) : (<MdCancel color="#E60000"/>)}</td>
                    ))}
                    {patientHistory.patientMendicationList.map((items) => (
                      <td>{items.night ? (<FcOk />) : (<MdCancel color="#E60000"/>)}</td>
                    ))}
                    {patientHistory.patientMendicationList.map((items) => (
                      <td>{items.before ? (<FcOk />) : (<FcOk />)}</td>
                    ))}
                    {patientHistory.patientMendicationList.map((items) => (
                      <td>{items.after ? (<FcOk />) : (<MdCancel color="#E60000"/>)}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
        ) : (
          <div className="d-flex align-items-center justify-content-center mt-5">
                  <PuffLoader color="#0000FF" />
                </div>
        )
      }
    </div>
  );
}

export default History;
