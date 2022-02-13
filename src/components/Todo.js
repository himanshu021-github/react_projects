import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  //const [title] = props;
  //const [modelIsOpen, setModelIsOpen] = useState(false);
  // hook for changing the state of Modal
  const [modelState, setModelState] = useState("hide");
  // hook for changing the state of task
  const [taskState, setTaskState] = useState("pending");

  function doneHandler() {
    setModelState("done");
  }
  function deleteHandler() {
    setModelState("delete");
  }
  function hideModalHandler() {
    setModelState("hide");
  }
  function doneTask() {
    if (taskState === "pending") {
      setTaskState("done");
    } else {
      setTaskState("pending");
    }

    setModelState("hide");
  }
  function deleteTask() {
    setModelState("hide");
  }

  return (
    <div className="card">
      <div
        className={
          taskState === "pending"
            ? "task Text taskText"
            : "taskText taskText--done"
        }
      >
        {props.text}
      </div>

      <div className="actions">
        <button
          className={
            taskState === "pending" ? "btn btn--done" : "btn btn--delete"
          }
          onClick={doneHandler}
        >
          Mark {taskState === "pending" ? "Done" : "Pending"}
        </button>
        <button className="btn btn--delete" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modelState === "done" && (
        <Modal
          message={
            taskState === "pending"
              ? "Is the task complete?"
              : "Is the task Pending"
          }
          onCancel={hideModalHandler}
          onConfirm={doneTask}
        />
      )}
      {modelState === "delete" && (
        <Modal
          message="Are you sure?"
          onCancel={hideModalHandler}
          onConfirm={deleteTask}
        />
      )}
      {modelState !== "hide" && <Backdrop onClick={hideModalHandler} />}
    </div>
  );
}
export default Todo;
