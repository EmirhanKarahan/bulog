import moment from "moment";
import { toast } from "react-toastify";
import { history } from "../routers/AppRouter";
import {
  addArticleFirebase,
  deleteImageFirebase,
  editArticleFirebase,
  getArticleByIdFirebase,
  getArticlesAllFirebase,
  removeArticleFirebase,
  uploadImageFirebase,
} from "../firebase/utils";

export const addArticle = (article) => {
  return {
    type: "ADD_ARTICLE",
    article,
  };
};

export const startAddArticle = (articleData = {}) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const username = getState().auth.username;
    const {
      title = "",
      subtitle = "",
      content = "",
      image = undefined,
      date = moment().unix(),
      author = username,
    } = articleData;

    const imageUrl = await uploadImageFirebase(image);
    const article = { author, title, subtitle, content, date, imageUrl };
    try {
      const ref = await addArticleFirebase(uid, article);
      dispatch(addArticle({ id: ref.key, ...article }));
    } catch (err) {
      if (err.code == "PERMISSION_DENIED") toast.error("🙄 Temporarily closed");
      else {
        toast.error("Firebase error 😥");
      }
    } finally {
      history.push("/");
    }
  };
};

export const editArticle = (id, updates) => ({
  type: "EDIT_ARTICLE",
  id,
  updates,
});

export const startEditArticle = (
  id,
  { title, subtitle, content, image, imageUrl }
) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    if (image) {
      await deleteImageFirebase(imageUrl);
      imageUrl = await uploadImageFirebase(image);
    }
    const updates = { title, subtitle, content, imageUrl };

    try {
      await editArticleFirebase(uid, id, updates);
      dispatch(editArticle(id, updates));
    } catch (err) {
      if (err.code == "PERMISSION_DENIED") toast.error("🙄 Temporarily closed");
      else {
        toast.error("Firebase error 😥");
      }
    } finally {
      history.push(`/read/${id}`);
    }
  };
};

export const removeArticle = ({ id } = {}) => ({
  type: "REMOVE_ARTICLE",
  id,
});

export const startRemoveArticle = ({ id } = {}) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const snapshot = await getArticleByIdFirebase(uid, id);
    const imageUrl = snapshot.val().imageUrl;
    try {
      await removeArticleFirebase(uid, id);
      dispatch(removeArticle({ id }));
      await deleteImageFirebase(imageUrl);
    } catch (err) {
      if (err.code == "PERMISSION_DENIED") toast.error("🙄 Temporarily closed");
      else {
        toast.error("Firebase error 😥");
      }
    }
  };
};

export const setArticles = (articles) => ({
  type: "SET_ARTICLES",
  articles,
});

export const startSetArticles = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const firebaseArticles = await getArticlesAllFirebase(uid);
    const articles = [];
    for (const articleKey in firebaseArticles) {
      articles.push({ id: articleKey, ...firebaseArticles[articleKey] });
    }
    dispatch(setArticles(articles));
  };
};
