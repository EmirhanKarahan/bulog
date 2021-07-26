import React from "react";
import { connect } from "react-redux";
import { startAddArticle } from "../actions/articles";
import CreateArticleForm from "./CreateArticleForm";

const CreateArticlePage = (props) => {
  const onSubmit = (article) => {
    props.dispatch(startAddArticle(article));
  };

  return (
    <div className="content-container">
      <h1>Create your article</h1>
      <CreateArticleForm onSubmit={onSubmit}></CreateArticleForm>
    </div>
  );
};

export default connect()(CreateArticlePage);