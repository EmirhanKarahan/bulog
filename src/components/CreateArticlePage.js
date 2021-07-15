import React from "react";
import { connect } from "react-redux";
import { startAddArticle } from "../actions/articles";
import ArticleForm from "./ArticleForm";

const CreateArticlePage = (props) => {
  const onSubmit = (article) => {
    props.dispatch(startAddArticle(article));
  };

  return (
    <div className="content-container">
      <h1>Create your article</h1>
      <ArticleForm onSubmit={onSubmit}></ArticleForm>
    </div>
  );
};

export default connect()(CreateArticlePage);