import React from "react";

export default function ArticlePreview() {
  return (
    <article className="article-preview">
      <div className="content-container">
        <div className="article-preview__content">
          <div className="article-preview__meta">
            <span className="article-preview__author">Emirhan KARAHAN</span>
            <h2 className="article-preview__title">
              Lorem ipsum dolor sit amet.
            </h2>
            <h4 className="article-preview__sub-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              molestias deserunt eum suscipit, neque est ex.
            </h4>
            <span className="article-preview__date">Jun 26 - 2020</span>
          </div>

          <img src="/images/image.png" className="article-preview__image" />
        </div>
      </div>
    </article>
  );
}
