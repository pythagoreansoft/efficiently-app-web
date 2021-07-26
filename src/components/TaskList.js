import React, { useState } from "react";
import styled from "styled-components";
import TaskForm from "./TaskForm";
import FilteredTasks from "./FilteredTasks";

var test = [
  {
    key: 1,
    title: "sample title 1",
    completed: true,
    star: true,
    "created-date": "07-11-2021",
    "due-date": "07-11-2021",
  },
  {
    key: 2,
    title: "sample title 2",
    completed: false,
    star: true,
    "created-date": "07-11-2021",
    "due-date": "07-11-2021",
  },
  {
    key: 3,
    title: "sample title 3",
    completed: false,
    star: true,
    "created-date": "07-11-2021",
    "due-date": "07-11-2021",
  },
  {
    key: 4,
    title: "sample title 4",
    completed: false,
    star: true,
    "created-date": "07-11-2021",
    "due-date": "07-11-2021",
  },
  {
    key: 5,
    title: "sample title 5",
    completed: true,
    star: false,
    "created-date": "07-24-2021",
    "due-date": "07-24-2021",
  },
];

const TaskContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  border: 0.1rem solid #f1f1f1;
  margin: 1rem;
  border-radius: 0.5rem;
  background-color: #efefef;
`;

const Checkbox = styled.input`
  margin: 1rem;
`;

const TasksContainer = styled.div`
  height: 100%;
  position: relative;
`;

const TaskTitleContainer = styled.div``;

const TaskList = ({ inbox, archive, star, upcoming, tasks }) => {
  const inboxTasks = tasks.filter((task) => !task.completed);
  const archiveTasks = tasks.filter((task) => task.completed);
  const starTasks = tasks.filter((task) => task.star);
  const upcomingTasks = tasks.filter((task) => task.upcoming);

  const completeTask = () => {
    alert("Completing Task");
  };

  return (
    <>
      <TasksContainer>
        {inbox &&
          inboxTasks.map((task) => {
            return (
              <TaskContainer>
                <Checkbox type="checkbox" onClick={() => completeTask()} />
                {task.title}
              </TaskContainer>
            );
          })}
        {archive &&
          archiveTasks.map((task) => {
            return (
              <TaskContainer>
                <Checkbox type="checkbox" onClick={() => completeTask()} />
                {task.title}
              </TaskContainer>
            );
          })}

        {star &&
          starTasks.map((task) => {
            return (
              <TaskContainer>
                <Checkbox type="checkbox" onClick={() => completeTask()} />
                {task.title}
              </TaskContainer>
            );
          })}
        {upcoming &&
          upcomingTasks.map((task) => {
            return (
              <TaskContainer>
                <Checkbox type="checkbox" onClick={() => completeTask()} />
                {task.title}
              </TaskContainer>
            );
          })}
      </TasksContainer>
    </>
  );
};

export default TaskList;
