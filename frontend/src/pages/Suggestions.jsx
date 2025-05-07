import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, TextField, Button, Snackbar, Alert } from '@mui/material';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const Suggestions = () => {
    const [suggestion, setSuggestion] = useState('');
    const [open, setOpen] = useState(false);

    const handleSubmit = () => {
        if (suggestion.trim()) {
            // Normally you would send this to your Django backend API
            console.log('Suggestion submitted:', suggestion);
            setOpen(true);
            setSuggestion('');
        }
    };

    return (
        <Box sx={{ padding: 4, backgroundColor: '#f9f9f9' }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                💡 Suggestions & Feedback
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Share your thoughts and help us improve the Sustainable Living Guide App!
            </Typography>

            <Grid container spacing={3} mt={2}>
                <Grid item xs={12} md={4}>
                    <Card elevation={3} sx={{ borderRadius: 3 }}>
                        <CardContent>
                            <Box display="flex" alignItems="center" mb={1}>
                                <FeedbackIcon color="primary" sx={{ fontSize: 40 }} />
                                <Typography variant="h6" ml={2} sx={{ fontWeight: 600 }}>
                                    General Feedback
                                </Typography>
                            </Box>
                            <Typography variant="body2" color="textSecondary">
                                Tell us what you like, what you'd improve, or anything else on your mind!
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card elevation={3} sx={{ borderRadius: 3 }}>
                        <CardContent>
                            <Box display="flex" alignItems="center" mb={1}>
                                <LightbulbIcon color="warning" sx={{ fontSize: 40 }} />
                                <Typography variant="h6" ml={2} sx={{ fontWeight: 600 }}>
                                    Feature Requests
                                </Typography>
                            </Box>
                            <Typography variant="body2" color="textSecondary">
                                Got an idea for a new feature or improvement? We’d love to hear it!
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card elevation={3} sx={{ borderRadius: 3 }}>
                        <CardContent>
                            <Box display="flex" alignItems="center" mb={1}>
                                <TipsAndUpdatesIcon color="success" sx={{ fontSize: 40 }} />
                                <Typography variant="h6" ml={2} sx={{ fontWeight: 600 }}>
                                    Sustainability Tips
                                </Typography>
                            </Box>
                            <Typography variant="body2" color="textSecondary">
                                Do you have personal tips or practices to share? Contribute and inspire others!
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Box mt={5}>
                <Typography variant="h6" gutterBottom>
                    📝 Submit your suggestion
                </Typography>
                <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Write your suggestion here..."
                    variant="outlined"
                    value={suggestion}
                    onChange={(e) => setSuggestion(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 2 }}>
                    Submit
                </Button>
            </Box>

            <Snackbar open={open} autoHideDuration={4000} onClose={() => setOpen(false)}>
                <Alert severity="success" variant="filled" onClose={() => setOpen(false)}>
                    Suggestion submitted successfully!
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Suggestions;
