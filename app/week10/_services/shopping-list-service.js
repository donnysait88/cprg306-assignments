import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

const getShoppingList = async (userId) => {
  try {
    let items = [];
    const docRef = db.collection("users").doc(userId);
    const itemsCollectionRef = collection(docRef, "items");
    const querySnapshot = await getDocs(itemsCollectionRef);

    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, data: doc.data() });
    });

    return items;
  } catch (error) {
    console.error("Error in getShoppingList ", error);
  }
};

const addItem = async (userId, item) => {
  try {
    const userDocRef = db.collection("users").doc(userId);
    const itemsCollectionRef = collection(userDocRef, "items");
    const newItemRef = await addDoc(itemsCollectionRef, item);
    return newItemRef.id;
  } catch (error) {
    console.error("Error in addItem: ", error);
  }
};

export { getShoppingList, addItem };
