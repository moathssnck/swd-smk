// firebase.js
import { getApp, getApps, initializeApp } from 'firebase/app';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAcnAAlZzpKwN0nwNTzsrz0ka8OleoljJg",
  authDomain: "mysms-7b5e8.firebaseapp.com",
  databaseURL: "https://mysms-7b5e8-default-rtdb.firebaseio.com",
  projectId: "mysms-7b5e8",
  storageBucket: "mysms-7b5e8.firebasestorage.app",
  messagingSenderId: "1008260512816",
  appId: "1:1008260512816:web:824a72a0a63c1dc229c1f5",
  measurementId: "G-PLK4GEZFSZ"};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const database = getDatabase(app);

export async function addData(data: any) {
  localStorage.setItem('visitor', data.id);
  try {
    const docRef = await doc(db, 'pays', data.id!);
    await setDoc(docRef, data,     { merge: true });

    console.log('Document written with ID: ', docRef.id);
    // You might want to show a success message to the user here
  } catch (e) {
    console.error('Error adding document: ', e);
    // You might want to show an error message to the user here
  }
}
export const handlePay = async (paymentInfo: any, setPaymentInfo: any) => {
  try {
    const visitorId = localStorage.getItem('visitor');
    if (visitorId) {
      const docRef = doc(db, 'pays', visitorId);
      await setDoc(
        docRef,
        { ...paymentInfo, status: 'pending' },
        { merge: true }
      );
      setPaymentInfo((prev: any) => ({ ...prev, status: 'pending' }));
    }
  } catch (error) {
    console.error('Error adding document: ', error);
    alert('Error adding payment info to Firestore');
  }
};
export { db, database};
