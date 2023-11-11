import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

const getShoppingList = async (userId, updateItemList) => {
  try {
    const itemsCollectionRef = collection(db, "users", userId, "items");
    const querySnapshot = await getDocs(itemsCollectionRef);
    let items = [];
    querySnapshot.forEach((doc) => {
      // console.log( doc.id, " - ", doc.data())
      let thisItem = { 
        id: doc.id, 
        ...doc.data()
      };
      items.push(thisItem);
    });
      return items;
  } catch (error) {
    console.error("Error in getShoppingList ", error);
  }
};

const addItem = async (userId, item) => {
  try {
    const itemsCollectionRef = collection(db, "users", userId, "items");
    const newItemRef = await addDoc(itemsCollectionRef, item);
    colsole.log(newItemRef.id);
  } catch (error) {
    console.error("Error in addItem: ", error);
  }
};

export { getShoppingList, addItem };
