import React, { Component } from 'react'
import Task from './Task'

export default class Tasklist extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Tasks</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Task />
                    </tbody>
                </table>
            </div>
        )
    }
}
