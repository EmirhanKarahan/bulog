import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { Redirect } from "react-router-dom";

const Article = ({ article }) => {
  return article ? (
    <article className="article">
      <div className="content-container">
        <div className="article__content">
          <img src={article.imageUrl} className="article__image" />
          <div className="article__meta">
            <h2 className="article__title">{article.title}</h2>
            <h4 className="article__subtitle">{article.subtitle}</h4>
            <div className="article__text">{article.content}</div>
            <span className="article__author">{article.author}</span>
            <span className="article__date">
              {moment.unix(article.date).format("MMMM Do, YYYY")}
            </span>
          </div>
        </div>
      </div>
    </article>
  ) : (
    <Redirect to="/404"></Redirect>
  );
};

const mapStateToProps = (state, props) => {
  return {
    article: state.articles.find(
      (article) => article.id === props.match.params.id
    ),
  };
};

export default connect(mapStateToProps)(Article);
