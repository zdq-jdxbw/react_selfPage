import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function Main(props) {
    return (
        <div>I am color + { props.value }</div>
    )
}

class Main extends React.Component(){
   constructor(props){
        super(props);
        this.state={};
   }
   render(){
       return (
        <div>I am color + {props.value}</div>
       )
   }
}

const Main = (props) => {
    const [count,setCount] = useState(1)
    return(
        <div>I am color + { count }</div>
    )
}

ReactDOM.render(
    <Main/>,
    document.getElementById('root')
)