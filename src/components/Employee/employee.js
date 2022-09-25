import React from "react";
import Controls from './Controls'
import styles from './employee.module.css'

class Employee extends React.Component {
    state = {
        employee: {
            id: this.props.id,
            name: this.props.name,
            color: this.props.color,
            code: this.props.code,
            profession: this.props.profession,
            city: this.props.city,
            branch: this.props.branch,
            assigned: this.props.assigned
        }
    }

    updateEmployee = () => {
        console.log(`Update btn click on ${this.state.employee.id}`);
        // this.setState({
        //     employee: {}
        // })
    }

    deleteEmployee = () => {
        console.log(`Delete btn click on ${this.state.employee.id}`);
        // this.setState({
        //     employee: {}
        // })
    }

    render() {
        return (
            <div className={styles.EmployeeCard} style={{borderColor: this.state.employee.color}}> 
                <img 
                src="https://plexxis.com/wp-content/themes/plexxis/assets/img/pages/we-are-plexxis-icon.png" 
                alt="WE ARE PLEXXIS"
                width="140"
                ></img>
                <h2 style={{color: this.state.employee.color}}>{this.state.employee.name}</h2>
                <p>{this.state.employee.code} - {this.state.employee.profession}</p>
                <p>{this.state.employee.city} ({this.state.employee.branch})</p>
                <p>{this.state.employee.assigned ? 'Assigned' : 'Not assigned'}</p>
                <Controls onUpdate={this.updateEmployee} onDelete={this.deleteEmployee} employee={this.state.employee}/>
            </div>
        )
    }
}

export default Employee;