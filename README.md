# Plexxis Interview Exercise
## Requirements
Create a simple but __impressive__ (looks good, works well, has intuitive design, etc.) CRUD application that can do the following:

1) Retrieve employees from a REST API  
2) Display the employees in a React application  
3) Has UI mechanisms for creating and deleting employees  
4) Has API endpoints for creating and deleting employees  
5) Edit your version of the `README.md` file to explain to us what things you did, where you focussed your effort, etc.

Add employee and delete employee modals made with react component library Material UI.
Communications with server side made with axios.
Main App component consists of Title, AddEmployee and EmployeesList components.

Due to the fact that no db was used, the changes on the page doesn't affect json file so after the reset, page goes to the initial state.
I found few variants to solve this issue(localhost, fs.readFileSync) but it doesn't seem like a good one and not really useful to the real projects. So I left the functionality like that.
