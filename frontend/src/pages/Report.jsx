import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, TextField, Button, Snackbar, Alert, MenuItem } from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import PlaceIcon from '@mui/icons-material/Place';
import axios from 'axios'

const ReportContent = () => {
    const [reportData, setReportData] = useState({
        category: '',
        location: '',
        description: ''
    });
    const [open, setOpen] = useState(false);

    const categories = [
        'High Pollution Level',
        'Illegal Waste Dumping',
        'Industrial Emissions',
        'Other Environmental Issue'
    ];

    const handleChange = (e) => {
        setReportData({ ...reportData, [e.target.name]: e.target.value });
    };

    // const handleSubmit = () => {
    //     if (reportData.category && reportData.location && reportData.description) {
    //         console.log('Report Submitted:', reportData);
    //         setOpen(true);
    //         setReportData({ category: '', location: '', description: '' });
    //     }
    // };
    const handleSubmit = async () => {
        if (reportData.category && reportData.location && reportData.description) {
            try {
                const response = await axios.post('http://localhost:8000/api/submit-report/', reportData);
                console.log('Report submitted:', response.data);
                setOpen(true);
                setReportData({ category: '', location: '', description: '' });
            } catch (error) {
                console.error('Submission error:', error);
            }
        }
    };

    return (
        <Box sx={{ padding: 4, backgroundColor: '#f0f4f8' }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                🚨 Report Environmental Issues
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Help us maintain sustainability by reporting serious concerns in your area.
            </Typography>

            <Grid container spacing={3} mt={2}>
                <Grid item xs={12} md={4}>
                    <Card elevation={3} sx={{ borderRadius: 3 }}>
                        <CardContent>
                            <Box display="flex" alignItems="center" mb={1}>
                                <CloudIcon color="error" sx={{ fontSize: 40 }} />
                                <Typography variant="h6" ml={2} sx={{ fontWeight: 600 }}>
                                    Pollution Alerts
                                </Typography>
                            </Box>
                            <Typography variant="body2" color="textSecondary">
                                Report unusually high pollution levels in your neighborhood for prompt investigation.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card elevation={3} sx={{ borderRadius: 3 }}>
                        <CardContent>
                            <Box display="flex" alignItems="center" mb={1}>
                                <WarningAmberIcon color="warning" sx={{ fontSize: 40 }} />
                                <Typography variant="h6" ml={2} sx={{ fontWeight: 600 }}>
                                    Hazardous Activity
                                </Typography>
                            </Box>
                            <Typography variant="body2" color="textSecondary">
                                Notify us of any suspicious environmental damage, hazardous disposal, or emissions.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card elevation={3} sx={{ borderRadius: 3 }}>
                        <CardContent>
                            <Box display="flex" alignItems="center" mb={1}>
                                <PlaceIcon color="primary" sx={{ fontSize: 40 }} />
                                <Typography variant="h6" ml={2} sx={{ fontWeight: 600 }}>
                                    Local Reports
                                </Typography>
                            </Box>
                            <Typography variant="body2" color="textSecondary">
                                Share specific environmental concerns from your area to contribute valuable data.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Box mt={5}>
                <Typography variant="h6" gutterBottom>
                    📝 Submit Your Report
                </Typography>
                <TextField
                    select
                    fullWidth
                    label="Category"
                    name="category"
                    value={reportData.category}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                >
                    {categories.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    fullWidth
                    label="Location"
                    name="location"
                    value={reportData.location}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                />

                <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Description"
                    name="description"
                    value={reportData.description}
                    onChange={handleChange}
                />

                <Button variant="contained" color="error" onClick={handleSubmit} sx={{ mt: 2 }}>
                    Submit Report
                </Button>
            </Box>

            <Snackbar open={open} autoHideDuration={4000} onClose={() => setOpen(false)}>
                <Alert severity="success" variant="filled" onClose={() => setOpen(false)}>
                    Report submitted successfully!
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default ReportContent;