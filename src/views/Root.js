import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from 'styled/GlobalStyle';
import AppContext from 'context';
import Main from 'views/Main';
import { routes } from 'data/value';
import url from 'data/url';

function Root() {
  const { main: mainRoute } = routes;
  const { current: currentURL, daily: dailyURL } = url;

  const [data, setData] = useState({});
  const [current, setCurrent] = useState({});
  const [daily, setDaily] = useState([]);
  const [error, setError] = useState(false);

  const getCurrentFromApi = city => {
    fetch(currentURL(city), {
      method: 'GET',
    }).then(response => {
      if (response.status !== 200) {
        setError(true);
        setTimeout(() => setError(false), 2500);
      } else {
        response.json().then(responseJSON => {
          const currentData = responseJSON.data[0];
          setCurrent(currentData);
          setError(false);
        });
      }
    });
  };

  const getDailyFromApi = city => {
    fetch(dailyURL(city), {
      method: 'GET',
    })
      .then(response => {
        if (response.status !== 200) {
          setError(true);
          setTimeout(() => setError(false), 2500);
        } else {
          response.json().then(responseJSON => {
            const responseData = responseJSON.data[0];
            const responseDaily = responseJSON.data;
            setData(responseData);
            responseDaily.shift();
            setDaily(responseDaily);
            setError(false);
            getCurrentFromApi(city);
          });
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  const contextElement = {
    current,
    daily,
    data,
    getDailyFromApi,
    error,
  };

  return (
    <AppContext.Provider value={contextElement}>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route exact path={mainRoute} component={Main} />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default Root;
