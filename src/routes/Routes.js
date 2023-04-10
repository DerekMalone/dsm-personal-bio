// index for router
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
// eslint-disable-next-line object-curly-newline
import { AboutMe, Contact, Projects, Tech, Admin } from '../views';
// import ProjectsForm from '../components/ProjectsForm';
import Edit from '../views/Edit';

// TODO: need to set up custom claims, link on Initialize.index.js on how to. Then see Fixme below.
export default function Routes({ user }) {
  return (
    <Switch>
      <Route exact path="/" component={AboutMe} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/tech" component={Tech} />
      {/* FIXME: Need to add .isAdmin to check below */}
      {user !== null ? (
        <>
          <Route exact path="/projects">
            <Projects user={user} />
          </Route>
          <Route exact path="/edit/:fbKey">
            <Edit user={user} />
          </Route>
          <Route exact path="/admin">
            <Admin user={user} />
          </Route>
        </>
      ) : (
        <Route exact path="/projects">
          <Projects />
        </Route>
      )}
    </Switch>
  );
}

Routes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

Routes.defaultProps = { user: null };
