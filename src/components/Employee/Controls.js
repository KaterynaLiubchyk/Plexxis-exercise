import React from "react";

const Controls = ({onUpdate, onDelete}) => (
    <div>
        <button onClick={onUpdate}>Update</button>
        <button onClick={onDelete}>Delete</button>
    </div> 
)

export default Controls;