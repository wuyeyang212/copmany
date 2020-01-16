  const defaultState = {
    inputValue: 'write something',
    list: [
        '早8点开晨会，分配今天的任务代码',
        '早8点开晨会，分配今天的任务代码',
        '早8点开晨会，分配今天的任务代码'
    ]
}
export default (state = defaultState, action) => {
    console.log(state,action)
    //Rediucerl里只能接受state,不能改变state
    if(action.type==="changeInput"){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue= action.value 
        return newState
    }
    if(action.type === "addItem"){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if(action.type === "addItem"){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if(action.type === "deleteItem"){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
      
        return newState
    }
    return state
}