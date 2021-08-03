import moment from "moment";
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
      author = username
    } = articleData;

    const imageUrl = await uploadImageFirebase(image);
    const article = { author, title, subtitle, content, date, imageUrl};
    const ref = await addArticleFirebase(uid, article);
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
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    if (image) {
      await deleteImageFirebase(imageUrl);
      imageUrl = await uploadImageFirebase(image);
    }
    const updates = { title, subtitle, content, imageUrl };
    await editArticleFirebase(uid, id, updates);
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
    const uid = getState().auth.uid;
    dispatch(removeArticle({ id }));
    const snapshot = await getArticleByIdFirebase(uid, id);
    const imageUrl = snapshot.val().imageUrl;
    await deleteImageFirebase(imageUrl);
    await removeArticleFirebase(uid, id);
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
    for(const articleKey in firebaseArticles){
      articles.push({id:articleKey, ...firebaseArticles[articleKey]})
    }
    dispatch(setArticles(articles));
  };
};
