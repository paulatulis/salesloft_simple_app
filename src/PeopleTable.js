import React from 'react';

function PeopleTable (props) {
    let chars = props.chars ? props.chars : null
    let counts = props.counts ? props.counts : null
 
    return(
        <div>
            <table>
        <thead>
          <tr>
              <th>Character</th>
              <th>Count</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{chars}</td>
          </tr>
          <tr>
            <td>Alan</td>
            <td>Jellybean</td>
            <td>$3.76</td>
          </tr>
          <tr>
            <td>Jonathan</td>
            <td>Lollipop</td>
            <td>$7.00</td>
          </tr>
        </tbody>
      </table>
           
        </div>
    )
    
}

export default PeopleTable;


function debounce(fn) {
  //a function called debounce that takes in an argument of fn
  let timeout;
  //establish a variable called timeout. Use 'let' so that this variable will be able to change later
  return () => {
      //return an anonymous function that executes another function called clearTimeout
    clearTimeout(timeout);
    //clearTimeout is a function that takes in an argument of timeout. timeout was named above with a let variable
    timeout = setTimeout(fn, 1000);
    //now that we have already established the variable timeout, and the timeout variable was set up with 'let', it is initialized or set equal to a function called setTimeout, which takes in two arguments: fn and an integer of 1000
    //note that fn is the same argument that is taken into the larger function
  };
  //theres the overarching function called debounce and within that, an anonymous function that encapsulates two additional functions
  //the function debounce returns a function that calls a function on a variable that is set to a function
  //when i picture this in my mind, it looks like a snake eating itself, but whatever the inverse of that looks like 
}

notes are inline: function debounce(fn) {
  //a function called debounce that takes in an argument of fn
  let timeout;
  //establish a variable called timeout. Use 'let' so that this variable will be able to change later
  return () => {
      //return an anonymous function that executes another function called clearTimeout
    clearTimeout(timeout);
    //clearTimeout is a function that takes in an argument of timeout. timeout was named above with a let variable
    timeout = setTimeout(fn, 1000);
    //now that we have already established the variable timeout, and the timeout variable was set up with 'let', it is initialized or set equal to a function called setTimeout, which takes in two arguments: fn and an integer of 1000
    //note that fn is the same argument that is taken into the larger function
  };
  //theres the overarching function called debounce and within that, an anonymous function that encapsulates two additional functions
  //the function debounce returns a function that calls a function on a variable that is set to a function
  //when i picture this in my mind, it looks like the inverse of a snake eating itself
}

function debounce(fn){
  console.log('doing stuff')
}

let hi = debounce(() => {
  //sets and initializes a variable hi 
  //uses let so that it may change in the future
  //sets the variable equal to a function called debounce
  //debounce then invokes an anonymous function that prints 'hello' to console
  console.log('hello');
});
hi();
//call on the variable hi, which we've established above as being equal to a function that executes an anonymous function that prints 'hello' to console
hi();
//call on the variable hi, which we've established above as being equal to a function that executes an anonymous function that prints 'hello' to console
hi();
//call on the variable hi, which we've established above as being equal to a function that executes an anonymous function that prints 'hello' to console
//this is more confusing to me than the first debounce function, but if I put my thumb over the part that says 'let hi =', I can somewhat see that this is what fn is of the debounce function
//so, when we call hi(), it should set the argument fn to the anonymous function that console.logs 'hello'
//fn = console.log('hello') and then is utilized as such in the original debounce function