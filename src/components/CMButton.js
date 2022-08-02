import React from "react";
import styled from "styled-components";
const StyledButton = styled.button`
  height: 50px;
  width: 100px;
  border-radius: 10px;
  border: 2px solid black;
  background-color: #ffef82;
  font-size: 25px;
  font-weight: 700;
`;
function CMButton(props) {
  return <StyledButton>{props.text}</StyledButton>;
}
export default CMButton;
