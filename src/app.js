import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./configureStore";
import AppRouter, { history } from "./routers/AppRouter";
import LoadingPage from "./components/LoadingPage";
import { startSetArticles } from "./actions/articles";
import firebase from "./firebase/firebase";
import { login, logout } from "./actions/auth";

import "normalize.css";
import "./styles/styles.scss";


const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;

if (!hasRendered) {
  store.dispatch(startSetArticles()).then(() => {
    ReactDOM.render(jsx, document.getElementById("app"));
  });
  hasRendered = true;
}

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user));
    console.log("log in");
  } else {
    history.push("/");
    store.dispatch(logout());
    console.log("log out");
  }
});
