import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTask} from '../actions/index';

class Taskbar extends Component {
    render() {
        return (
            <div>
                <input type='text' ref='task' placeholder='add task'/>
                <button onClick={()=> this.props.addTask(this.refs.task.value)}>Add Task</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addTask}, dispatch);
}
export default connect(()=>{}, mapDispatchToProps)(Taskbar);