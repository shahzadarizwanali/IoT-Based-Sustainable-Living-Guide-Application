import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';
import BugReportIcon from '@mui/icons-material/BugReport';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import TimelineIcon from '@mui/icons-material/Timeline';
import InsightsIcon from '@mui/icons-material/Insights';

const updates = [
    {
        icon: <NewReleasesIcon color="primary" sx={{ fontSize: 40, cursor: "pointer" }} />,
        title: 'New Pollutant Data Available!',
        description: "We've added VOC tracking using new sensors. Visit the dashboard to explore updated data.",
        date: 'April 20, 2025'
    },
    {
        icon: <BugReportIcon color="error" sx={{ fontSize: 40, cursor: "pointer" }} />,
        title: 'Critical Bug Fixes',
        description: 'Resolved dashboard graph lag and fixed login glitches for Android users.',
        date: 'April 15, 2025'
    },
    {
        icon: <UpdateIcon color="secondary" sx={{ fontSize: 40, cursor: "pointer" }} />,
        title: 'UI Improvements',
        description: 'Refreshed the layout and added more intuitive icons for better user experience.',
        date: 'April 10, 2025'
    },
    {
        icon: <AnnouncementIcon color="info" sx={{ fontSize: 40, cursor: "pointer" }} />,
        title: 'Sustainability Tips Series',
        description: 'A new weekly series featuring actionable tips to reduce your carbon footprint has launched.',
        date: 'April 5, 2025'
    },
    {
        icon: <TimelineIcon color="success" sx={{ fontSize: 40, cursor: "pointer" }} />,
        title: 'Linear Regression Predictions Added',
        description: 'The app now predicts future carbon footprint trends based on real-time sensor data.',
        date: 'March 30, 2025'
    },
    {
        icon: <LightbulbIcon color="warning" sx={{ fontSize: 40, cursor: "pointer" }} />,
        title: 'Smart Recommendations Activated',
        description: 'Get tailored suggestions when pollutant levels exceed safety limits in your area.',
        date: 'March 25, 2025'
    },
    {
        icon: <InsightsIcon color="secondary" sx={{ fontSize: 40, cursor: "pointer" }} />,
        title: 'Insights Dashboard Upgraded',
        description: 'New graphs and insights show pollutant trends, comparison, and advice on sustainable actions.',
        date: 'March 20, 2025'
    }
];

const WhatsNew = () => {
    return (
        <Box sx={{ padding: 4, backgroundColor: '#f4f6f8' }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                🚀 What’s New
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Stay updated with the latest changes, features, and improvements.
            </Typography>
            <Grid container spacing={3} mt={2}>
                {updates.map((update, index) => (
                    <Grid item xs={12} md={6} lg={4} key={index}>
                        <Card elevation={3} sx={{ borderRadius: 3, transition: '0.3s', '&:hover': { boxShadow: 8 } }}>
                            <CardContent>
                                <Box display="flex" alignItems="center" mb={1}>
                                    {update.icon}
                                    <Box ml={2}>
                                        <Typography variant="h6" sx={{ fontWeight: 600, cursor: "pointer" }}>{update.title}</Typography>
                                        <Typography variant="caption" color="textSecondary">{update.date}</Typography>
                                    </Box>
                                </Box>
                                <Typography variant="body2" color="textSecondary">
                                    {update.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default WhatsNew;
