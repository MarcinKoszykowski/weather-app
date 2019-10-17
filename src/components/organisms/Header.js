import React from 'react';
import styled from 'styled-components';
import FormMain from 'components/molecules/FormMain';
import HeaderTitle from 'components/molecules/HeaderTitle';

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
    <HeaderTitle />
    <FormMain open />
  </Wrapper>
);

export default Header;
