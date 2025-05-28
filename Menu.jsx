import React, { useState } from 'react';
import { 
  Modal, Box, Typography, TextField, Button, Checkbox, 
  FormControlLabel, Table, TableHead, TableRow, TableCell, TableBody 
} from '@mui/material';
import Sidebar from './Sidebar.jsx';
import "./Sidebar.css";
import './Menu.css';

function Menu() {
  // State for menu items (initially empty)
  const [menuItems, setMenuItems] = useState([]);
  // State for Add Menu modal open/close
  const [openAddModal, setOpenAddModal] = useState(false);
  // State for new menu form (for add menu modal)
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    photo: null,
    available: false,
  });
  // State to track which menu item is being edited (by id) 
  const [editingMenuId, setEditingMenuId] = useState(null);
  // State for edit menu fields
  const [editForm, setEditForm] = useState({
    name: '',
    price: '',
    description: '',
    photo: null,
    available: false,
  });

  // Handlers for opening/closing the Add Menu modal
  const handleAddModalOpen = () => setOpenAddModal(true);
  const handleAddModalClose = () => setOpenAddModal(false);

  // Handle changes for the add menu form
  const handleFormChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle changes for the edit form
  const handleEditFormChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setEditForm({ ...editForm, [name]: checked });
    } else if (type === 'file') {
      setEditForm({ ...editForm, [name]: files[0] });
    } else {
      setEditForm({ ...editForm, [name]: value });
    }
  };

  // Add new menu item on form submission
  const handleAddMenu = (e) => {
    e.preventDefault();
    const newMenu = {
      id: Date.now(),
      name: formData.name,
      price: formData.price,
      description: formData.description,
      // If a photo is selected, create an object URL (in a real app, you would upload the file)
      photo: formData.photo ? URL.createObjectURL(formData.photo) : '',
      available: formData.available,
    };
    // Add new menu item into state
    setMenuItems([...menuItems, newMenu]);
    // Reset the form
    setFormData({
      name: '',
      price: '',
      description: '',
      photo: null,
      available: false,
    });
    handleAddModalClose();
  };

  // Delete a menu item by filtering out the matching id
  const handleDeleteMenu = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  // When Edit is clicked, set the editing menu item and initialize the edit form
  const handleEditMenu = (item) => {
    setEditingMenuId(item.id);
    setEditForm({
      name: item.name,
      price: item.price,
      description: item.description,
      photo: item.photo,
      available: item.available,
    });
  };

  // Save the edited menu item
  const handleSaveEdit = (id) => {
    setMenuItems(menuItems.map(item => 
      item.id === id 
        ? { 
            id, 
            ...editForm, 
            // If a new photo file is chosen, create an object URL; if not, keep existing URL 
            photo: editForm.photo && typeof editForm.photo !== 'string' 
                      ? URL.createObjectURL(editForm.photo) 
                      : editForm.photo 
          } 
        : item
    ));
    setEditingMenuId(null);
  };

  // Modal style (using MUI's Box style prop)
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="menu-container">
      <Sidebar />
      <div className="menu-content">
        <Typography variant="h2" sx={{ mb: 2 }}>Menu</Typography>
        <Button variant="contained" color="primary" onClick={handleAddModalOpen}>
          Add Menu
        </Button>
        
        {/* Table with menu items */}
        <Table className="table" sx={{ mt: 2 }}>
          <TableHead>
            <TableRow>
              <TableCell><b>Name</b></TableCell>
              <TableCell><b>Price</b></TableCell>
              <TableCell><b>Photo</b></TableCell>
              <TableCell><b>Description</b></TableCell>
              <TableCell><b>Available</b></TableCell>
              <TableCell><b>Action</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {menuItems.map(item => (
              <TableRow key={item.id}>
                <TableCell>
                  {editingMenuId === item.id ? (
                    <TextField 
                      name="name" 
                      value={editForm.name} 
                      onChange={handleEditFormChange} 
                    />
                  ) : (
                    item.name
                  )}
                </TableCell>
                <TableCell>
                  {editingMenuId === item.id ? (
                    <TextField 
                      name="price" 
                      type="number" 
                      value={editForm.price} 
                      onChange={handleEditFormChange} 
                    />
                  ) : (
                    `$${Number(item.price).toFixed(2)}`
                  )}
                </TableCell>
                <TableCell>
                  {editingMenuId === item.id ? (
                    <Button variant="contained" component="label">
                      Upload Photo
                      <input type="file" name="photo" hidden onChange={handleEditFormChange} />
                    </Button>
                  ) : (
                    item.photo ? (
                      <img 
                        src={item.photo} 
                        alt={item.name} 
                        style={{ width: '100px', height: 'auto' }} 
                      />
                    ) : "No Photo"
                  )}
                </TableCell>
                <TableCell>
                  {editingMenuId === item.id ? (
                    <TextField 
                      name="description" 
                      value={editForm.description} 
                      onChange={handleEditFormChange} 
                    />
                  ) : (
                    item.description
                  )}
                </TableCell>
                <TableCell>
                  {editingMenuId === item.id ? (
                    <FormControlLabel 
                      control={
                        <Checkbox 
                          name="available" 
                          checked={editForm.available} 
                          onChange={handleEditFormChange} 
                        />
                      }
                      label="Available"
                    />
                  ) : (
                    item.available ? "Yes" : "No"
                  )}
                </TableCell>
                <TableCell>
                  {editingMenuId === item.id ? (
                    <Button 
                      variant="contained" 
                      color="primary" 
                      onClick={() => handleSaveEdit(item.id)}
                    >
                      Save
                    </Button>
                  ) : (
                    <>
                      <Button 
                        variant="contained" 
                        color="secondary" 
                        onClick={() => handleEditMenu(item)}
                      >
                        Edit
                      </Button>
                      <Button 
                        variant="outlined" 
                        color="error" 
                        onClick={() => handleDeleteMenu(item.id)} 
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
        
        {/* Add Menu Modal */}
        <Modal
          open={openAddModal}
          onClose={handleAddModalClose}
          aria-labelledby="add-menu-title"
          aria-describedby="add-menu-description"
        >
          <Box sx={modalStyle}>
            <Typography id="add-menu-title" variant="h6" component="h2" gutterBottom>
              Add Menu
            </Typography>
            <form onSubmit={handleAddMenu}>
              <TextField 
                fullWidth 
                name="name" 
                label="Name" 
                value={formData.name} 
                onChange={handleFormChange} 
                margin="normal" 
                required 
              />
              <TextField 
                fullWidth 
                name="price" 
                label="Price" 
                type="number" 
                value={formData.price} 
                onChange={handleFormChange} 
                margin="normal" 
                required 
              />
              <TextField 
                fullWidth 
                name="description" 
                label="Description" 
                value={formData.description} 
                onChange={handleFormChange} 
                margin="normal" 
                required 
              />
              <Button variant="contained" component="label" sx={{ mt: 2 }}>
                Upload Photo
                <input type="file" name="photo" hidden onChange={handleFormChange} />
              </Button>
              <FormControlLabel 
                control={
                  <Checkbox 
                    name="available" 
                    checked={formData.available} 
                    onChange={handleFormChange} 
                  />
                }
                label="Available"
                sx={{ mt: 2 }}
              />
              <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                Add Menu
              </Button>
            </form>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default Menu;