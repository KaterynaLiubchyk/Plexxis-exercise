import React from "react";

const Employee = (props) => {
    return (
        <div> 
            <h2>{props.name}</h2>
            <p>{props.profession}</p>
            <p>{props.assigned ? 'Assigned' : 'Not assigned'}</p>
        </div>
    )
}

export default Employee;