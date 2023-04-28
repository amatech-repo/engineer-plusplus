// authMethods.js
import firebase from 'firebase/compat/app';
export const githubProvider = new firebase.auth.GithubAuthProvider();   
export const googleProvider = new firebase.auth.GoogleAuthProvider();

//どのSNSを使用してログインをするかという情報を提供するプロバイダを定義
