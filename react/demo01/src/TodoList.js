import React, { Component } from 'react';
import 'antd/dist/antd.css'
import {Input,Button,List} from 'antd'
import store from './store'


class TodoList extends Component {
    constructor(props){
        super(props)
        //console.log(store.getState())
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        store.subscribe(this.storeChange)
    }
    
    render() { 
        return ( 
            <div>
                <div style={{margin:'10px'}}> 
                    <Input 
                    placeholder={this.state.inputValue}
                    onChange={this.changeInputValue}
                    value={this.state.inputValue} 
                    style = {{width:'250px',marginRight:'10px'}}/>
                    <Button 
                        type="primary"
                        onClick = {this.clickBtn}
                    >增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item,index)=>(<List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>)}/>
                </div>
            </div>
         );
    }
    changeInputValue(e){
        const action ={
            type:'changeInput',
            value:e.target.value
        }
        store.dispatch(action) 
    }
    clickBtn(){
        const action = {type:'addItem'}
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState)
    }
    deleteItem(index){
        const action = {
            type:'deleteItem',
            index:index
        }
        store.dispatch(action)
    }
}

export default TodoList;