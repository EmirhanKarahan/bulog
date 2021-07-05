import React from "react";
import ArticleFormik from "./ArticleForm";

export default function CreateArticlePage() {
  return (
    <div className="content-container">
      <h1>Create your article</h1>
      <ArticleFormik></ArticleFormik>
    </div>
  );
}
