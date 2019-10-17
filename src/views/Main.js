import React, { useContext } from 'react';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate';
import AppContext from 'context';
import Error from 'components/molecules/Error';

const Section = styled.section`
  align-items: center;
  padding-top: 20vh;
`;

function Main() {
  const { error } = useContext(AppContext);

  return (
    <Section>
      <MainTemplate />
      {error && <Error />}
    </Section>
  );
}

export default Main;
