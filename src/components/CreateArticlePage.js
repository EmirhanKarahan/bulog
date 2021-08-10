import React from "react";
import { connect } from "react-redux";
import { startAddArticle } from "../actions/articles";
import CreateArticleForm from "./CreateArticleForm";

export const CreateArticlePage = (props) => {
  const onSubmit = (article) => {
    props.onSubmit(article);
  };

  return (
    <div className="content-container">
      <h1>Create your article</h1>
      <CreateArticleForm onSubmit={onSubmit}></CreateArticleForm>
    </div>
  );
};

const mapDispatchToProps = (dispatch) =>{
  return {
    onSubmit : (article) => dispatch(startAddArticle(article))
  }
}

export default connect(undefined, mapDispatchToProps)(CreateArticlePage);