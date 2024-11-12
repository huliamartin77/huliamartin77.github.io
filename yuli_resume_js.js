
document.addEventListener('DOMContentLoaded', function () {
    const guineaPigButton = document.getElementById('guineaPigButton');

    if (guineaPigButton) {
        guineaPigButton.addEventListener('click', function () {
            // Add animation and change button text
            guineaPigButton.classList.add('animate-button');
            guineaPigButton.innerHTML = 'Wheek Wheek! 🎉';

            // Play sound and launch confetti
            playSound();
            launchConfetti();
            openInstagram();

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

    // Check if the browser is Chrome
    function isChrome() {
        return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    }

    function launchConfetti() {
        const confettiCount = 100;
        const confettiColors = ['#ff9f1c', '#2ec4b6', '#e71d36', '#ffbf69', '#8d99ae'];
        const confettiShapes = ['square', 'circle', 'triangle'];
    
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
    
            // Randomize color, shape, and size
            const color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
            const shape = confettiShapes[Math.floor(Math.random() * confettiShapes.length)];
            const size = Math.random() * 10 + 10; // Confetti size between 10px and 20px
    
            confetti.style.backgroundColor = color;
            confetti.style.width = `${size}px`;
            confetti.style.height = `${size}px`;
            confetti.style.opacity = Math.random() * 0.7 + 0.3; // Random opacity
    
            if (shape === 'circle') {
                confetti.style.borderRadius = '50%';
            } else if (shape === 'triangle') {
                confetti.style.width = '0';
                confetti.style.height = '0';
                confetti.style.borderLeft = `${size / 2}px solid transparent`;
                confetti.style.borderRight = `${size / 2}px solid transparent`;
                confetti.style.borderBottom = `${size}px solid ${color}`;
            }
    
            // Random position and animation duration
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            document.body.appendChild(confetti);
    
            // Remove confetti after animation ends
            confetti.addEventListener('animationend', () => confetti.remove());
        }
    }

    // Play the custom sound effect
    function playSound() {
        const audio = new Audio('ESGuinea20Pig205_3new-sound.aif');
        audio.play();
    }

    function openInstagram() {
        const instagramUrl = 'https://www.instagram.com/holisticguinea/';
        window.open(instagramUrl, '_blank'); // Open the link in a new tab
    }

});
