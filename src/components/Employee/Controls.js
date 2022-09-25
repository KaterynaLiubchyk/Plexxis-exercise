import React from "react";
import UpdateUserModal from '../Modals/UpdateUserModal'
import DeleteUserModal from '../Modals/DeleteUserModal'


const Controls = ({onUpdate, onDelete, employee}) => (
    <div>
        <UpdateUserModal onUpdate={onUpdate} employee={employee}/>
        <DeleteUserModal onDelete={onDelete} employee={employee}/>
    </div> 
)

export default Controls;