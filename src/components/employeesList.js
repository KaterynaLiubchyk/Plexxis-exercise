import React from "react";
import Employee from './employee';

const EmployeesList = ({employees}) => {
    return (
        <ul>
            {employees.map((item) => (
                <li key={ item.id }>
                    <Employee 
                    name={item.name} 
                    profession={item.profession} 
                    assigned={item.assigned}
                    />
                </li>
            ))}
        </ul>
    )
}

export default EmployeesList;