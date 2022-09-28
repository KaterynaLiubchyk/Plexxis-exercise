import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function AddEmployeeModal({onAddEmployee}) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('')
  const [profession, setProfession] = React.useState('')
  const [code, setCode] = React.useState('')
  const [color, setColor] = React.useState('')
  const [city, setCity] = React.useState('')
  const [branch, setBranch] = React.useState('')
  const [assigned, setAssigned] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onUpdateClick = () => {
    setOpen(false);
  }

  const handleAdd = () => {
    const employee = {
      'name': name,
      'profession': profession,
      'code': code,
      'color': color,
      'city': city,
      'branch': branch,
      'assigned': assigned
    }
    console.log('employee===', employee)

    onAddEmployee(employee)
    onUpdateClick()
  }

  return (
    <div>
      <Button
        variant="outlined"
        color="secondary"
        onClick={handleClickOpen}>
        Add employee
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add employee</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setName(e.target.value)}
          />
             <TextField
            autoFocus
            margin="dense"
            id="code"
            label="Code"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setCode(e.target.value)}
          />
            <TextField
            autoFocus
            margin="dense"
            id="profession"
            label="Profession"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setProfession(e.target.value)}
          />
             <TextField
            autoFocus
            margin="dense"
            id="color"
            label="Color"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setColor(e.target.value)}
          />
               <TextField
            autoFocus
            margin="dense"
            id="city"
            label="City"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setCity(e.target.value)}
          />
               <TextField
            autoFocus
            margin="dense"
            id="branch"
            label="Branch"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setBranch(e.target.value)}
          />
           <FormGroup>
        <FormControlLabel
        label="Assigned"
         control={
            <Switch
              id="assigned"
              value="assigned"
              onChange={(e) => setAssigned(e.target.value)}
            />
          }
        />
        </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}