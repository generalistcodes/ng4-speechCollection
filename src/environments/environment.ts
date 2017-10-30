// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

/*
*   // Initialize Firebase
 var config = {
 apiKey: "AIzaSyBVXnd0B6NctzK7QdMv1tjqiQhxrrgb32A",
 authDomain: "speech-collection.firebaseapp.com",
 databaseURL: "https://speech-collection.firebaseio.com",
 projectId: "speech-collection",
 storageBucket: "",
 messagingSenderId: "525106269064"
 };
 firebase.initializeApp(config);
* */
export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBVXnd0B6NctzK7QdMv1tjqiQhxrrgb32A',
    authDomain: 'speech-collection.firebaseapp.com',
    databaseURL: 'https://speech-collection.firebaseio.com',
    projectId: 'speech-collection',
    storageBucket: 'speech-collection.appspot.com',
    messagingSenderId: '525106269064'
  }
};
