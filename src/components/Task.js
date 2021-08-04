import React, { useContext, useEffect, useRef, useState } from "react";
import { RiCloseFill, RiStarSFill, RiStarSLine } from "react-icons/ri";
import useOutsideClick from "../hooks/useOutsideClick";
import moment from "moment";
import { TaskContext } from "../contexts/TaskContext";
import {
  Checkbox,
  DaysContainer,
  EditInput,
  OptionContainer,
  TaskContainer,
  TaskTitleContainer,
} from "../pages/styles";

const Task = ({ task }) => {
  const { completeTask, removeTask, toggleStar, editTask } =
    useContext(TaskContext);
  const [isEdit, setIsEdit] = useState(false);
  const [edit, setEdit] = useState(task.title);
  const handleEdit = (e) => {
    setEdit(e.target.value);
  };

  const editRef = useRef(null);

  const handleOnClickEdit = () => {
    setIsEdit(true);
  };

  useEffect(() => {
    if (isEdit) {
      editRef.current.focus();
    }
  }, [isEdit]); // eslint-disable-line

  const editKeyDown = (e) => {
    // stops edit when enter is hit in edit input.
    if (e.key === "Enter") {
      if (edit === "" || /^\s*$/.test(edit)) {
        // check input
        console.log("Invalid edit");
        return;
      }
      setEdit(edit); //change value of edit,
      setIsEdit(false); // set edit attribute to false,
      editTask(task, edit); // update the task globally.
    }
  };

  //Issue: clicking anohter task when editing
  useOutsideClick(editRef, () => {
    // stops edit when clicked outside of edit input.
    if (edit === "") {
      // if left blank, delete task
      removeTask(task.id);
    } else {
      // update task
      editTask(task, edit);
    }
  });

  let untilScheduleDate = moment(task.scheduleDate).fromNow();
  let untilDueDate = moment(task.dueDate).fromNow();

  return (
    <TaskContainer key={task.id}>
      <Checkbox
        defaultChecked={task.completed}
        type="Checkbox"
        onClick={() => completeTask(task)}
      />
      <TaskTitleContainer onClick={handleOnClickEdit}>
        {isEdit ? (
          <EditInput
            placeholder="Press enter to confirm edit"
            value={edit}
            onChange={handleEdit}
            onKeyDown={editKeyDown}
            ref={editRef}
          />
        ) : (
          <div>{edit}</div>
        )}
      </TaskTitleContainer>
      <DaysContainer>
        <p>{task.scheduleDate && <span>Scheduled {untilScheduleDate}</span>}</p>
        <p>{task.dueDate && <span>due {untilDueDate}</span>}</p>
      </DaysContainer>

      <OptionContainer>
        {task.star ? (
          <RiStarSFill onClick={() => toggleStar(task)} />
        ) : (
          <RiStarSLine onClick={() => toggleStar(task)} />
        )}
        <RiCloseFill onClick={() => removeTask(task.id)} />
      </OptionContainer>
    </TaskContainer>
  );
};

export default Task;
