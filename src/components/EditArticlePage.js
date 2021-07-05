import React from "react";
import ArticleFormik from "./ArticleForm";

export default function EditArticlePage() {
  return (   
    <div className="content-container">
      <h1>Edit your article</h1>
      <ArticleFormik></ArticleFormik>
    </div>
  );
}
