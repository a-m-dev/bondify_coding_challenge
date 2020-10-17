import React from "react";

import Search from "../Search";

import { HeadingWrapper, Title } from "./styled";

const Header: React.FC = () => {
  return (
    <HeadingWrapper>
      <Title>Cryptocurrency Market</Title>
      <Search />
    </HeadingWrapper>
  );
};

export default Header;
