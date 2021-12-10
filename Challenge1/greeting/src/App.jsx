import React from 'react';

const App = () => {
    
    let currDate = new Date();
    currDate= currDate.getHours();

        let greeting="";
        const cssStyle = {};
        
        if(currDate >=1 && currDate<12)
        {
         greeting = "Good Morning";
         cssStyle.color = "green";
        }else if(currDate>=12 && currDate<19)
        {
          greeting = "Good AfterNoon";
           cssStyle.color="Orange";
        }else 
        {
          greeting = "Good Evening";
          cssStyle.color="Black";
        }
        
        return (
            <>
            <div>
            <h1>
                Hello Sir,<span style={cssStyle}>{greeting }</span>
            </h1>
           </div>
           </>
        )
}

export default App
