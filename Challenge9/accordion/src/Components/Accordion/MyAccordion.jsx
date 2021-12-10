import React ,{useState} from 'react';

const MyAccordion = ({question,answer}) => {
    
    const [show ,setShow] = useState(false);

    return (
        <>
          <div className="main_heading">
              <h3>{question}</h3>
              <p onClick={() => setShow(!show)}> {show?"➖":"➕"}</p>
          </div>
          {
              show && <p className="answers">{answer}</p>
          }
        </>
    )
}

export default MyAccordion

