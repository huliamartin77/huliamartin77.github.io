document.addEventListener('DOMContentLoaded', function () {
    const guineaPigButton = document.getElementById("menu-icon");
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll('.navbar ul li a');
    

    // Debugging logs to check if elements are loaded
    console.log("Page loaded");
    console.log("Guinea Pig Button:", guineaPigButton);
    console.log("Navbar:", navbar);

    // Check if elements exist
    if (!guineaPigButton || !navbar) {
        console.error("Elements not found");
        return;
    }

    // Function to play sound
    function playSound() {
        try {
            const audio = new Audio('https://www.soundjay.com/button/beep-07.mp3');
            audio.play();
        } catch (error) {
            console.error("Error playing sound:", error);
        }
    }

    // Function to create snowflakes
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('confetti');
        snowflake.style.left = Math.random() * 100 + 'vw';
        document.body.appendChild(snowflake);

        // Remove snowflake after animation
        setTimeout(() => snowflake.remove(), 3000);
    }

    // Function to toggle navbar and animate button
    function toggleMenu() {
        console.log("Hamburger button clicked");
        navbar.classList.toggle("active");
        guineaPigButton.classList.toggle("active");

        // Play sound and create snowflakes
        playSound();
        createSnowflake();

        // Change button text and style
        guineaPigButton.classList.add('animate-button');
        guineaPigButton.innerHTML = 'Wheek Wheek! 🎉';

        // Revert button state after 1.5 seconds
        setTimeout(() => {
            guineaPigButton.classList.remove('animate-button');
            guineaPigButton.innerHTML = `
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUdulyS7DoJSGwK3jiUTN74-7KVuhyyRkrCA&usqp=CAU" alt="Guinea Pig">
                <span class="button-text">CLICK ME</span>
            `;
        }, 1500);
    }

    // Event listener for hamburger button
    guineaPigButton.addEventListener('click', toggleMenu);

    // Event listeners for navigation links to close the menu
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            console.log("Navigation link clicked");
            navbar.classList.remove("active");
            guineaPigButton.classList.remove("active");
        });
    });
});



