import React, { Component } from 'react'

export default class Location extends Component {
    render() {
        return (
        <React.Fragment>
        <h1>Our Locations</h1>
        <section className="locationWrapper">
        {
        this.props.locations.map(location =>
        <div key={location.id}>
            {location.name}
        </div>
            )
        }
        </section>
        </React.Fragment>

        );
    }
}