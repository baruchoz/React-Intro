import React, { Component } from 'react'

export default class KekambasDetail extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.kekam.first_name} {this.props.kekam.last_name}</h4>
            </div>
        )
    }
}
