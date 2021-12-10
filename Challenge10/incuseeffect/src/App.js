import React,{useState,useEffect} from 'react'

const App = () => {

  const [num,setNum] = useState(0);

  useEffect(() => {
     document.title=`you clicked me ${num}`;
    })

      return (
          <button onClick={()=>{
            setNum(num+1)
          }}> Click Me {num}</button>
      );
};

export default App

