import React, { Component } from 'react'
import KekambasDetail from '../components/KekambasDetail';

export default class Kekambas extends Component {
    constructor(props){
        super(props);
        // console.log('kekambas component constructed')
        this.state = {
            kekambas: []
        }
    }
    
    componentDidMount(){
        // console.log('kekambas component did mount')
        fetch('https://kekambas-bs.herokuapp.com/kekambas')
        .then(res => res.json())
        .then(data => this.setState({
            kekambas: data
        }))    
    }
    
    
    
    render() {
        // console.log('kekambas component rendered')
        console.log(this.state)
        return (
            <div>
                This is the kekambas page
                {this.state.kekambas.map((f, l) => <KekambasDetail key={l} kekam={f}/>)}
            </div>
        )
    }
}
