import React, { Component } from 'react'

export default class Animal extends Component {
    render() {
        return (
            <section className="content">
            <h1>Animals</h1>
            {
            this.props.animals.map(animal =>
            <div key={animal.id}>
                {animal.name}
            </div>    )
            }
            </section>
        );
    }

}