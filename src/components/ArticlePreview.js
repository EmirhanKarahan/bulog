import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import {startRemoveArticle } from "../actions/articles"

function ArticlePreview({
  id,
  author,
  title,
  subtitle,
  date,
  imageUrl,
  ...rest
}) {
  return (
    <article className="article-preview">
      <div className="content-container">
        <div className="article-preview__content">
          <div className="article-preview__meta">
            <span className="article-preview__author">{author}</span>
            <h2 className="article-preview__title">{title}</h2>
            <Link to={`/read/${id}`}> <h3>tamamını oku</h3>
               </Link>
            <Link to={`/edit/${id}`}> <h3>editle</h3>
               </Link>
        <button onClick={()=>{rest.dispatch(startRemoveArticle({ id }));}}>
    Sil
        </button>
               
            <h4 className="article-preview__subtitle">{subtitle}</h4>
            <span className="article-preview__date">
              {moment(date).format("MMMM Do, YYYY")}
            </span>
          </div>
          <img src={imageUrl} className="article-preview__image" />
        </div>
      </div>
    </article>
  );
}

export default connect()(ArticlePreview)