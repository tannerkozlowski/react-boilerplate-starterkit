import React, { Component } from 'react';
import { compose } from 'redux';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import NavigationBar from 'containers/NavigationBar';
import Footer from 'containers/Footer';
import NotFound from 'containers/NotFound';
import ScrollToTop from 'components/ScrollToTop';

import HomePage from 'modules/home';

import injectSaga from 'utils/injectSaga';

import saga from './redux/saga';

class App extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
        >
          <meta name="description" content="A React.js Boilerplate application" />
        </Helmet>
        <header id="page-header">
          <NavigationBar />
        </header>
        <div id="page-content">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/404" component={NotFound} />
            <Route render={() => <Redirect to="/404" />} />
          </Switch>
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    );
  }
}

const withSaga = injectSaga({ key: 'global', saga });

export default compose(
  withSaga,
  withRouter,
)(App);
