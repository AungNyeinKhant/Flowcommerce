import admin from "firebase-admin";

// Best practice: Load credentials from environment variables.
// This avoids having a sensitive JSON file in your codebase.
const serviceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  // The private key from .env needs to have its newlines parsed correctly.
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
};

// Check if the required environment variables are set
if (
  !serviceAccount.projectId ||
  !serviceAccount.privateKey ||
  !serviceAccount.clientEmail
) {
  throw new Error(
    "Firebase Admin SDK credentials are not fully set in environment variables."
  );
}

export const firebaseAdmin = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // storageBucket: process.env.FIREBASE_BUCKET_URL,
});

// export const storage = firebaseAdmin.storage();
export const auth = firebaseAdmin.auth();
