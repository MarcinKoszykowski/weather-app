import React from 'react';
import styled from 'styled-components';
import { routes, title } from 'data/value';
import Form from 'components/Form/Form';
import Title from './atoms/Title';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 40px 5px;

  @media screen and (max-width: 1250px) {
    margin: 20px 30px 5px;
  }
  @media screen and (max-width: 900px) {
    margin: 20px 0;
  }
`;

const Header = () => (
  <Wrapper>
    <Title href={routes.main}>{title}</Title>
    <Form open />
  </Wrapper>
);

export default Header;
