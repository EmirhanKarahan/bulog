import React, { Suspense } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory, createMemoryHistory } from "history";

import Header from "../components/Header";
import ArticleDashboardPage from "../components/ArticleDashboardPage";
import Footer from "../components/Footer";
import PrivateRoute from "./PrivateRoute";
import LoadingPage from "../components/LoadingPage";

const CreateArticlePage = React.lazy(() =>
  import("../components/CreateArticlePage")
);
const EditArticlePage = React.lazy(() =>
  import("../components/EditArticlePage")
);
const EditArticleDashboardPage = React.lazy(() =>
  import("../components/EditArticleDashboardPage")
);
const NotFoundPage = React.lazy(() => import("../components/NotFoundPage"));
const Article = React.lazy(() => import("../components/Article"));

export const history =
  process.env.NODE_ENV == "test"
    ? createMemoryHistory()
    : createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Suspense fallback={<LoadingPage/>}>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={ArticleDashboardPage} />
        <Route path="/read/:id" component={Article} />
        <PrivateRoute path="/create" component={CreateArticlePage} />
        <PrivateRoute exact path="/edit" component={EditArticleDashboardPage} />
        <PrivateRoute path="/edit/:id" component={EditArticlePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer></Footer>
    </Suspense>
  </Router>
);

export default AppRouter;
