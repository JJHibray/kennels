import React, { Component } from 'react'

export default class OwnerList extends Component {
  render() {
    return (
      <div className="content">
          <h1>Owners</h1>
        {
        this.props.owners.map(owner =>
        <div key={owner.id}>
            {owner.name}
          <button
            onClick={() => this.props.deleteOwner(owner.id)}
            className="card-link">Delete</button>
        </div>
            )
        }
      </div>
    )
  }
}
