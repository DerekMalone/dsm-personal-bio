// index for router
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutMe from '../views/AboutMe';
// import PropTypes from 'prop-types';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={AboutMe} />
    </Switch>
  );
}

Routes.propTypes = {};
