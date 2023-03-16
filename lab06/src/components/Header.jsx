import React from "react";
import { HeaderButton, HeaderContainer } from "./Header.styled";

const HeaderOne = ({ user, setUser }) => {
  return (
    <HeaderContainer>
      Welcome, {user}
      <HeaderButton onClick={() => setUser('')}>Logout</HeaderButton>
    </HeaderContainer>
  );
};

export default HeaderOne;
