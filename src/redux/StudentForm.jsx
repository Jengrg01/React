import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
const StudentForm = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch()
  const change = () => {
    dispatch({ type: "CHANGE_NAME", payload:name});
  };
  return (
    <>
      <div className="container my-3">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6" onChange={n => setName(n.target.value)}>
            <input type="text" name="name" id="name" className="form-control" />
            <div className="mt-2">
              <button className="btn btn-primary" onClick={change}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentForm;
