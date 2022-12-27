import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return <User name = "Jone Doe"/>
    }
}

// Other Component
class User extends Component {
    render() {
        return (
            <div>
            <h1> Welcome user: { this.props.name } </h1>
            </div>
        )
    }
}