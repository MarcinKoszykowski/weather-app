import React, { useContext, useState, useEffect, useCallback } from 'react';
import AppContext from 'context';
import axios from 'axios';
import url from 'data/url';
import { routes } from 'data/value';
import DetailsTemplate from 'templates/DetailsTemplate';
import Loading from 'components/molecules/Loading';
import Header from 'components/organisms/Header';
import Error from 'components/molecules/Error';

function Details() {
  const [open, setOpen] = useState(false);
  const { handleSetCurrent, handleSetData, handleSetDaily, city, error } = useContext(AppContext);

  const { main: mainRoute } = routes;
  const { current: currentURL, daily: dailyURL } = url;

  const getDataFromAPI = async urlAPI => {
    try {
      const response = await axios.get(urlAPI(city));
      const responseData = await response.data;
      return responseData;
    } catch (err) {
      console.error(err);
    }
    return null;
  };
  const getCurrent = async () => {
    const current = await getDataFromAPI(currentURL);
    const currentData = await current.data[0];
    await handleSetCurrent(currentData);
  };

  const getDaily = async () => {
    const daily = await getDataFromAPI(dailyURL);
    const dailyData = await daily.data;

    await handleSetData(dailyData[0]);
    dailyData.shift();
    await handleSetDaily(dailyData);
  };

  const checkCityState = async () => {
    if (city === '') {
      window.location.href = mainRoute;
    } else {
      setOpen(false);
      await getDaily();
      await getCurrent();
      setOpen(true);
    }
  };

  const handleCityStateCallback = useCallback(checkCityState, [city]);

  useEffect(() => {
    handleCityStateCallback();
  }, [handleCityStateCallback]);

  return (
    <section>
      {error && <Error details />}
      <Header />
      {open ? <DetailsTemplate /> : <Loading />}
    </section>
  );
}

export default Details;
