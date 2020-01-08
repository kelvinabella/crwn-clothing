import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

const config = {
  apiKey: "AIzaSyBeyeacC0tfJLklKoWPvNlpX3mJxKO0BZQ",
  authDomain: "crwn-clothing-d2900.firebaseapp.com",
  databaseURL: "https://crwn-clothing-d2900.firebaseio.com",
  projectId: "crwn-clothing-d2900",
  storageBucket: "crwn-clothing-d2900.appspot.com",
  messagingSenderId: "84352059876",
  appId: "1:84352059876:web:190929bcb45dc0c730dff1",
  measurementId: "G-2VM7HV93B1"
};

export const createUserProfileDocument = async (userAuth, addiditionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addiditionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
