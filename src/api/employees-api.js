import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';

const getEmployees = () => {
  return axios.get('/employees').then(response => response.data);
};

const addEmployee = employee => {
  return axios.post('/employees/add', employee).then(({ data }) => data);
};

const deleteEmployee = id => {
  return axios.delete(`/employees/delete/${id}`);
};

// const updateEmployee = (id, update) => {
//   return axios.patch(`/employees/${id}`, update).then(({ data }) => data);
// };

export default { getEmployees, addEmployee, deleteEmployee };