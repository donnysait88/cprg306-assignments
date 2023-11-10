"use client"

import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items, onItemSelect }) => {

  const [sortBy, setSortBy] = useState("name")

  const sortItems = () => {

    const itemsCopy = Array.isArray(items) ? [...items] : [];
    
    
    if (sortBy === "name") {
      return itemsCopy.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "category") {
      return itemsCopy.sort((a, b) => a.category.localeCompare(b.category));
    } else if (sortBy === "title_category") {
        const sortedByCategory = itemsCopy.sort((a, b) => a.category.localeCompare(b.category));
        const groupedByCategory = [];
        let currentCategory = null;
  
        for (const item of sortedByCategory) {
          if (item.category !== currentCategory) {
            // Add a category title when a new category is encountered
            groupedByCategory.push({ isCategoryTitle: true, category: item.category });
            currentCategory = item.category;
          }
          groupedByCategory.push(item);
        }
  
        return groupedByCategory;
    }
    return itemsData.slice();
  }
  
  const sortedItems = sortItems();

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  return (
    <main>
        <div className="flex mt-3 items-center">
            <label className="font-bold">Sort by:</label>
            <button 
            className={`bg-${sortBy === "name" ? "[#662549]" : "[#AE445A]"} p-3 m-2 w-28 rounded-xl text-white`} 
            onClick={() => handleSortChange("name")}>
                Name
            </button>
            <button 
            className={`bg-${sortBy === "category" ? "[#662549]" : "[#AE445A]"} p-3 m-2 w-28 rounded-xl text-white`}
            onClick={() => handleSortChange("category")}>
                Category
            </button>
            <button 
            className={`bg-${sortBy === "title_category" ? "[#662549]" : "[#AE445A]"} p-1 m-2 w-28 rounded-xl text-white`}
            onClick={() => handleSortChange("title_category")}>
                Grouped Category
            </button>
        </div>
        <div className="flex flex-col justify-center items-center">
            
        {sortedItems.map((item) => (
        <React.Fragment key={item.id}>
        {item.isCategoryTitle ? (
          <div className="text-xl font-bold mt-3 capitalize">{item.category}</div>
        ) : (
          <Item
            key={item.id}
            item={item}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)}
          />
        )}
      </React.Fragment>
      ))}

        </div>
    </main>
  )
}

export default ItemList;
