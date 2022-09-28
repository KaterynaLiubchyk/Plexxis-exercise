import React from "react";
import Employee from '../Employee/Employee';
import styles from './employeesList.module.css'

const EmployeesList = ({employees, onDeleteEmployee}) => {

    return (
        <ul className={styles.employeesList}>
            {employees.map((item) => (
                <li className={styles.EmployeeList__item} key={ item.id }>
                    <Employee 
                    employee={item}
                    onDeleteEmployee={onDeleteEmployee}
                    />
                </li>  
            ))}
        </ul>
    )
    
}

export default EmployeesList;