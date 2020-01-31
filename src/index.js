import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyC8TNIyCeMFfAntLMj1km7T2Loq0CaFMfc",
    authDomain: "everynote-83ba8.firebaseapp.com",
    databaseURL: "https://everynote-83ba8.firebaseio.com",
    projectId: "everynote-83ba8",
    storageBucket: "everynote-83ba8.appspot.com",
    messagingSenderId: "829123531741",
    appId: "1:829123531741:web:0571fd8808cdc099159c34",
    measurementId: "G-LLTJN5RZV4"
});
firebase.analytics();

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
