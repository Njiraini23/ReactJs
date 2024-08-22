import React from "react";

const Hello = () => {
   // return (
    //    <div>
   //         <h1>Hello Kennedy</h1>
    //    </div>
    // )
    return React.createElement('div', null, React.createElement('h1', null, 'Hello Kennedy'))
} 

export default Hello