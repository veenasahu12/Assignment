import React,{useState} from 'react'

const TodoItems = ({additems}) => {

    const [value , setValue] = useState("")

    return (
            <div >
                <input type="text" placeholder='Write Something' onChange={(elem) =>{
                    setValue(elem.target.value);
                }} id="input-div">
                </input>
                <button onClick={()=>{ additems(value)
                }} id="plus">+</button>
            </div>
    )
}

export default TodoItems
