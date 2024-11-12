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

    // Function to play the custom sound effect
    function playSound() {
        const audio = new Audio('ESGuinea20Pig205_3new-sound.aif');
        audio.play();
    }

    // Confetti animation function
    function launchConfetti() {
        const confettiCount = 100;
        const confettiColors = ['#ff9f1c', '#2ec4b6', '#e71d36', '#ffbf69', '#8d99ae'];
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.animationDuration = `${Math.random() * 2 + 3}s`;
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 5000);
        }
    }
});

