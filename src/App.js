import React, { Component } from 'react'
import Navbar from './components/Navbar';
import About from './views/About';
import Home from './views/Home';
import { Route } from 'react-router-dom';
import Racers from './views/Racers';
import Kekambas from './views/Kekambas';
import Users from './views/Users';
import { Posts } from './views/Posts';



export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        count: 0,
        name: 'Baruch'
    }
}

handleClick = (step) => {
    let newCount = this.state.count + step
    this.setState({
        count: newCount
    })
}

changeName = (name) => {
    // let name = prompt('What is your name?')
    this.setState({
      name
    })
}

  render() {
    return (
      <>
        <Navbar />
        <div className="container">

          <Route exact path='/'>
            <Home count={this.state.count} handleClick={this.handleClick} name={this.state.name} changeName={this.changeName}/>
          </Route>

          <Route exact path='/about'>
            <About />
          </Route>

          <Route exact path='/racers'>
            <Racers />
          </Route>

          <Route exact path='/kekambas'>
            <Kekambas />
          </Route>

          <Route exact path='/users'>
            <Users />
          </Route>

          <Route exact path='/posts'>
            <Posts />
          </Route>
          
        </div>
      </>
    )
  }
}
