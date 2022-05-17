import React,{useState} from 'react'
import "./Inventory.css"

const Inventory = (props) => {

    const [inventory , setInventory] = useState({
        Books: 12,
        NoteBooks: 24,
        Pens: 36,
    })

    const handleChange = (value, item) => {
        if ((inventory[`${item}`] <= 0) && (value === -1)) {
           alert("You can't go below zero!");
           return;
        }
  
        inventory[`${item}`] = inventory[`${item}`] + value;
  
        setInventory({ ...inventory });
     }

    return (
        <div className="maindiv">
            <h1>Welcome To My Stationery Stores</h1>
           <div className="items">
            <h2><span>Books: </span></h2>
            <button className="Button" onClick={() => handleChange(1, "Books")}>+</button>
            <button className="Button" onClick={() => handleChange(-1, "Books")}>-</button>
         </div>
         <div className="items">
            <h2><span>NoteBooks: </span></h2>
            <button className="Button" onClick={() => handleChange(1, "NoteBooks")}>+</button>
            <button className="Button" onClick={() => handleChange(-1, "NoteBooks")}>-</button>
         </div>
         <div className="items">
            <h2><span>Pens: </span></h2>
            <button className="Button" onClick={() => handleChange(1, "Pens")}>+</button>
            <button className="Button" onClick={() => handleChange(-1, "Pens")}>-</button>
         </div>
         
         {/*calculate total*/}

         <h1>total: { inventory.Books + inventory.NoteBooks + inventory.Pens + inventory.Books};</h1> 
        </div>
    )
}

export default Inventory
