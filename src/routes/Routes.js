// index for router
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  AboutMe, Contact, Projects, Tech,
} from '../views';
// import PropTypes from 'prop-types';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={AboutMe} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/tech" component={Tech} />
      <Route exact path="/projects" component={Projects} />
    </Switch>
  );
}

Routes.propTypes = {};
