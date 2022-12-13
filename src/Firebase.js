import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAZmV6-P4gSQL0VGPPeD5UNFjky1zIbB_E",
  authDomain: "portfoliowebsite-e942f.firebaseapp.com",
  projectId: "portfoliowebsite-e942f",
  storageBucket: "portfoliowebsite-e942f.appspot.com",
  messagingSenderId: "206327228237",
  appId: "1:206327228237:web:1bfcc875e848c0ab193904",
  measurementId: "G-6D5S6BQH2R"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);