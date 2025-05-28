import React, { useState } from 'react';
import Sidebar from './Sidebar.jsx';
import "./Sidebar.css";
import './Manageuser.css';
import { 
  Typography, Table, TableHead, TableBody, TableRow, TableCell,
  TextField, Button, Modal, Box 
} from '@mui/material';

function Manageuser() {
  // State for users; initially an empty array
  const [users, setUsers] = useState([]);
  // State for Add User modal open/close
  const [openAddModal, setOpenAddModal] = useState(false);
  // State for new user form (for add user modal)
  const [userForm, setUserForm] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });
  // State to track which user is being edited (by id)
  const [editingUserId, setEditingUserId] = useState(null);
  // State for edit user fields
  const [editForm, setEditForm] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  // Handlers for opening/closing the Add User modal
  const handleAddModalOpen = () => setOpenAddModal(true);
  const handleAddModalClose = () => setOpenAddModal(false);

  // Handle changes for the add user form
  const handleUserFormChange = (e) => {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
  };

  // Handle changes for the edit form
  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditForm({ ...editForm, [name]: value });
  };

  // Add new user on form submission
  const handleAddUser = (e) => {
    e.preventDefault();
    if (userForm.password !== userForm.confirmPassword) {
      alert("Password and Confirm Password do not match.");
      return;
    }
    // Create a new user object (using a time-based id)
    const newUser = { id: Date.now(), ...userForm };
    setUsers([...users, newUser]);
    setUserForm({ username: '', password: '', confirmPassword: '' });
    handleAddModalClose();
  };

  // Delete a user by filtering out the one with the matching id
  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  // When Edit is clicked, set the editing user and initialize the edit form
  const handleEditUser = (user) => {
    setEditingUserId(user.id);
    setEditForm({
      username: user.username,
      password: user.password,
      confirmPassword: user.password,
    });
  };

  // Save the edited user
  const handleSaveEdit = (id) => {
    if (editForm.password !== editForm.confirmPassword) {
      alert("Password and Confirm Password do not match.");
      return;
    }
    setUsers(users.map(user => user.id === id ? { id, ...editForm } : user));
    setEditingUserId(null);
  };

  // Modal styling
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="manage-container">
      <Sidebar />
      <div className="content">
        <Typography variant="h2" sx={{ mb: 2 }}>MANAGE USERS</Typography>
        <Button variant="contained" color="primary" onClick={handleAddModalOpen}>
          Add User
        </Button>
        <Table className="table" sx={{ mt: 2 }}>
          <TableHead>
            <TableRow>
              <TableCell><b>Username</b></TableCell>
              <TableCell><b>Password</b></TableCell>
              <TableCell><b>Confirm Password</b></TableCell>
              <TableCell><b>Actions</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.id}>
                <TableCell>
                  {editingUserId === user.id ? (
                    <TextField 
                      name="username" 
                      value={editForm.username} 
                      onChange={handleEditFormChange} 
                    />
                  ) : (
                    user.username
                  )}
                </TableCell>
                <TableCell>
                  {editingUserId === user.id ? (
                    <TextField 
                      name="password" 
                      type="password" 
                      value={editForm.password} 
                      onChange={handleEditFormChange} 
                    />
                  ) : (
                    user.password
                  )}
                </TableCell>
                <TableCell>
                  {editingUserId === user.id ? (
                    <TextField 
                      name="confirmPassword" 
                      type="password" 
                      value={editForm.confirmPassword} 
                      onChange={handleEditFormChange} 
                    />
                  ) : (
                    user.confirmPassword
                  )}
                </TableCell>
                <TableCell>
                  {editingUserId === user.id ? (
                    <Button 
                      variant="contained" 
                      color="primary" 
                      onClick={() => handleSaveEdit(user.id)}
                    >
                      Save
                    </Button>
                  ) : (
                    <>
                      <Button 
                        variant="contained" 
                        color="secondary" 
                        onClick={() => handleEditUser(user)}
                      >
                        Edit
                      </Button>
                      <Button 
                        variant="outlined" 
                        color="error" 
                        onClick={() => handleDeleteUser(user.id)} 
                        sx={{ ml: 1 }}
                      >
                        Delete
                      </Button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* Add User Modal */}
        <Modal
          open={openAddModal}
          onClose={handleAddModalClose}
          aria-labelledby="add-user-title"
          aria-describedby="add-user-description"
        >
          <Box sx={modalStyle}>
            <Typography id="add-user-title" variant="h6" gutterBottom>
              Add User
            </Typography>
            <form onSubmit={handleAddUser}>
              <TextField
                fullWidth
                name="username"
                label="Username"
                value={userForm.username}
                onChange={handleUserFormChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={userForm.password}
                onChange={handleUserFormChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                value={userForm.confirmPassword}
                onChange={handleUserFormChange}
                margin="normal"
                required
              />
              <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                Add User
              </Button>
            </form>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default Manageuser;