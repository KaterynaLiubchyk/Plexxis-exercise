import React from "react";
import styles from './employee.module.css'
import DeleteEmployeeModal from '../Modals/DeleteEmployeeModal'

const Employee = ({employee, onDeleteEmployee}) => {
 
    return (
        <div className={styles.EmployeeCard} > 
            <img 
            src="https://plexxis.com/wp-content/themes/plexxis/assets/img/pages/we-are-plexxis-icon.png" 
            alt="WE ARE PLEXXIS"
            width="140"
            ></img>
            <h2 style={{color: employee.color}}>{employee.name}</h2>
            <p>{employee.code} - {employee.profession}</p>
            <p>{employee.city} ({employee.branch})</p>
            <p>{employee.assigned ? 'Assigned' : 'Not assigned'}</p>
            {/* <UpdateUserModal/> */}
            <DeleteEmployeeModal employee={employee} onDeleteEmployee={onDeleteEmployee}/>
        </div>
    )
}

export default Employee;