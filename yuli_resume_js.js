document.addEventListener('DOMContentLoaded', function () {
    const guineaPigButton = document.getElementById('guineaPigButton');

    if (guineaPigButton) {
        guineaPigButton.addEventListener('click', function () {
            // Open Instagram first
            openInstagram();

            // Add animation and change button text
            guineaPigButton.classList.add('animate-button');
            guineaPigButton.innerHTML = 'Wheek Wheek! 🎉';

            // Play sound and launch confetti
            playSound();
            createSnowflake();

            // Revert button state after 1.5 seconds
            setTimeout(function () {
                guineaPigButton.classList.remove('animate-button');
                guineaPigButton.innerHTML = `
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUdulyS7DoJSGwK3jiUTN74-7KVuhyyRkrCA&usqp=CAU" alt="Guinea Pig">
                    <span class="button-text">CLICK ME</span>
                `;
                if (isChrome()) {
                    console.log('This code is running in Chrome.');
                }
            }, 1500);
        });
    }

    // Function to open Instagram page
    function openInstagram() {
        const instagramUrl = 'https://www.instagram.com/holisticguinea/';
        const newTab = window.open(instagramUrl, '_blank');
        if (newTab) {
            newTab.focus(); // Ensure the new tab is focused
        } else {
            alert('Please allow popups for this website');
        }
    }

    document.getElementById("menu-icon").addEventListener("click", function() {
        const navbar = document.getElementById("navbar");
        const menuIcon = document.getElementById("menu-icon");
    
        navbar.classList.toggle("active");
        menuIcon.classList.toggle("active");
    });

    // Function to play the custom sound effect
    function playSound() {
        const audio = new Audio('ESGuinea20Pig205_3new-sound.aif');
        audio.play();
    }

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('sparkle');
    
        // Set random position, size, and animation duration
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.width = snowflake.style.height = Math.random() * 8 + 4 + 'px'; // Random sizes between 4px to 12px
        snowflake.style.animationDuration = Math.random() * 5 + 5 + 's'; // Duration between 5s to 10s
        snowflake.style.animationDelay = Math.random() * 3 + 's';
    
        document.body.appendChild(snowflake);
    
        // Remove the snowflake after it finishes falling
        setTimeout(() => {
            snowflake.remove();
        }, 12000);
    }
    
    // Continuously generate snowflakes
    setInterval(createSnowflake, 300);

});

