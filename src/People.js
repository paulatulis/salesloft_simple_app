import React, { Component } from 'react';
import Person from './Person'

class People extends Component {
    state = {
        people: [],
        toggle: false
    }

    countChar = () => {
        let charMap = {};
        let emailArr = this.props.peopleData.data.map(person => person.email_address.split(''))
        let everyCharArr = emailArr.join('');
        

        for(let i = 0; i < everyCharArr.length; i++){
            charMap[everyCharArr[i]]?  charMap[everyCharArr[i]] +=1 : charMap[everyCharArr[i]] = 1
        }

        
        

    }

    render(){
        let people = this.props.peopleData.data ? this.props.peopleData.data : null
        console.log(this.props.peopleData.data)

        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col s6">
                            <h3>Here are the People</h3>
                        </div>
                        <div className="col s6">
                            <h3><button className="waves-effect waves-light btn-large" onClick={this.countChar}> Show me unique characters! </button></h3>
                        </div>
                    </div>
                    <div>
                    <table>
        <thead>
          <tr>
              <th>First Name</th>
              <th>Email Address</th>
              <th>Job Title</th>
          </tr>
        </thead>
        </table>
                    </div>

                     {people ? people.map(person => { return <div> <Person key={person.id} personInfo={person} /></div>}) : null}
                </div>
            </div>
        )
    }
}

export default People;