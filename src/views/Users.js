import React, { Component } from 'react'

export default class Users extends Component {
    // set state using constructor
    constructor(props){
        super(props);
        this.state = {
            users:[]
        }
    }

    // fetch api data
    componentDidMount(){
        fetch('https://kekambas-bs.herokuapp.com/kekambas')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                users: data
                })
            }    
        )
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Users</h1>
                <ul className="list-group">
                    {this.state.users.map((user, indx) => <li  key={indx} className='list-group-item'>{user.first_name} {user.last_name}</li>)}
                </ul>
            </div>
        )
    }
}

