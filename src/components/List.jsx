import React from "react";
import Card from "./Card";

function List({ tasks, deleteTask, updateTask }) {
  return (
    <div>
      <div>
        <ol className="list-group">
          <Card tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
        </ol>
      </div>
    </div>
  );
}

export default List;
