"use client"

import React, { useState } from 'react';

const NewItem = ({ onAddItem }) => {

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce")

  const handleSubmit = (e) => {
    e.preventDefault();

    const items = { name, quantity, category };

    onAddItem(items);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    
    <div className="p-5 rounded-lg m-1 bg-[#451952] text-black max-w-sm w-full">
        <h1 className="text-white text-xl mb-5 font-bold">ADD NEW ITEM</h1>
        <form onSubmit={handleSubmit}>
            <label>
                <input 
                    className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg"
                    type="text" 
                    placeholder="item name" 
                    value={name} 
                    onChange={(e)=> setName(e.target.value)} 
                    required
                    />
            </label>

            <div className="flex justify-between mt-3">
                <input 
                 className="w-20 border-2 border-gray-300 rounded-lg p-2"
                 type="number" 
                 min="1" 
                 max="99" 
                 value={quantity} 
                 onChange={(e)=> setQuantity(e.target.value)}
                 required
                />
                <select 
                    className="w-30 border-2 border-gray-300 rounded-lg"
                    onChange={(e)=> setCategory(e.target.value)}
                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <button 
                type="submit" 
                className="w-full bg-[#AE445A] p-1 rounded-lg mt-3 font-bold hover:bg-[#662549] text-white"
            >ADD +
            </button>
        </form>
    </div>
  )
}

export default NewItem;
