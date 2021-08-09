import React from "react";
import { connect } from "react-redux";
import ArticlePreview from "./ArticlePreview";

export const ArticleList = ({ editable, articles }) => {
  return articles.length > 0 ? articles.map((article) => (
    <ArticlePreview editable={editable} key={article.id} {...article} />
  )) : <div className="content-container">There is no article 😔 Please, add one 😁</div>;
};

const mapStateToProps = (state, props) => {
  return {
    //should be changed to a new solution - not a problem for firebase
    articles: props.editable
      ? state.articles.map((article) => {
          if (state.auth.username == article.author) return article;
        })
      : state.articles,
  };
};

export default connect(mapStateToProps)(ArticleList);
