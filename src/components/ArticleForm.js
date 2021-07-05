import React from "react";
import { Form, Field, withFormik } from "formik";
import AutoSizeTextArea from "react-textarea-autosize";
import * as Yup from "yup";

function ArticleForm({ values, errors, touched, isSubmitting }) {
  return (
    <Form className="article-form">
      <div className="article-form__error-area">
        {Object.keys(touched).map((field) => {
          if (errors[field]) {
            return (
              <span key={field} className="error-msg">
                {errors[field]}
              </span>
            );
          }
        })}
      </div>
      <Field
        type="text"
        name="title"
        className="text-input text-input--title"
        placeholder="Title"
        autoFocus
      />
      <Field
        type="text"
        name="subtitle"
        className="text-input text-input--subtitle"
        placeholder="Subtitle"
      />
      <Field
        as={AutoSizeTextArea}
        name="content"
        className="text-input text-input--content"
        placeholder="Your unique blog"
      />
      <label className="file-input__label mb-1">
        {values.image ? values.image.split("\\").slice(-1) : "Choose an image"}
        <Field
          type="file"
          name="image"
          accept=".jpeg, .jpg, .jfif, .webp., .png"
          className="file-input"
        />
      </label>
      <button
        disabled={isSubmitting}
        type="submit"
        className="button button--secondary mb-2"
      >
        Submit
      </button>
    </Form>
  );
}

const ArticleFormik = withFormik({
  mapPropsToValues({ title, subtitle, content, image }) {
    return {
      title: title || "",
      subtitle: subtitle || "",
      content: content || "",
      image: image || "",
    };
  },
  validationSchema: Yup.object().shape({
    title: Yup.string().min(2).max(10).required(),
    subtitle: Yup.string().min(2).max(10).required(),
    content: Yup.string().min(2).required(),
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    console.log(values);
    setSubmitting(false);
    resetForm();
  },
})(ArticleForm);

export default ArticleFormik;
