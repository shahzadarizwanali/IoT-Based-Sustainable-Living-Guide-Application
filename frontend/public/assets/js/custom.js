

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
// document.addEventListener('click', function (event) {
//     const searchContainer = document.querySelector('.search-container');
//     const searchIcon = document.querySelector('.fa-search');

//     if (!searchContainer.contains(event.target) && !searchIcon.contains(event.target)) {
//         // Hide the search bar if clicked outside
//         searchContainer.classList.add('d-none');
//     }
// });
