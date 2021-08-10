import React from "react";
import { Form, Field, withFormik } from "formik";
import AutoSizeTextArea from "react-textarea-autosize";
import * as Yup from "yup";

export function CreateArticleForm({
  values,
  errors,
  touched,
  isSubmitting,
  setFieldValue,
}) {
  return (
    <Form className={"create-article-form"}>
      {isSubmitting && (
        <img className="spinner" src="/images/spinner.svg" alt="spinner" />
      )}
      <div className="error-area">
        {touched &&
          Object.keys(touched).map((field) => {
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
        disabled={isSubmitting}
        className="text-input text-input--title"
        placeholder="Title"
        autoFocus
      />
      <Field
        type="text"
        name="subtitle"
        disabled={isSubmitting}
        className="text-input text-input--subtitle"
        placeholder="Subtitle"
      />
      <Field
        as={AutoSizeTextArea}
        name="content"
        disabled={isSubmitting}
        className="text-input text-input--content"
        placeholder="Your unique blog post"
      />
      <label className="file-input__label mb-1">
        {values?.image ? values.image.name : "Choose an image"}
        <input
          type="file"
          name="image"
          disabled={isSubmitting}
          accept=".jpeg, .jpg, .jfif, .webp., .png"
          className="file-input"
          onChange={(event) => {
            setFieldValue("image", event.target.files[0]);
          }}
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

const CreateArticleFormik = withFormik({
  mapPropsToValues({ title, subtitle, content, image }) {
    return {
      title: title || "",
      subtitle: subtitle || "",
      content: content || "",
      image: image || undefined,
    };
  },
  validationSchema: Yup.object().shape({
    title: Yup.string().min(10).max(80).required(),
    subtitle: Yup.string().min(15).max(100).required(),
    content: Yup.string().min(100).required(),
    image: Yup.mixed().required(),
  }),
  handleSubmit(values, { resetForm, props }) {
    props.onSubmit(values);
  },
})(CreateArticleForm);

export default CreateArticleFormik;
