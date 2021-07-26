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

export function addArticleFirebase(article) {
  return database.ref("/articles").push(article);
}

export function editArticleFirebase(id, updates) {
  return database.ref(`articles/${id}`).update(updates);
}

export function removeArticleFirebase(id) {
  return database.ref(`articles/${id}`).remove();
}

export function getArticlesFirebase() {
  return database.ref(`articles`).once("value");
}

export function getArticleByIdFirebase(id) {
  return database.ref(`articles/${id}`).once("value");
}
