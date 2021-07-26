import moment from "moment";
import { history } from "../routers/AppRouter";
import {
  addArticleFirebase,
  deleteImageFirebase,
  editArticleFirebase,
  getArticleByIdFirebase,
  getArticlesFirebase,
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
  return async (dispatch) => {
    const {
      title = "",
      subtitle = "",
      content = "",
      image = undefined,
      date = moment().unix(),
    } = articleData;

    const imageUrl = await uploadImageFirebase(image);
    const article = { title, subtitle, content, date, imageUrl };
    const ref = await addArticleFirebase(article);
    dispatch(addArticle({ id: ref.key, ...article }));
    history.push("/");
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
  return async (dispatch) => {
    if (image) {
      await deleteImageFirebase(imageUrl);
      imageUrl = await uploadImageFirebase(image);
    }
    const updates = { title, subtitle, content, imageUrl };
    await editArticleFirebase(id, updates);
    dispatch(editArticle(id, updates));
    history.push(`/read/${id}`);
  };
};

export const removeArticle = ({ id } = {}) => ({
  type: "REMOVE_ARTICLE",
  id,
});

export const startRemoveArticle = ({ id } = {}) => {
  return async (dispatch, getState) => {
    dispatch(removeArticle({ id }));
    const snapshot = await getArticleByIdFirebase(id);
    const imageUrl = snapshot.val().imageUrl;
    await deleteImageFirebase(imageUrl);
    await removeArticleFirebase(id);
  };
};

export const setArticles = (articles) => ({
  type: "SET_ARTICLES",
  articles,
});

export const startSetArticles = () => {
  return async (dispatch, getState) => {
    const snapshot = await getArticlesFirebase();
    const articles = [];
    snapshot.forEach((childSnapshot) => {
      articles.push({ id: childSnapshot.key, ...childSnapshot.val() });
    });
    dispatch(setArticles(articles));
  };
};
