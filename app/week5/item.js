import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <div className=" rounded-lg w-96 mt-5 p-4 bg-[#F39F5A]">
        <ul>
            <h2 className="text-xl font-bold">{name}</h2>
            <li>Buy {quantity} in {category} </li>   
        </ul>
    </div>
  )
}

export default Item;
