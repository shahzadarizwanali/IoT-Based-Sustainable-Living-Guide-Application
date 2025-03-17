import React from 'react'

const Dashboard = () => {
    // useEffect(() => {
    //     if (window.Chart) {
    //         const ctx = document.getElementById("charts").getContext("2d");

    //         new window.Chart(ctx, {
    //             type: "bar",
    //             data: {
    //                 labels: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9"],
    //                 datasets: [
    //                     {
    //                         label: "Series 1",
    //                         data: [3, 8, 16, 3, 8, 16, 4, 10, 5],
    //                         backgroundColor: "lightblue",
    //                         barThickness: 50,
    //                     },
    //                     {
    //                         label: "Series 2",
    //                         data: [6, 14, 18, 6, 14, 18, 5, 11, 7],
    //                         backgroundColor: "lightblue",
    //                         barThickness: 50,
    //                     },
    //                 ],
    //             },
    //             options: {
    //                 responsive: true,
    //                 scales: {
    //                     x: {
    //                         ticks: { color: "white" },
    //                         stacked: true,
    //                         offset: true,
    //                         grid: { display: false },
    //                     },
    //                     y: {
    //                         ticks: { color: "white", beginAtZero: true, max: 20, stepSize: 5 },
    //                     },
    //                 },
    //                 plugins: {
    //                     legend: {
    //                         labels: {
    //                             color: "white",
    //                             boxWidth: 15,
    //                             boxHeight: 15,
    //                         },
    //                     },
    //                 },
    //                 layout: {
    //                     padding: {
    //                         left: 20,
    //                         right: 20,
    //                         top: 10,
    //                         bottom: 10,
    //                     },
    //                 },
    //             },
    //         });
    //     }
    // }, []);

    return (
        <div>
            <head>
                <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
                <script src="/assets/js/custom.js"></script>
            </head>
            {/* bar chart and data analytics table  */}
            <div class="container-fluid dashboard-container p-5">
                <div class="row">
                    <div class="col-md-10 chart-card  p-4 rounded-2 w-65">
                        <canvas id="charts"></canvas>
                    </div>
                    <div class="col-md-2 d-flex flex-column mt-2">
                        <div class="p-4 rounded-2 text-center w-100 h-50 d-flex align-items-center justify-content-center mb-2 position-relative flex-column fw-bold"
                            style={{ fontSize: "1.2rem", backgroundColor: "#444" }}>
                            <span
                                class="bg-white text-dark rounded-circle d-flex align-items-center justify-content-center fw-bold"
                                style={{ width: "60px", height: "60px", fontSize: "1.5rem" }}>0%</span>
                            <p>Eco-Score</p>
                        </div>
                        <div class="p-4 rounded-2 text-center w-100 h-50 d-flex align-items-center justify-content-center mb-2 position-relative flex-column fw-bold"
                            style={{ fontSize: "1.2rem", backgroundColor: "#444" }}>
                            <span
                                class="bg-white text-dark rounded-circle d-flex align-items-center justify-content-center fw-bold"
                                style={{ width: "60px", height: "60px", fontSize: "1.5rem" }}>0%</span>
                            <p>Carbon Footprints</p>
                        </div>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-md-10 card-container  p-4 rounded-2 w-65">
                        <h2 class="text-white fw-bold m-0 " style={{ textAlign: "center" }}>Data Analytics History</h2>
                        <div class="w-100 h-100 d-flex align-items-center justify-content-center">
                            <table class="table table-dark mt-3" style={{ border: "2px solid #fff" }}>
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
                                <tr style={{ border: "2px solid #fff" }}>
                                    <td style={{ border: "2px solid #fff" }}></td>
                                    <td style={{ border: "2px solid #fff" }}></td>
                                    <td style={{ border: "2px solid #fff" }}></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="col-md-2 d-flex flex-column mt-2">
                        <div class="p-4 rounded-2 text-center w-100 h-50 d-flex align-items-center justify-content-center mb-2 position-relative flex-column fw-bold"
                            style={{ fontSize: "1.2rem", backgroundColor: "#444" }}>
                            <span class="bg-white rounded-circle d-flex align-items-center justify-content-center fw-bold"
                                style={{ width: "60px", height: "60px", fontSize: "1.5rem" }}>0%</span>
                            <p>Eco-Score</p>
                        </div>
                        <div class="p-4 rounded-2 text-center w-100 h-50 d-flex align-items-center justify-content-center mb-2 position-relative flex-column fw-bold"
                            style={{ fontSize: "1.2rem", backgroundColor: "#444" }}>
                            <span
                                class="bg-white text-dark rounded-circle d-flex align-items-center justify-content-center fw-bold"
                                style={{ width: "60px", height: "60px", fontSize: "1.5rem" }}>0%</span>
                            <p>Carbon Footprints</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Dashboard