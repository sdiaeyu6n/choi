import React from "react";
import "./Dropdown.css";
import Dropdown from "./Dropdown";
import styled from "styled-components";

const DropDown2 = (props) => {
  const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
  const StyledButton = styled.button`
    height: 100px;
    width: 305px;
    border: 2px solid black;
    background-color: #ffef82;
    font-size: 25px;
    font-weight: 700;
  `;

  return (
    <div id="Dropdown2">
      <StyledButton onClick={(e) => setDropdownVisibility(!dropdownVisibility)}>
        {dropdownVisibility ? "메뉴 목록 닫기" : "메뉴 목록 열기"}
      </StyledButton>
      <Dropdown visibility={dropdownVisibility}>
        <ul>
          <li>주문했던 메뉴</li>
          <li>대표 메뉴</li>
          <li>세트 메뉴</li>
          <li>단품 메뉴</li>
          <li>사이드</li>
          <li>음료</li>
        </ul>
      </Dropdown>
    </div>
  );
};

export default DropDown2;
