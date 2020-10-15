const defaultState={}
export default (state=defaultState,action)=>{
    if(action.type==='ccs'){
        let newState=JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value
        return newState
    }
    return state
}