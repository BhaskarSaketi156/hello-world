import React, { Component } from 'react'

class ClassClick extends Component {
    
    clickHanlder()
        {
            console.log('clicked')
        }
    render() {

         
        return (
            <div>
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}

export default ClassClick
