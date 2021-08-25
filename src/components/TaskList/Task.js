import React, { useContext, useEffect, useRef, useState } from "react";
import { RiCloseFill, RiStarSFill, RiStarSLine } from "react-icons/ri";
import moment from "moment";
import { TaskContext } from "../../contexts/TaskContext";
import styled from "styled-components";

const TaskContainer = styled.div`
  width: 60%;
  padding: 1rem 0.3rem 0;
  display: flex;
  align-items: center;
  position: relative;
`;
const Checkbox = styled.input`
  margin: 0 0.5rem;
`;

const TaskNameContainer = styled.div`
  width: 70%;
`;

const OptionContainer = styled.button`
  position: absolute;
  right: 1rem;
  display: flex;
`;

const EditInput = styled.input`
  background-color: #efefef;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const DaysContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.6em;
`;

const Task = ({ task }) => {
  const { completeTask, removeTask, toggleStar, editTask } =
    useContext(TaskContext);
  const [isEdit, setIsEdit] = useState(false);
  const [edit, setEdit] = useState(task.title);
  const handleChange = (e) => {
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
      // if same don't run saveTasks()
      if (edit === task.title) {
        setIsEdit(false);
        return;
      }
      setEdit(edit); //change value of edit,
      setIsEdit(false); // set edit attribute to false,
      editTask(task, edit); // update the task globally.
    }
  };

  const outsideClick = () => {
    if (edit === "") {
      // check if edit is empty
      removeTask(task.id);
      setIsEdit(false);
      return;
    }
    if (edit === task.title) {
      // check if edit is the same
      setIsEdit(false);
      return;
    }
    setEdit(edit); //change value of edit,
    setIsEdit(false); // set edit attribute to false,
    editTask(task, edit); // update the task.
  };

  let untilScheduleDate = moment(task.scheduleDate).fromNow();
  let untilDueDate = moment(task.dueDate).fromNow();

  return (
    <TaskContainer key={task.id}>
      <Checkbox
        defaultChecked={task.completed}
        type="Checkbox"
        onClick={() => completeTask(task)}
      />
      <TaskNameContainer onClick={handleOnClickEdit}>
        {isEdit ? (
          <EditInput
            placeholder="Press enter to confirm edit"
            value={edit}
            onChange={handleChange}
            onBlur={outsideClick}
            onKeyDown={editKeyDown}
            ref={editRef}
          />
        ) : (
          <div>{edit}</div>
        )}
      </TaskNameContainer>
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
