import React , {useState} from 'react';
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import ListCom from "./ListCom";


const ToDoList = () =>{

    const [item , setItem] = useState("");

    const [newitem, setNewItem] = useState([]);

    const itemEvent = (event) => {
        setItem(event.target.value);
    };

    const listOfItems = () => {
        setNewItem((prevValue) => {
            return [...prevValue,item];
        });
        setItem("");
    };

   return (
       <>
       <div className="main_div">
           <div className="center_div">
                 <br />
                 <h1> TODO LIST </h1>
                 <br />
                 <input 
                 type="text" 
                 placeholder="Add an items"
                 value={item}
                 onChange = {itemEvent}
                  />
                 <Button className="newBtn"  onClick= {listOfItems}>
                     <AddIcon />
                 </Button>

                 <br />
                  <ol>
                      {newitem.map((val,index) => {
                          return <ListCom key = {index} text = {val} />;
                      })}
                  </ol>
                  <br />
           </div>
       </div>
       </>
   )
};

export  default ToDoList;