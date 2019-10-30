import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from 'styled/GlobalStyle';
import { routes } from 'data/value';
import AppContext from 'context';
import Main from 'views/Main';
import Details from 'views/Details';
import Background from '../components/Background/Background';

const Root = () => {
  const [data, setData] = useState({});
  const [current, setCurrent] = useState({});
  const [daily, setDaily] = useState([]);
  const [error, setError] = useState(false);
  const [city, setCity] = useState('');

  const contextElement = {
    current,
    daily,
    data,
    error,
    setError,
    setCity,
    setCurrent,
    setData,
    setDaily,
    city,
  };

  return (
    <AppContext.Provider value={contextElement}>
      <BrowserRouter>
        <GlobalStyle />
        <Background />
        <Switch>
          <Route exact path={routes.main} component={Main} />
          <Route path={routes.details} component={Details} />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default Root;
