import moment from "moment";
import { database, storage } from "../firebase/firebase";
import { v4 as uuid } from "uuid";
import { history } from "../routers/AppRouter";

export const addArticle = (article) => {
  return {
    type: "ADD_ARTICLE",
    article,
  };
};

export const startAddArticle = (articleData = {}) => {
  return (dispatch) => {
    const {
      title = "",
      subtitle = "",
      content = "",
      image = null,
      date = moment().unix(),
    } = articleData;

    const uploadTask = storage.ref(`images/${image.name.split(".")[0]}-${uuid()}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.error("Upload is failed");
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((imageUrl) => {
          const article = { title, subtitle, content, date, imageUrl };
          database
            .ref("/articles")
            .push(article)
            .then((ref) => {
              dispatch(addArticle({ id: ref.key, ...article }))
              history.push("/");
            })
            .catch((err) => console.error(err));
        });
      }
    )
  };
};

export const removeArticle = ({ id } = {}) => ({
  type: "REMOVE_ARTICLE",
  id,
});

export const startRemoveArticle = ({ id } = {}) => {
  return (dispatch, getState) => {
    return database
      .ref(`articles/${id}`)
      .remove()
      .then(() => {
        dispatch(removeArticle({ id }));
      });
  };
};

export const editArticle = (id, updates) => ({
  type: "EDIT_ARTICLE",
  id,
  updates,
});

export const startEditArticle = (id, updates) => {
  return (dispatch, getState) => {
    return database
      .ref(`articles/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editArticle(id, updates));
      });
  };
};

export const setArticles = (articles) => ({
  type: "SET_ARTICLES",
  articles,
});

export const startSetArticles = () => {
  return (dispatch, getState) => {
    return database
      .ref(`articles`)
      .once("value")
      .then((snapshot) => {
        const articles = [];

        snapshot.forEach((childSnapshot) => {
          articles.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setArticles(articles));
      });
  };
};
