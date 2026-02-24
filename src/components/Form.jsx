import React, { useState } from "react";

const Form = ({ submitTask }) => {
  const [userTask, setUserTask] = useState("");

  const fromSubmitHandling = () => {
    submitTask(userTask);
    setUserTask("");
  };

  return (
    <div>
      <h3 className="mb-4 text-white">React Todo Lists</h3>
      <div className="row">
        <div className="col-6 offset-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Task...."
            value={userTask}
            onChange={(e) => setUserTask(e.target.value)}
          />
        </div>
        <div className="col-3">
          <button
            className="btn btn-dark"
            onClick={() => {
              fromSubmitHandling();
            }}
          >
            <i className="fa-solid fa-circle-plus me-2"></i>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
