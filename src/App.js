import React from 'react';
import Title from './components/Title/title'
import EmployeesList from './components/EmployeesList/EmployeesList';
import AddEmployeeModal from './components/Modals/AddEmployeeModal'
import employeesApi from './api/employees-api'
import './index.css';

class App extends React.Component {

  state = {
    employees: [],
  }

  componentDidMount() {
    employeesApi
      .getEmployees()
      .then(employees => {
        this.setState({ employees })
      })
      .catch(error => console.log(error));
  }

  deleteEmployee = id => {
    employeesApi
      .deleteEmployee(id)
      .then(() => {this.setState(({ employees }) => ({
          employees: employees.filter((employee) => employee.id !== id),
        }));
      });
  }

  addEmployee = data => {
    const newEmployee = {
      id: Date.now(),
      ...data
    }
    console.log('newEmployee===', newEmployee)
    employeesApi
      .addEmployee(newEmployee)
      .then(() => {this.setState(({ employees }) => ({ employees: [...employees, newEmployee] }))
    })
  }

  render() {
    return (
      <div className='mainContainer'>
        <Title/>
        <AddEmployeeModal onAddEmployee={this.addEmployee}/>
        <EmployeesList employees={this.state.employees} onDeleteEmployee={this.deleteEmployee}/>
      </div>
    )
  }
}

export default App;
