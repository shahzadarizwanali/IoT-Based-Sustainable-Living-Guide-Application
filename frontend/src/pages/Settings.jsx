import React, { useState } from "react";
import {
    Box,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    MenuItem,
    Avatar,
    IconButton,
    Divider,
    Snackbar,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    InputAdornment
} from "@mui/material";
import { PhotoCamera, Edit, Lock, Visibility, VisibilityOff } from "@mui/icons-material";

function Settings() {
    // States
    const [formData, setFormData] = useState({
        name: "Rizwan Ali",
        email: "rizwan@example.com",
        phone: "0320-2569899",
        profile: null,
    });

    const [editable, setEditable] = useState({
        name: false,
        email: false,
        phone: false,
    });

    const [imagePreview, setImagePreview] = useState(null);
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [openPasswordDialog, setOpenPasswordDialog] = useState(false);
    const [passwords, setPasswords] = useState({ current: "", new: "" });
    const [showPassword, setShowPassword] = useState(false);

    // Handlers
    const handleEdit = (field) => {
        setEditable((prev) => ({ ...prev, [field]: true }));
    };

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prev) => ({ ...prev, profile: file }));
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSave = () => {
        setEditable({ name: false, email: false, phone: false });
        setShowSnackbar(true);
    };

    const handleCancel = () => {
        setFormData({
            name: "Rizwan Ali",
            email: "rizwan@example.com",
            phone: "0320-2569899",
            profile: null,
        });
        setImagePreview(null);
        setEditable({ name: false, email: false, phone: false });
    };

    const handlePasswordChange = () => {
        setOpenPasswordDialog(false);
        setPasswords({ current: "", new: "" });
        setShowSnackbar(true);
    };

    return (
        <Box sx={{ p: 4 }}>
            {/* Main Flex Layout */}
            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4}>
                {/* LEFT: Profile */}
                <Box sx={{ width: { xs: '100%', md: '60%' } }}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Profile & Account
                            </Typography>
                            <Divider sx={{ mb: 2 }} />

                            {/* Profile Photo Upload */}
                            <Box display="flex" alignItems="center" gap={2} mb={3}>
                                <Avatar
                                    sx={{ width: 64, height: 64 }}
                                    src={imagePreview}
                                >
                                    {!imagePreview && "RA"}
                                </Avatar>
                                <Box>
                                    <Typography variant="subtitle1">Upload Profile Photo</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        This helps personalize your account.
                                    </Typography>
                                    <IconButton color="primary" component="label">
                                        <PhotoCamera />
                                        <input hidden accept="image/*" type="file" onChange={handleImageUpload} />
                                    </IconButton>
                                </Box>
                            </Box>

                            {/* Editable Fields */}
                            {["name", "email", "phone"].map((field) => (
                                <Box key={field} mb={2}>
                                    <Typography variant="subtitle2" gutterBottom>
                                        {field.charAt(0).toUpperCase() + field.slice(1)}
                                    </Typography>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        {editable[field] ? (
                                            <TextField
                                                fullWidth
                                                value={formData[field]}
                                                onChange={(e) => handleChange(field, e.target.value)}
                                                size="small"
                                            />
                                        ) : (
                                            <>
                                                <Typography>{formData[field]}</Typography>
                                                <Button
                                                    variant="outlined"
                                                    size="small"
                                                    startIcon={<Edit />}
                                                    onClick={() => handleEdit(field)}
                                                >
                                                    Edit
                                                </Button>
                                            </>
                                        )}
                                    </Box>
                                </Box>
                            ))}

                            {/* Password */}
                            <Box mt={3}>
                                <Typography variant="subtitle2" gutterBottom>Password</Typography>
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <Typography>************</Typography>
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        color="error"
                                        startIcon={<Lock />}
                                        onClick={() => setOpenPasswordDialog(true)}
                                    >
                                        Change
                                    </Button>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>

                {/* RIGHT: Preferences & Accessibility */}
                <Box sx={{ width: { xs: '100%', md: '40%' }, display: 'flex', flexDirection: 'column', gap: 3 }}>
                    {/* Preferences */}
                    <Card sx={{ flex: 1 }}>
                        <CardContent>
                            <Typography variant="h6">App Preferences</Typography>
                            <Divider sx={{ my: 2 }} />
                            <TextField fullWidth select label="Theme" defaultValue="Light" margin="normal">
                                <MenuItem value="Light">Light</MenuItem>
                                <MenuItem value="Dark">Dark</MenuItem>
                                <MenuItem value="System">System Default</MenuItem>
                            </TextField>
                            <TextField fullWidth select label="Notifications" defaultValue="All" margin="normal">
                                <MenuItem value="All">All</MenuItem>
                                <MenuItem value="Important">Important Only</MenuItem>
                                <MenuItem value="None">None</MenuItem>
                            </TextField>
                        </CardContent>
                    </Card>

                    {/* Accessibility */}
                    <Card sx={{ flex: 1 }}>
                        <CardContent>
                            <Typography variant="h6">Accessibility Settings</Typography>
                            <Divider sx={{ my: 2 }} />
                            <TextField fullWidth select label="Text Size" defaultValue="Default" margin="normal">
                                <MenuItem value="Default">Default</MenuItem>
                                <MenuItem value="Large">Large</MenuItem>
                                <MenuItem value="XL">Extra Large</MenuItem>
                            </TextField>
                            <TextField fullWidth select label="Contrast" defaultValue="Standard" margin="normal">
                                <MenuItem value="Standard">Standard</MenuItem>
                                <MenuItem value="High">High Contrast</MenuItem>
                            </TextField>
                        </CardContent>
                    </Card>
                </Box>
            </Box>

            {/* Action Buttons */}
            <Box display="flex" justifyContent="flex-end" mt={4} gap={2}>
                <Button variant="outlined" onClick={handleCancel}>Cancel</Button>
                <Button variant="contained" color="success" onClick={handleSave}>Save Changes</Button>
            </Box>

            {/* Snackbar */}
            <Snackbar
                open={showSnackbar}
                autoHideDuration={3000}
                onClose={() => setShowSnackbar(false)}
                message="Changes saved!"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            />

            {/* Password Dialog */}
            <Dialog open={openPasswordDialog} onClose={() => setOpenPasswordDialog(false)}>
                <DialogTitle>Change Password</DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth
                        type={showPassword ? "text" : "password"}
                        label="Current Password"
                        value={passwords.current}
                        onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
                        margin="normal"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                    <TextField
                        fullWidth
                        type={showPassword ? "text" : "password"}
                        label="New Password"
                        value={passwords.new}
                        onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
                        margin="normal"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenPasswordDialog(false)}>Cancel</Button>
                    <Button onClick={handlePasswordChange} variant="contained" color="primary">Update</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default Settings;
