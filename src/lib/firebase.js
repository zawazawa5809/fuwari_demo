import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY || process.env.FIREBASE_API_KEY,
  authDomain:
    import.meta.env.FIREBASE_AUTH_DOMAIN || process.env.FIREBASE_AUTH_DOMAIN,
  projectId:
    import.meta.env.FIREBASE_PROJECT_ID || process.env.FIREBASE_PROJECT_ID,
  storageBucket:
    import.meta.env.FIREBASE_STORAGE_BUCKET ||
    process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId:
    import.meta.env.FIREBASE_MESSAGING_SENDER_ID ||
    process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.FIREBASE_APP_ID || process.env.FIREBASE_APP_ID,
  measurementId:
    import.meta.env.FIREBASE_MEASUREMENT_ID ||
    process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase only in browser environment or when variables are properly set
let app, auth, googleProvider;

// Check if we have the necessary configuration to initialize Firebase
const hasValidConfig =
  firebaseConfig.apiKey && firebaseConfig.apiKey !== "undefined";

// Only initialize if we have valid config and are in a browser OR specifically handling server-side
if (hasValidConfig) {
  try {
    if (typeof window !== "undefined" && !getApps().length) {
      app = initializeApp(firebaseConfig);
      auth = getAuth(app);
      googleProvider = new GoogleAuthProvider();
      // ...other initializations
    }
  } catch (error) {
    console.error("Firebase initialization error:", error);
  }
} else {
  console.warn(
    "Firebase configuration is incomplete or missing. Authentication services will not be available."
  );
}

// Firebase初期化コードをコメントアウトまたは削除

// Firebaseを使わない空のモックを提供
export { app, auth, googleProvider };

// 必要に応じて他のFirebaseサービスも同様に
export const db = null;
export const storage = null;
