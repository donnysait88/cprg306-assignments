"use client"


import React, { useState } from 'react';
import Link from 'next/link';
import ItemList from "./item-list";
import NewItem from './new-item';
import itemsData from './items.json';

const Page = () => {

  const [items, setItems] = useState(itemsData)

  const handleAddItem = (newItem) => {
    const updatedItem = [...items, newItem];
    setItems(updatedItem)
  }


  return (
    <main className="flex flex-col min-h-screen items-center p-10 font-mono">
        <div className="flex items-center">
            <h1 className="text-[40px] font-bold mr-10 mb-3">My Shopping List</h1>
            <Link href="/">&lt;Back</Link>
        </div>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
    </main>
  )
}

export default Page;
