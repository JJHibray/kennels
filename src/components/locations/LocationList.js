import React, { Component } from 'react'

export default class Location extends Component {
    render() {
        return (
        <React.Fragment>
        <h1>Our Locations</h1>
        <section className="locationWrapper">
        <h4>Nashville North Location</h4>
        <h5>500 Puppy Way</h5>
        <h4>Nashville West Location</h4>
        <h5>600 Booger lane</h5>
        <h4>Nashville East Location</h4>
        <h5>711 Hipster Way</h5>
        </section>
        </React.Fragment>

        );
    }
}