import React from 'react';

const Item = ({ name, quantity, category, onSelect }) => {
 
  return (
    <div 
    className=" rounded-lg w-96 mt-5 p-4 bg-[#F39F5A] cursor-pointer hover:bg-amber-200"
    onClick={() => onSelect( name, quantity, category )}
    >
        <ul>
            <h2 className="text-xl font-bold">{name}</h2>
            <li>Buy {quantity} in {category} </li>   
        </ul>
    </div>
  )
}

export default Item;
