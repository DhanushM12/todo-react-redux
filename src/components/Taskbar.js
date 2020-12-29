import React, { Component } from 'react'

export default class Taskbar extends Component {
    render() {
        return (
            <div>
                <input type='text' ref='task' placeholder='add task'/>
                <button>Add Task</button>
            </div>
        )
    }
}
