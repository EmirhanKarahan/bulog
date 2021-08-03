import firebase, { googleAuthProvider } from "../firebase/firebase";

export const login = (user) => ({
  type: "LOGIN",
  user: { uid: user.uid, username: user.displayName },
});

export const logout = () => ({
  type: "LOGOUT"
})

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
