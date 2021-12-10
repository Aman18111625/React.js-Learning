import React , {useState} from "react";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";
import Button from "@material-ui/core/Button";


const App = () => {
   
  const [num , setNum] = useState(0);

  const incNum = () => {
    setNum(num+1);
  }

  const decNum = () => {
    if(num>0)
    {
    setNum(num-1);
    }else{
      alert(`Sorry , Zero limit reached`);
      setNum(0);
    }
  }

    return (
       <>
          <div className="main_div">
              <div className="center_div">
                 <h1> {num} </h1>
                 <div className="btn_div">
                    <Button onClick={incNum}  className="btn_green"> 
                      <AddIcon/>
                     </Button>
                    <Button onClick={decNum}  className="btn_red"> 
                      <DeleteIcon/>
                     </Button>
                 </div>
              </div>
          </div>
       </>
    );
}

export default App;