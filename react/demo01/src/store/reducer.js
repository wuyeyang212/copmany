const defaultState = {
    inputValue: 'write something',
    list: [
        '早8点开晨会，分配今天的任务代码',
        '早8点开晨会，分配今天的任务代码',
        '早8点开晨会，分配今天的任务代码'
    ]
}
export default (state = defaultState, action) => {
    console.log(state.action)
    return state
}