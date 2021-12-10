import React, {useState} from 'react';

const App = () => {

  let time = new Date().toLocaleTimeString();

  const [Ctime,setCtime] = useState(time);
 
  const UpdateTime = () => {
    let newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
  };

  setInterval(UpdateTime,1000);

  return (
    <>
      <h1> {Ctime}</h1>
    </>
  );
}

export default App;
