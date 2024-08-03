document.addEventListener('DOMContentLoaded', () => {
    const shopNowButton = document.getElementById('btn');

    if (shopNowButton) {
        shopNowButton.addEventListener('click', () => {
            window.location.href = 'registration.html'; // Redirect to registration page
        });
    }
});
