import React, { useEffect, useState } from "react";
import List from "./components/List";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Form from "./components/Form";
import { api } from "./api/apiResource";
import uuid from "react-uuid";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchData = async () => {
    const res = await api.get("todo-list");

    // console.log("Fetched data:", res.data);

    setTasks(res.data);
  };

  useEffect(() => {
    fetchData();
  }, [tasks]);

  const submitTask = async (userTask) => {
    const data = {
      id: uuid(),
      task: userTask,
      complete: false,
    };

    await api.post("todo-list", data);

    // setTasks(...tasks, res.data);
  };

  const deleteTask = async (task_id) => {
    await api.delete(`/todo-list/${task_id}`);
  };

  const updateTask = async (task_id, complete) => {
    // console.log(task_id, complete_status);

    await api.patch(`/todo-list/${task_id}`, { complete });
  };

  return (
    <div className="mx-auto w-50 mt-5">
      <Form submitTask={submitTask} />
      <List tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
    </div>
  );
}

export default App;
