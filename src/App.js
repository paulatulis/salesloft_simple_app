import React, { Component } from 'react';
import './App.css';
import People from './People';

const url = 'https://api.salesloft.com/v2/people';
const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
const API_KEY = process.env.REACT_APP_API_KEY;


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
        'Authorization': `Bearer ${API_KEY}`,
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
    console.log(API_KEY)
    return(
      <div>
        <People peopleData={this.state.people} />
      </div>
    )
  }
}

export default App;
