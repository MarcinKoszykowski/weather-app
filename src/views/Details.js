import React, { useContext, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import AppContext from 'context';
import { routes } from 'data/value';
import { getData } from 'data/helpers';
import DetailsTemplate from 'templates/DetailsTemplate';
import Loading from 'components/Loading/Loading';
import Header from 'components/Header/Header';
import Error from 'components/Error/Error';

const Wrapper = styled.section`
  max-width: 1600px;
  margin: 0 auto;
`;
const Details = () => {
  const [open, setOpen] = useState(false);
  const { setCurrent, setData, setDaily, city } = useContext(AppContext);

  const checkCityState = async () => {
    if (city === '') {
      window.location.href = routes.main;
    } else {
      setOpen(false);
      await getData(city, setCurrent, setData, setDaily);
      setOpen(true);
    }
  };

  const handleCityState = useCallback(checkCityState, [city]);

  useEffect(() => {
    handleCityState();
  }, [handleCityState]);

  return (
    <Wrapper>
      <Error details />
      <Header />
      {open ? <DetailsTemplate /> : <Loading />}
    </Wrapper>
  );
};

export default Details;
