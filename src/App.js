import React, { Component } from 'react';
import './App.css';
import People from './People';

const url = 'https://api.salesloft.com/v2/people';
const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
const key = ''


class App extends Component {

  state = {
    people: []
  }
  componentDidMount(){
    this.fetchPeople()
  }
  
  fetchPeople = () => {
    fetch(proxyUrl + url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`,
      }
    })
    .then(res => res.json())
    .then(res => {
     this.setState({
       people: res
     })
    })
  }

  render(){
    console.log(this.state)
    return(
      <div>
        <People peopleData={this.state.people} />
      </div>
    )
  }
}

export default App;
