import React from 'react'

const heading=
{
    color: 'orange',
    fontSize: '50px'
 // strings and properties are camelcase
}
function Inline() 
{
    return (
        <div>
           <h1 style={heading}>Inline</h1> 
        </div>
    )
}

export default Inline
