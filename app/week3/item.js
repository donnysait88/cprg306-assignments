
const Item = ({ name, quantity, category }) => {
    return (
        <div className="border-2 border-indigo-500 rounded-lg w-96 mt-5 p-4 bg-slate-50">
            <ul>
                <h2 className="text-xl font-bold">{name}</h2>
                <li>Buy {quantity} in {category} </li>   
            </ul>
        </div>
    )
}

export default Item;