import styled from "styled-components";

export const SearchInputContainer = styled.input`
  width: 80%;
  height: 2.5rem;
  border: 0.1rem solid #efefef;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 0.9rem;
  margin: 0 1rem 0 1rem;
  text-align: center;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2rem #94d9ff;
  }
`;

export const LogoutButton = styled.button`
  height: 5%;
  widgth: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  &: hover {
    opacity: 1;
  }
`;

export const Checkbox = styled.input`
  margin: 1rem;
`;

export const TaskContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  // border: 0.1rem solid #f1f1f1;
  border-radius: 0.5rem;
  // background-color: #efefef;
  margin: 1.5rem 3rem;
  padding: 0.1rem;
  position: relative;
`;

export const OptionContainer = styled.button`
  position: absolute;
  right: 1rem;
  display: flex;
`;

export const EditInput = styled.input`
  background-color: #efefef;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

export const TaskHeaderLeftContainer = styled.div`
  width: 70%;
`;

export const DaysContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.6em;
`;
