import React from 'react';

const Answer = ({ name,place,infox={a:3,b:4} })=> {
    return(
     <div>
        Hello from {name}, im from {place}
        {infox && (
         <div>
            {infox.a ||   infox.b} 
         </div>
        )}
         </div>
   );
};

export default Answer;

          