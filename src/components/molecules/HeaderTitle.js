import React from 'react';
import styled from 'styled-components';
import { routes, title } from 'data/value';
import Title from 'components/atoms/Title';

const TitleStyled = styled(Title)`
  margin: 0;

  @media screen and (max-width: 1450px) {
    font-size: 3.6rem;
  }
  @media screen and (max-width: 1250px) {
    font-size: 3.2rem;
  }
  @media screen and (max-width: 1150px) {
    font-size: 2.8rem;
  }
  @media screen and (max-width: 1000px) {
    font-size: 2.4rem;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const { main } = routes;

const HeaderTitle = () => (
  <a href={main}>
    <TitleStyled>{title}</TitleStyled>
  </a>
);

export default HeaderTitle;
