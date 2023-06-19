import styled from "styled-components";

export const Note = styled.input`
  background-color: ${(props) =>
    props.color == "" ? "gray" : props.isCorrect ? "#fffcfc" : "#f78989"};
  width: 70px;
  height: 40px;
  color: black;
  border: ${(props) => props.beat % 4 == 0 ? "2px solid #b1b1f9" : "none"};
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  font-size: 1.5rem;

  &&:focus {
    background-color: ${(props) => (props.isCorrect ? "white" : "#f78989")};
  }
`;

export const Button = styled.button`
  background-color: ${(props) => (props.current == props.number ? "#9f9d9d" : "black")};
  width: 75px;
  height: 40px;
  text-align:center;
  border: none;
  outline: none;

  &&:focus {
    border: none;
  outline: none;
  }
`;
