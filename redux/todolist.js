import react, { Component } from 'react'
import store from './stroe'
class Todolist extends Component {
    constructor(props){
        super(props)
        this.state=store.getState()
        this.clickEvent=this.clickEvent.bind(this)
        this.storeChange=this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }
    render(){
        <div onClick={clickEvent}></div>
    }

    clickEvent(e){
        const action={
            type:'cccs',
            value:e.target.value
        }
        store.dispacth(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
} 