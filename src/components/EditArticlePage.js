import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import ArticleForm from "./ArticleForm";
import { startEditArticle } from "../actions/articles";

const EditArticlePage = (props) => {
  const onSubmit = (updatedArticle) => {
    props.dispatch(startEditArticle(props.article.id, updatedArticle));
    props.history.push(`/read/${props.article.id}`);
  };

  return props.article ? (
    <div className="content-container">
      <h1>Edit your article</h1>
      <ArticleForm onSubmit={onSubmit} {...props.article}></ArticleForm>
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