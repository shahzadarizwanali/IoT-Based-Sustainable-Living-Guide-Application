import React, { useEffect } from 'react'
import Chart from 'chart.js/auto';

let chartInstance = null;

function Dashboard() {


    useEffect(() => {
        var ctx = document.getElementById('chart');
        if (ctx) {
            var chartContext = ctx.getContext('2d');

            // Destroy existing chart instance if it exists
            if (chartInstance) {
                chartInstance.destroy();
            }

            // Create new chart instance and store it
            chartInstance = new Chart(chartContext, {
                type: 'bar',
                data: {
                    labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9'],
                    datasets: [
                        {
                            label: 'Series 1',
                            data: [3, 8, 16, 3, 8, 16, 4, 10, 5],
                            backgroundColor: 'lightblue',
                            barThickness: 50,
                        }
                    ]
                },
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            ticks: { color: 'white' },
                            stacked: true,
                            offset: true,
                            grid: { display: false },
                        },
                        y: {
                            ticks: { color: 'white', beginAtZero: true, max: 20, stepSize: 5 }
                        }
                    },
                    plugins: {
                        legend: {
                            labels: {
                                color: 'white',
                                boxWidth: 15,
                                boxHeight: 15
                            }
                        }
                    },
                    layout: {
                        padding: { left: 20, right: 20, top: 10, bottom: 10 }
                    }
                }
            });
        } else {
            console.error("Canvas element with ID 'chart' not found!");
        }

        // Cleanup function to destroy the chart when the component unmounts
        return () => {
            if (chartInstance) {
                chartInstance.destroy();
            }
        };
    }, []);


    return (
        <div>
            {/* bar chart and data analytics table */}
            <div className="container-fluid dashboard-container p-5">
                <div className="row">
                    <div className="col-md-10 chart-card  p-4 rounded-2 w-65">
                        <canvas id="chart"></canvas>
                    </div>
                    <div className="col-md-2 d-flex flex-column mt-2">
                        <div className="p-4 rounded-2 text-center w-100 h-50 d-flex align-items-center justify-content-center mb-2 position-relative flex-column fw-bold"
                            style={{ fontSize: "1.2rem", backgroundColor: "#444" }}>
                            <span
                                className="bg-white text-dark rounded-circle d-flex align-items-center justify-content-center fw-bold"
                                style={{ width: "60px", height: "60px", fontSize: "1.5rem" }}>0%</span>
                            <p>Eco-Score</p>
                        </div>
                        <div className="p-4 rounded-2 text-center w-100 h-50 d-flex align-items-center justify-content-center mb-2 position-relative flex-column fw-bold"
                            style={{ fontSize: "1.2rem", backgroundColor: "#444" }}>
                            <span
                                className="bg-white text-dark rounded-circle d-flex align-items-center justify-content-center fw-bold"
                                style={{ width: "60px", height: "60px", fontSize: "1.5rem" }}>0%</span>
                            <p>Carbon Footprints</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-10 card-container  p-4 rounded-2 w-65">
                        <h2 className="text-white fw-bold m-0 " style={{ textAlign: "center" }}>Data Analytics History</h2>
                        <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                            <table className="table table-dark mt-3" style={{ border: "2px solid #fff" }}>
                                <tr style={{ border: "2px solid #fff" }}>
                                    <td style={{ border: "1px solid #fff" }}></td>
                                    <td style={{ border: "2px solid #fff" }}></td>
                                    <td style={{ border: "2px solid #fff" }}></td>
                                </tr>
                                <tr style={{ border: "2px solid #fff" }}>
                                    <td style={{ border: "2px solid #fff" }}></td>
                                    <td style={{ border: "2px solid #fff" }}></td>
                                    <td style={{ border: "2px solid #fff" }}></td>
                                </tr>
                                <tr style={{ border: "2px solid #fff" }}>
                                    <td style={{ border: "2px solid #fff" }}></td>
                                    <td style={{ border: "2px solid #fff" }}></td>
                                    <td style={{ border: "2px solid #fff" }}></td>
                                </tr>
                                <tr style={{ border: "2px solid #fff" }}>
                                    <td style={{ border: "2px solid #fff" }}></td>
                                    <td style={{ border: "2px solid #fff" }}></td>
                                    <td style={{ border: "2px solid #fff" }}></td>
                                </tr>
                                <tr style={{ border: "2px solid #fff" }}>
                                    <td style={{ border: "2px solid #fff" }}></td>
                                    <td style={{ border: "2px solid #fff" }}></td>
                                    <td style={{ border: "2px solid #fff" }}></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-2 d-flex flex-column mt-2">
                        <div className="p-4 rounded-2 text-center w-100 h-50 d-flex align-items-center justify-content-center mb-2 position-relative flex-column fw-bold"
                            style={{ fontSize: "1.2rem", backgroundColor: "#444" }}>
                            <span className="bg-white rounded-circle d-flex align-items-center justify-content-center fw-bold"
                                style={{ width: "60px", height: "60px", fontSize: "1.5rem" }}>0%</span>
                            <p>Eco-Score</p>
                        </div>
                        <div className="p-4 rounded-2 text-center w-100 h-50 d-flex align-items-center justify-content-center mb-2 position-relative flex-column fw-bold"
                            style={{ fontSize: "1.2rem", backgroundColor: "#444" }}>
                            <span
                                className="bg-white text-dark rounded-circle d-flex align-items-center justify-content-center fw-bold"
                                style={{ width: "60px", height: "60px", fontSize: "1.5rem" }}>0%</span>
                            <p>Carbon Footprints</p>
                        </div>
                    </div>
                </div>
                {/* notifications */}
                <div id="notifications" className="notifications-dropdown">
                    <div className="d-flex justify-content-between p-2">
                        <strong>Notifications</strong>
                        <span className="text-primary" style={{ cursor: "pointer" }}>Mark all as read</span>
                    </div>
                    <div className="notification-item">
                        <div className="d-flex align-items-center gap-2">
                            <div className="notification-circle">90%</div>
                            <span><strong>Notifications 1</strong></span>
                        </div>
                        <div className="notification-dot"></div>
                    </div>
                    <div className="notification-item">
                        <div className="d-flex align-items-center gap-2">
                            <div className="notification-circle">50%</div>
                            <span><strong>Notifications 2</strong></span>
                        </div>
                        <div className="notification-dot"></div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Dashboard