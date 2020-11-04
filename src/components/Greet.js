import React from 'react'
import Welcome from './Welcome.js'
/*function Greet(props)

{
    return <h1> {props.name} {props.abc}</h1>
}
*/

 const Greet= props => 
 {
        console.log({params:props.match.params});
        const params=props.match.params;
 return (
 <div>
        <Welcome params={params}/>
 </div>
        );
 };

export default Greet