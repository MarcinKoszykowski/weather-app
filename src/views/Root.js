import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from 'styled/GlobalStyle';
import AppContext from 'context';
import Main from 'views/Main';
import Details from 'views/Details';
import { routes } from 'data/value';
import url from 'data/url';

function Root() {
  const { main: mainRoute, details: detailsRoute } = routes;
  const { current: currentURL, daily: dailyURL } = url;

  const [data, setData] = useState({});
  const [current, setCurrent] = useState({});
  const [daily, setDaily] = useState([]);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleError = () => {
    setError(true);
    setTimeout(() => setError(false), 2500);
  };

  const getCurrentFromApi = async city => {
    try {
      const response = await fetch(currentURL(city), {
        method: 'GET',
      });

      if (response.status !== 200) {
        toggleError();
      } else {
        const responseJSON = await response.json();
        const currentData = await responseJSON.data[0];

        setCurrent(currentData);
        setError(false);
        setOpen(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getDailyFromApi = async city => {
    try {
      const response = await fetch(dailyURL(city), {
        method: 'GET',
      });
      if (response.status !== 200) {
        toggleError();
      } else {
        const responseJSON = await response.json();
        const dailyData = await responseJSON.data;

        setData(dailyData[0]);
        dailyData.shift();
        setDaily(dailyData);
        setError(false);

        getCurrentFromApi(city);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const contextElement = {
    current,
    daily,
    data,
    getDailyFromApi,
    error,
    open,
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
