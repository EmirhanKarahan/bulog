import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startRemoveArticle } from "../actions/articles";

function ArticlePreview({
  id,
  author,
  title,
  subtitle,
  date,
  imageUrl,
  editable,
  ...rest
}) {
  return (
    <article className="article-preview">
      <div className="content-container">
        <div className="article-preview__content">
          <div className="article-preview__meta">
            <Link className="url-link" to={`/read/${id}`}>
              <h2 className="article-preview__title">{title}</h2>
              <h4 className="article-preview__subtitle">{subtitle}</h4>
            </Link>

            <span className="article-preview__author">{author}</span>
            <span className="article-preview__date">
              {moment(date).format("MMMM Do, YYYY")}
            </span>
          </div>

          <div className="article-preview__right">
            <Link className="url-link" to={`/read/${id}`}>
              <img
                src={imageUrl}
                to={`/read/${id}`}
                className="article-preview__image"
              />
            </Link>

            {editable ? (
              <div className="article-preview__right__toolbox">
                <Link className="url-link" to={`/edit/${id}`}>
                  <img
                    src="/images/gear.svg"
                    height="20px"
                    width="20px"
                    alt=""
                  />
                  <b>Edit</b>
                </Link>
                <button
                  className="button button--danger"
                  onClick={() => {
                    rest.dispatch(startRemoveArticle({ id }));
                  }}
                >
                  Delete
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default connect()(ArticlePreview);
