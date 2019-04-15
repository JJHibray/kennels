import React, { Component } from 'react'

export default class EmployeeList extends Component {
    render() {
        return (
            <article className="content employee">
                <h1>Employee List</h1>
                {
                this.props.employees.map(employee =>
                    <div key={employee.id}>
                        {employee.name}
                        <button
                                    onClick={() => this.props.deleteEmployee(employee.id)}
                                    className="card-link">Delete</button>
                    </div>
                )
            }
            </article>
        );
    }
}