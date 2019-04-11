import React, { Component } from 'react'

export default class Animal extends Component {
    render() {
        return (
            <React.Fragment>
            <h1>Animals</h1>
            {
            this.props.animals.map(animal =>
            <div key={animal.id}>
                {animal.name}
            </div>    )
            }
            </React.Fragment>
        );
    }

}