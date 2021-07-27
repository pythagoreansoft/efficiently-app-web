import React from "react";
import styled from "styled-components";

const Checkbox = styled.input`
  margin: 1rem;
`;

const TaskContainer = styled.div`
  height: auto;
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 0.1rem solid #f1f1f1;
  border-radius: 0.5rem;
  background-color: #efefef;
  margin: 1rem;
  padding: 1rem;
`;

const Task = ({ completed, title }) => {
  return (
    <TaskContainer>
      <Checkbox />
      {title}
    </TaskContainer>
  );
};

export default Task;
