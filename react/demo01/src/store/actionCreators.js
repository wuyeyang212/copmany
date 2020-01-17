import { CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST} from './actionTypes'

export const changeInputAction=(value)=>({
    type:CHANGE_INPUT,
    value:value
})
export const addItemAction = ()=>({
    type:ADD_ITEM
})
export const deleItemAction= (index)=>({
    type:DELETE_ITEM,
    index:index
})
export const getListAction= (data)=>({
    type:GET_LIST,
    data
})