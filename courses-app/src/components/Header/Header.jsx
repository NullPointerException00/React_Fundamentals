/* eslint-disable react/prop-types */
import React from "react";
import Styled from "styled-components";
import { Button } from "../../common/Button/Button";
import logo from "../../Courses.jpg";

const HeaderContainer = Styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid orange;
  width: 90%;
  height: 50px;
  margin: auto;
  align-items: center;
`;
const UserControl = Styled.div`
`;
const LogoutButton = Styled(Button)`
margin-right:10px;
`;
const Img = Styled.img`
width: 30px;
height: 30px;
padding: 10px;
`;

function Header(props) {
  const { onLogout = () => {} } = props;
  return (
    <HeaderContainer>
      <Img src={logo}></Img>
      <UserControl>
        Dave
        <LogoutButton text="Logout" type="primary" onClick={onLogout} />
      </UserControl>
    </HeaderContainer>
  );
}

export default Header;
