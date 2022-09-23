import React from 'react';
import EmployeesList from './components/employeesList';
// const employees = require('../server/data/employees.json');
import employees from './employees.json';

// class App extends React.Component {
//   state = {
//     employees: []
//   }
  
//   componentWillMount = () => {
//     fetch('http://localhost:8080/api/employees')
//       .then(response => response.json())
//       .then(employees => this.setState({ employees }))
//   }

//   render() {
//     const {
//       employees
//     } = this.state;

//     console.log(this.state);

//     return (
//       <div className="App">
//         <h1>Plexxis Employees</h1>
//         {
//           employees.map(employee => (
//             <div key={employee.id}>
//               {
//                 Object.keys(employee).map(key => 
//                   <span key={key}>
//                     { key }:
//                     { employee[key] } 
//                   </span>
//                 )
//               }
//             </div>
//           ))
//         }
//       </div>
//     );
//   }
// }

const App = () => {
  return (
    <div>
      <h1>Main component</h1>
      <EmployeesList employees={employees}/>
    </div>
  )
}

export default App;
