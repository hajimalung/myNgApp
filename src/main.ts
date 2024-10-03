import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_5Lg3sCTYCmnFZPbHlu4jIsDEg-L1v98",
  authDomain: "myfolio-1a917.firebaseapp.com",
  projectId: "myfolio-1a917",
  storageBucket: "myfolio-1a917.appspot.com",
  messagingSenderId: "764499463368",
  appId: "1:764499463368:web:fdc60a724a0bb390c329fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
