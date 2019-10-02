import React, { Component } from 'react';
import Person from '../components/Person'

class People extends Component {
    state = {
        people: [],
        toggle: false,
    }

    countChar(people){
        let allEmails = [];
        let charArr = [];
        let sortedEmailArr = [];
        let charMap = {};
        
        people.map((person) => person.email_address? allEmails.push(person.email_address) : null)

        allEmails.map((email) => {
            for(let i = 0; i < email.length; i++){
                let char = email[i];
                charMap[char]? charMap[char] += 1 : charMap[char] = 1
            }
            charArr.push(charMap)
        })

        for(let char in charMap){
            sortedEmailArr.push([char, charMap[char]])
        }

        sortedEmailArr.sort(function (a, b) {
            return a[1] - b[1]
        })
        
        this.setState({
            ...this.state,
            charList: sortedEmailArr,
            toggle: !this.state.toggle
        })
    }

    render(){
        let people = this.props.peopleData.data ? this.props.peopleData.data : null;
        
        let charList = this.state.charList? this.state.charList.map((char) => {
            return <tr>
                        <td>{char[0]}</td>
                        <td>{char[1]}</td>
                    </tr>
        }) : null
        
        return(
            <div className="container">
                <div className="!row">
                    <div className="!col s6">
                        <h3>Here are the People</h3>
                        {!this.state.toggle && people? 
                            <div className="col s6">
                                <h3>
                                    <button className="waves-effect waves-light btn-large" onClick={() => this.countChar(people)}> Show me unique characters! 
                                    </button>
                                </h3>
                            <div>
                                <table className="centered">
                                    <thead>
                                        <tr>
                                            <th>First Name</th>
                                            <th>Email Address</th>
                                            <th>Job Title</th>
                                        </tr>
                                    </thead>
                                 </table>
                                 {people.map(person => { return <div> <Person className="centered" key={person.id} personInfo={person} /></div>})}
                                </div>
                            </div> 
                            
                            : 
                            <div className="col s6">
                                <h3>
                                    <button className="waves-effect waves-light btn-large" onClick={() => this.countChar(people)}> Okay, all set! 
                                    </button>
                                </h3>

                                <table>
                        <thead>
                            <tr>
                                <th>
                                    Character
                                </th>
                                <th>
                                    Frequency
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {charList}
                        </tbody>
                    </table>



                            </div>
                        }

                    </div>

                     {/* {people ? people.map(person => { return <div> <Person key={person.id} personInfo={person} /></div>}) : null} */}
                </div>
                
            </div>
        )
    }
}

export default People;









