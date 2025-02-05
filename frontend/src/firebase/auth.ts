import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
} from "firebase/auth";

// Function to create a user with email and password
export const doCreateUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Function to sign in a user with email and password
export const doSignInWithEmailAndPassword = (
  email: string,
  password: string
): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Function to sign in a user with Google
export const doSignInWithGoogle = async (): Promise<void> => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  // Add user to Firestore or handle additional logic
  console.log("Google user signed in:", user.displayName);
};

// Function to sign out the user
export const doSignOut = (): Promise<void> => {
  return auth.signOut();
};

// Function to reset the user's password
export const doPasswordReset = (email: string): Promise<void> => {
  return sendPasswordResetEmail(auth, email);
};

// Function to change the user's password
export const doPasswordChange = (password: string): Promise<void> => {
  if (!auth.currentUser) {
    throw new Error("No user is currently signed in.");
  }
  return updatePassword(auth.currentUser, password);
};

// Function to send email verification to the user
export const doSendEmailVerification = (): Promise<void> => {
  if (!auth.currentUser) {
    throw new Error("No user is currently signed in.");
  }
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};
