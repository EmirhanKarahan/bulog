import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import {createBrowserHistory} from 'history';

import ArticleDashboardPage from "../components/ArticleDashboardPage"
import CreateArticlePage from "../components/CreateArticlePage"
import EditArticlePage from '../components/EditArticlePage';
import NotFoundPage from '../components/NotFoundPage';
import Footer from '../components/Footer';
import Header from '../components/Header';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={ArticleDashboardPage} />
          <Route path="/create" component={CreateArticlePage} />
          <Route path="/edit" component={EditArticlePage} />
          <Route component={NotFoundPage} /> *
        </Switch>
        <Footer></Footer>
    </Router>
  );
  
  export default AppRouter;