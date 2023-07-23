import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATaknV0mbCMmZTSu8HZPvQHjlVExzqLIY",
  authDomain: "react-app-1e939.firebaseapp.com",
  projectId: "react-app-1e939",
  storageBucket: "react-app-1e939.appspot.com",
  messagingSenderId: "305102810089",
  appId: "1:305102810089:web:2f4a9c6f0884571df8b978",
  measurementId: "G-P57VF3EKV8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
