import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from 'styled/GlobalStyle';
import AppContext from 'context';
import axios from 'axios';
import Main from 'views/Main';
import Details from 'views/Details';
import { routes } from 'data/value';
import url from 'data/url';

function Root() {
  const { main: mainRoute, details: detailsRoute } = routes;
  const { daily: dailyURL } = url;

  const [data, setData] = useState({});
  const [current, setCurrent] = useState({});
  const [daily, setDaily] = useState([]);
  const [error, setError] = useState(false);
  const [city, setCity] = useState('');

  const toggleError = () => {
    setError(true);
    setTimeout(() => setError(false), 2500);
  };

  const handleMainOnSubmit = async (cityValue, history) => {
    try {
      const response = await axios.get(dailyURL(cityValue));
      if (response.status !== 200) {
        toggleError();
      } else {
        setCity(cityValue);
        history.push(detailsRoute);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSetCurrent = value => {
    setCurrent(value);
  };

  const handleSetData = value => {
    setData(value);
  };

  const handleSetDaily = value => {
    setDaily(value);
  };

  const contextElement = {
    current,
    daily,
    data,
    error,
    handleSetCurrent,
    handleSetData,
    handleSetDaily,
    handleMainOnSubmit,
    city,
  };

  return (
    <AppContext.Provider value={contextElement}>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route exact path={mainRoute} component={Main} />
          <Route path={detailsRoute} component={Details} />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default Root;
