// @@Parameters: Pulls the planetName off of the URL
// @@Return: Returns a planet of type Planet with all planet information
// @@Example: fetch('/api/planets/venus', ...) will return all planet data for venus

import type { NextApiRequest, NextApiResponse } from 'next';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore/lite';
import { getApps, getApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_CONFIG_API_KEY,
  authDomain: process.env.FIREBASE_CONFIG_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_CONFIG_PROJECT_ID,
  storageBucket: process.env.FIREBASE_CONFIG_STORAGE_BUCKET,
  messaginSenderId: process.env.FIREBASE_CONFIG_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_CONFIG_APP_ID,
  measurementId: process.env.FIREBASE_CONFIG_MEASUREMENT_ID,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message } = req.body;
  const newContactEntry = doc(collection(db, 'contact-data'));
  const data = { name, email, message };
  await setDoc(newContactEntry, data);
  res.send(data);
}
