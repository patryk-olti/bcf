import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, onSnapshot } from "firebase/firestore"; 

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

    /*
    let dataArray = [];
    const querySnapshot = await getDocs(collection(db, collectionName));
    querySnapshot.forEach((doc) => {
      dataArray.push(doc.data());
    });
    return dataArray;
    */
}

export { getdb };