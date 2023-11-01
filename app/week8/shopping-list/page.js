"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import ItemList from "./item-list";
import NewItem from './new-item';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';

const Page = () => {

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(false);

  
  const handleAddItem = (newItem) => {
    const updatedItem = [...items, newItem];
    setItems(updatedItem)
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
            <Link href="/week8">&lt;Back</Link>
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
