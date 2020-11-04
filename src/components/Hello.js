import React from 'react'

const Hello= ()=>
{
    /*return(
   <div>
       <h1>Hello welcome</h1>
   </div>
    )*/
    return React.createElement('div',{id:'hello',className:'dummyclas'},React.createElement('h1',null,'helo welcome'))
}

export default Hello