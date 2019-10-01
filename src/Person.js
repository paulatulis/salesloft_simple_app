import React from 'react';

function Person (props) {
return(
    <div>
        <table>
            <tbody>
            <tr>
            <td>{props.personInfo.first_name}</td>
            <td>{props.personInfo.email_address}</td>
            <td>{props.personInfo.title}</td>
          </tr>

            </tbody>
        

        </table>
        

    </div>
)
}

export default Person;