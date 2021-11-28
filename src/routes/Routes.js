// index for router
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AboutMe, Contact, Projects, Tech,
} from '../views';
import ProjectsForm from '../components/ProjectsForm';
import Edit from '../views/Edit';

export default function Routes({ user }) {
  // const isAdmin = firebaseConfig.adminUID;

  // need to figure out how to implement the isAdmin aspect

  return (
    <Switch>
      <Route exact path="/" component={AboutMe} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/tech" component={Tech} />
      {user ? (
        <>
          <Route exact path="/projects">
            <Projects user={user} />
          </Route>
          {/* <Projects exact path="/projects" user={user} /> */}
          <Route exact path="/edit/:fbKey">
            <Edit user={user} />
          </Route>
          {/* <Edit exact path="/edit/:fbKey" /> */}
          <Route exact path="/projectsForm">
            <ProjectsForm user={user} />
          </Route>
          {/* <ProjectsForm exact path="/projectsForm" user={user} /> */}
        </>
      ) : (
        <Route exact path="/projects">
          <Projects />
        </Route>
      )}
      {/* <Route exact path="/projects">
        <Projects user={user} />
      </Route>
      {user ? <ProjectsForm exact path="/projectsForm" user={user} /> : ''} */}
    </Switch>
  );
}

Routes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

Routes.defaultProps = { user: null };
