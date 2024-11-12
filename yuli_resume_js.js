
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

    // Confetti animation
    function launchConfetti() {
        const confettiCount = 100;
        const confettiColors = ['#ff9f1c', '#2ec4b6', '#e71d36', '#ffbf69', '#8d99ae'];

        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
            document.body.appendChild(confetti);

            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.animationDuration = `${Math.random() * 2 + 3}s`;

            // Remove confetti after 5 seconds
            setTimeout(() => confetti.remove(), 5000);
        }
    }

    // Play the custom sound effect
    function playSound() {
        // Replace the URL with your custom sound file path
        const audio = new Audio('ESGuinea20Pig205_3new-sound.aif');
        audio.play();
    }
});
