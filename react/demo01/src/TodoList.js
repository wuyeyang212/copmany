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
    }
    
    render() { 
        return ( 
            <div>
                <div style={{margin:'10px'}}> 
                    <Input 
                    placeholder={this.state.inputValue}
                    onChange={this.changeInputValue} 
                    style = {{width:'250px',marginRight:'10px'}}/>
                    <Button type="primary">增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={item=>(<List.Item>{item}</List.Item>)}/>
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
}

export default TodoList;