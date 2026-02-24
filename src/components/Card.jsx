/* eslint-disable no-restricted-globals */
import React from "react";

function Card({ tasks, deleteTask, updateTask }) {
  const handleDeleteTask = (id) => {
    if (confirm("Are you sure?")) {
      deleteTask(id);
    }
  };

  return (
    <div>
      {tasks.map((task) => (
        <div
          key={task.id}
          className={
            task.complete
              ? "list-group-item w-100 mt-3 shadow-sm bg-success text-white text-decoration-line-through"
              : "list-group-item w-100 mt-3 shadow-sm "
          }
        >
          <div className="row">
            <div className="col-9 offset-1">
              <input
                type="checkbox"
                className="me-2"
                onClick={() => {
                  updateTask(task.id, !task.complete);
                }}
                checked={task.complete}
              />
              {task.task}
            </div>
            <div className="col-2">
              <i
                className="fa-solid fa-trash"
                onClick={() => {
                  handleDeleteTask(task.id);
                }}
              ></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
