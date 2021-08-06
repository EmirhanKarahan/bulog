import React from "react";
import { Router, Route, Switch} from "react-router-dom";
import { createBrowserHistory, createMemoryHistory } from "history";

import Article from "../components/Article";
import ArticleDashboardPage from "../components/ArticleDashboardPage";
import CreateArticlePage from "../components/CreateArticlePage";
import EditArticlePage from "../components/EditArticlePage";
import EditArticleDashboardPage from "../components/EditArticleDashboardPage"
import NotFoundPage from "../components/NotFoundPage";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const history = process.env.NODE_ENV == "test" ? createMemoryHistory() : createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Header></Header>
    <Switch>
      <Route exact path="/" component={ArticleDashboardPage} />
      <Route path="/read/:id" component={Article} />
      <Route path="/create" component={CreateArticlePage} />
      <Route exact path="/edit" component={EditArticleDashboardPage} />
      <Route path="/edit/:id" component={EditArticlePage} />
      <Route component={NotFoundPage} />
    </Switch>
    <Footer></Footer>
  </Router>
);

export default AppRouter;
