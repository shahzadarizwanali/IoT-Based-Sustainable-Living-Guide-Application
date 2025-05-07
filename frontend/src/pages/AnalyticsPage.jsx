import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const AnalyticsPage = () => {
    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        const fetchForecast = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/notifications/');
                setForecast(response.data);
            } catch (error) {
                console.error('Error fetching forecasted data:', error);
            }
        };

        fetchForecast();
    }, []);

    if (!forecast || forecast.length === 0) {
        return <p>Loading forecasted data...</p>;
    }

    // Prepare the data for the line chart
    const data = {
        labels: forecast.map(item => item.date),  // Use the day names for the x-axis
        datasets: [
            {
                label: 'Forecasted Carbon Footprint Index',
                data: forecast.map(item => item.percentage),  // Use the percentage for the y-axis
                borderColor: '#FF5722',
                backgroundColor: '#FFCCBC',
                tension: 0.4,
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: '7-Day Forecasted Pollution Index',
                font: { size: 18 }
            },
            legend: {
                display: true,
                position: 'bottom'
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,  // Ensure the y-axis goes from 0 to 100%
            },
        },
    };

    return (
        <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '30px' }}>Environmental Forecast Analytics</h2>

            {/* 🟢 Forecasted Carbon Footprint Cards (Icons, Time, Values) */}
            <div style={{ display: 'flex', overflowX: 'auto', gap: '16px', marginBottom: '30px' }}>
                {forecast.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            minWidth: '140px',
                            padding: '16px',
                            backgroundColor: item.percentage < 50 ? '#FFCDD2' : item.percentage < 75 ? '#FFF9C4' : '#C8E6C9',
                            borderRadius: '12px',
                            textAlign: 'center',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                        }}
                    >
                        <div style={{ fontSize: '28px' }}>
                            {item.percentage < 50 ? '🌱' : item.percentage < 75 ? '⚠️' : '🔥'}
                        </div>
                        <div style={{ fontWeight: 'bold', fontSize: '14px', marginTop: '8px' }}>
                            {item.date}
                        </div>
                        <div style={{ fontSize: '12px', color: 'gray' }}>{(index + 1) * 10} minutes later</div>
                        <div style={{ fontSize: '16px', marginTop: '6px' }}>
                            {item.percentage.toFixed(1)}%
                        </div>
                    </div>
                ))}
            </div>

            {/* 🔵 Line Chart */}
            <Line data={data} options={options} />
        </div>
    );
};

export default AnalyticsPage;
