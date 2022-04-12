import React, { useState } from 'react';
import "./style.css"

const Todo = () => {
    const [inputdata, setInputdata]= useState("");
    const [items, setItems] = useState([]);

    const addItem = () => {
        if (!inputdata) {
            alert("Please Fill The Form")
        }
        else {
            setItems([...items, inputdata])
        }
    }
  return (
    <>
      <div className='main-div'>
          <div className='child-div'>
              <figure>
                  <img  src="./images/todo.svg" alt="todologo"/>
                  <figcaption>Add Your List Here</figcaption>
              </figure>
              <div className='addItems'>
                  <input 
                  type="text"
                  placeholder='Add Item'
                            className='form-control'
                            value={inputdata}
                            onChange={(event) => setInputdata(event.target.value) }
                  />
                  <i className="fa fa-plus add-btn" onClick={addItem}/>    
              </div>

              <div className='showItems'>
                  
                  <div className='eachItem'>
                      <h3>apple</h3>
                      <div className='todo-btn'>
                      <i className="far fa-edit add-btn"/>   
                      <i className="far fa-trash-alt add-btn"/>  
                      

                      </div>
                  </div>
              </div>

              <div className='showItems'>
                  <button className='btn effect04' data-sm-link-text="Remove All">
                      <span>CHECK LIST</span>
                  </button>
              </div>
          </div>
      </div>
    </>
  )
}

export default Todo;
