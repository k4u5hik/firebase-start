// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-aIjJXM_FPRCjfVmHcjaKuU9XgvI2n3Q",
  authDomain: "verycutebunhouse.firebaseapp.com",
  projectId: "verycutebunhouse",
  storageBucket: "verycutebunhouse.appspot.com",
  messagingSenderId: "295458883913",
  appId: "1:295458883913:web:ddfe99921bf3e1092b3298",
  measurementId: "G-RT75DTD277"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore();

const specialOfTheDay = doc(firestore, 'dailySpecial/2022-11-16');

async function writeDailySpecial() {
  const docData = {
    name: 'Bun of the Month',
    price: 129.99,
    description: 'Come and get it, this time only!'
  };
  await setDoc(specialOfTheDay, docData, { merge: true }) // merge: true will not overwrite existing data in the document if it exists already
  .then(() => {
    console.log('Document successfully written!');
  }
  )
  .catch((error) => {
    console.error('Error writing document: ${error}');
  })
}

writeDailySpecial();

console.log ('Hello from Firebase');