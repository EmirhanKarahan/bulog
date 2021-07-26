import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import EditArticleForm from "./EditArticleForm";
import { startEditArticle } from "../actions/articles";

const EditArticlePage = (props) => {
  const onSubmit = (updatedArticle) => {
    props.dispatch(startEditArticle(props.article.id, updatedArticle));
  };

  return props.article ? (
    <div className="content-container">
      <h1>Edit your article</h1>
      <EditArticleForm onSubmit={onSubmit} {...props.article}></EditArticleForm>
    </div>
  ) : (
    <Redirect to="/404" />
  );
};

const mapStateToProps = (state, props) => {
  return {
    article: state.articles.find(
      (article) => article.id === props.match.params.id
    ),
  };
};

export default connect(mapStateToProps)(EditArticlePage);