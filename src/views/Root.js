import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from 'styled/GlobalStyle';
import Main from 'views/Main';
import { routes } from 'data/value';

function Root() {
  const { main: mainRoute } = routes;
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path={mainRoute} component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default Root;
