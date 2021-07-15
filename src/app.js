import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import AppRouter from "./routers/AppRouter";
import { startSetArticles } from "./actions/articles";
import "./firebase/firebase"
import moment from "moment";
import "normalize.css";
import "./styles/styles.scss";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

store.dispatch(startSetArticles()).then(()=>{
  ReactDOM.render(jsx, document.getElementById("app"));
})
