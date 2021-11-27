import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot, addDoc } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAyK2GZa4VBOLxU5JRSRO9grExQFQexuUw",
  authDomain: "bcfapp-9b541.firebaseapp.com",
  projectId: "bcfapp-9b541",
  storageBucket: "bcfapp-9b541.appspot.com",
  messagingSenderId: "622723193154",
  appId: "1:622723193154:web:122016122a0a93635750db",
  measurementId: "G-JD1SY40LB6"
});

const db = getFirestore();

function getdb(collectionName){

  let dataArray = [];
    onSnapshot(collection(db,collectionName), ( snapshot ) => {
    snapshot.docs.map((doc) => dataArray.push(doc.data()))
  })

  return dataArray;
}

async function adddb(collectionName,inputObj){
  try {
    const docRef = await addDoc(collection(db, collectionName), {
      login: inputObj.login,
      password: inputObj.password,
      email: inputObj.email,
      permission: 'user'
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export { getdb, adddb };