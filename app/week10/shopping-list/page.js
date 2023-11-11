"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ItemList from "./item-list";
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import { getShoppingList, addItem } from '../_services/shopping-list-service';
import { useUserAuth } from '../_utils/auth-context';

const Page = () => {

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState(false);
  
  const { user } = useUserAuth();

  const loadItems = async () => {
    try {
      const getItems = await getShoppingList(user.uid);
      setItems(getItems)
    } catch (error) {
      console.error("Error loading items:", error)
    }
  }

  useEffect(() => {
    loadItems();
  }, [])
  

  const handleAddItem = async (newItem) => {
    try {
      const newItemId = await addItem(user.uid, newItem);
      const newItemWithId = {...newItem, id: newItemId };
      setItems((prevItems) => {
        if (prevItems) {
          return [...prevItems, newItemWithId];
        } else {
          return [newItemWithId];
        }
      });
    } catch (error) {
      console.error("Error add item:" , error)
    }
  }

  const handleItemSelect = (item) => {
    const itemName = item.name;
    const cleanedIngredient = itemName.split(',')[0].trim().replace(/\p{Emoji}/gu, '');

    setSelectedItemName(cleanedIngredient);
  }


  return (
    <main className="flex flex-col min-h-screen items-center p-10">
        <div className="flex items-center">
            <h1 className="text-[40px] font-bold mr-10 mb-3">My Shopping List</h1>
            <Link href="/week10">&lt;Back</Link>
        </div>
        <div className="flex">
          <div className="flex-1">
            <div className="flex justify-center">
            <NewItem onAddItem={handleAddItem} />
            </div>
            <ItemList 
              items={items} 
              onItemSelect={handleItemSelect}
            />
          </div>
          <div className="ml-10 flex-1">
            <MealIdeas ingredient={selectedItemName}/>
          </div>
        </div>
        
    </main>
  )
}

export default Page;
