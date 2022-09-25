import React from "react";
import Employee from '../Employee/employee';
import styles from './employeesList.module.css'

class EmployeesList extends React.Component {
    state = {
        employees: this.props.employees
    }

    render() {
        return (
            <ul className={styles.employeesList}>
                {this.state.employees.map((item) => (
                    <li className={styles.EmployeeList__item} key={ item.id }>
                        <Employee 
                        id={item.id}
                        name={item.name} 
                        code={item.code}
                        profession={item.profession}
                        city={item.city}
                        branch={item.branch} 
                        assigned={item.assigned}
                        color={item.color}
                        />
                    </li>
                ))}
            </ul>
        )
    }
}

// const EmployeesList = ({employees}) => {
   
// }

export default EmployeesList;