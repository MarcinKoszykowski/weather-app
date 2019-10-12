import React from 'react';
import styled from 'styled-components';
import CreatedLink from 'components/atoms/Created/CreatedLink';
import CreatedText from 'components/atoms/Created/CreatedText';
import { created } from 'data/value';

const { href, text, link } = created;
const Wrapper = styled.div`
  text-align: center;
  padding: 10px 0 15px;
  font-size: 0.9rem;
  transition: font-size 0.2s;

  @media screen and (max-width: 850px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.7rem;
  }
`;

const Created = () => (
  <Wrapper>
    <CreatedText>{text}</CreatedText>
    <CreatedLink rel="noopener noreferrer" target="_blank" href={href}>
      {link}
    </CreatedLink>
  </Wrapper>
);

export default Created;
