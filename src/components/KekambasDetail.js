import React, { Component } from 'react'

export default class KekambasDetail extends Component {
    render() {
        const kekam = this.props.kekam
        return (
            <tr>
                <td>{kekam.body}</td>
                <td>{kekam.date_created}</td>
                <td>{kekam.id}</td>
                <td>{kekam.title}</td>
                <td>{kekam.user.first_name}</td>
                <td>{kekam.user.id}</td>
                <td>{kekam.user.last_name}</td>
            </tr>
        )
    }
}
