// Search Bar Function
function searchPage() {
    const text = document.body.innerText.toLowerCase();
    const input = document.querySelector(".search-input").value.toLowerCase();

    if (text.includes(input)) {
        alert("Text found on this page!");
    } else {
        alert("No match found.");
    }
}


// Featured images redirect
document.querySelectorAll('.featured .card').forEach(card => {
    card.addEventListener('click', () => {
        window.location.href = "products.html"; // Redirect to Products & Services page
    });
});

// Curator pics click behavior
document.querySelectorAll('.curator-card').forEach(card => {
    card.addEventListener('click', () => {
        // Toggle active card
        document.querySelectorAll('.curator-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});

// Scroll functionality for featured and curator sections
const featuredScroll = document.getElementById('featured-scroll');
const curatorScroll = document.getElementById('curator-scroll');

// Logo click -> redirect to homepage
const logo = document.getElementById('logo');
if (logo) {
    logo.addEventListener('click', () => {
        window.location.href = "index.html"; // redirects to homepage
    });
}