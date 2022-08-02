import React from "react";
import styled from "styled-components";
const StyledButton = styled.button`
  height: 100px;
  width: 305px;
  border: 2px solid black;
  background-color: #ffef82;
  font-size: 25px;
  font-weight: 700;
`;
function SIButton(props) {
  return <StyledButton>{props.text}</StyledButton>;
}
export default SIButton;
