import { database, storage } from "./firebase";
import { v4 as uuid } from "uuid";

// returns uploaded image url
export function uploadImageFirebase(image) {
  return storage
    .ref(`images/${image.name.split(".")[0]}-${uuid()}`)
    .put(image)
    .then((snapshot) => snapshot.ref.getDownloadURL());
}

export function deleteImageFirebase(imageUrl) {
  return storage.refFromURL(imageUrl).delete();
}

export function addArticleFirebase(uid, article) {
  return database.ref(`users/${uid}/articles`).push(article);
}

export function editArticleFirebase(uid, id, updates) {
  return database.ref(`users/${uid}/articles/${id}`).update(updates);
}

export function removeArticleFirebase(uid, id) {
  return database.ref(`users/${uid}/articles/${id}`).remove();
}

export function getArticlesAllFirebase() {
  let articles = {};
  return database
    .ref("users")
    .once("value")
    .then((snapshot) => {
      const users = snapshot.val();
      for (const userKey in users) {
        let userArticles = users[userKey].articles;
        articles = { ...articles, ...userArticles };
      }
      return articles;
    });
}

export function getArticleByIdFirebase(uid, id) {
  return database.ref(`users/${uid}/articles/${id}`).once("value");
}
