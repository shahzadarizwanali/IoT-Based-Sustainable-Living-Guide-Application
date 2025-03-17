

// owl.owlcarousel2_filter

$('.owl-filter-bar').on('click', '.item', function (e) {
    var $items = $('.owl-filter-bar a')
    var $item = $(this);
    var filter = $item.data('owl-filter')
    $items.removeClass("active");
    $item.addClass("active");
    owl.owlcarousel2_filter(filter);

    e.preventDefault();
})
/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

var ctx = document.getElementById('charts').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9'], // 9 items
        datasets: [
            {
                label: 'Series 1',
                data: [3, 8, 16, 3, 8, 16, 4, 10, 5], // 9 data points corresponding to 9 items
                backgroundColor: 'lightblue', // Same color for both bars
                barThickness: 50, // Fixed bar width
            },
            {
                label: 'Series 2',
                data: [6, 14, 18, 6, 14, 18, 5, 11, 7], // 9 data points corresponding to 9 items
                backgroundColor: 'lightblue', // Same color for both bars
                barThickness: 50, // Fixed bar width
            }
        ]
    },
    options: {
        responsive: true, // Make the chart responsive
        // maintainAspectRatio: false, // Disable aspect ratio maintenance to allow resizing
        scales: {
            x: {
                ticks: { color: 'white' },
                stacked: true, // Stack bars on top of each other for each item
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
            padding: {
                left: 20,
                right: 20,
                top: 10,
                bottom: 10
            }
        }
    }
});

function toggleNotifications() {
    var notifications = document.getElementById("notifications");
    notifications.style.display = notifications.style.display === "none" || notifications.style.display === "" ? "block" : "none";
}

function toggleProfileMenu() {
    var ProfileMenu = document.getElementById("ProfileMenu");
    ProfileMenu.style.display = ProfileMenu.style.display === "none" || ProfileMenu.style.display === "" ? "block" : "none";
}

function toggleNewProfile() {
    var newProfile = document.getElementById("newProfile");
    newProfile.style.display = newProfile.style.display === "none" || newProfile.style.display === "" ? "block" : "none";
}

window.onclick = function (event) {
    const profileMenu = document.getElementById("profileMenu");
    if (!event.target.matches('.profile-dropdown, .profile-dropdown *')) {
        if (profileMenu && profileMenu.style.display === "block") {
            profileMenu.style.display = "none";
        }
    }
}


// Function to toggle the visibility of the search bar
function toggleSearch() {
    const searchContainer = document.querySelector('.search-container');
    const searchIcon = document.querySelector('.fa-search');

    // Toggle the visibility of the search bar
    searchContainer.classList.toggle('d-none');

    // If search bar is visible, focus the input
    if (!searchContainer.classList.contains('d-none')) {
        searchContainer.querySelector('input').focus();
    }
}

// Close search bar if clicked outside (optional)
document.addEventListener('click', function (event) {
    const searchContainer = document.querySelector('.search-container');
    const searchIcon = document.querySelector('.fa-search');

    if (!searchContainer.contains(event.target) && !searchIcon.contains(event.target)) {
        // Hide the search bar if clicked outside
        searchContainer.classList.add('d-none');
    }
});
