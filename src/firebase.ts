// firebase.js
import { getApp, getApps, initializeApp } from 'firebase/app';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC-fR9vsFJ0gyOcysg5SG5DMtATNzTyW1c",
  authDomain: "exam-app-2ec1d.firebaseapp.com",
  databaseURL: "https://exam-app-2ec1d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "exam-app-2ec1d",
  storageBucket: "exam-app-2ec1d.firebasestorage.app",
  messagingSenderId: "116559499407",
  appId: "1:116559499407:web:8c5ecf129f5c437e3ea0fa",
  measurementId: "G-MY09H839C3"
};

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
