document.addEventListener('DOMContentLoaded', function () {
    var guineaPigButton = document.getElementById('guineaPigButton');

    if (guineaPigButton) {
        guineaPigButton.addEventListener('click', function () {
            guineaPigButton.classList.add('animate-button');
            guineaPigButton.innerHTML = 'Wheek Wheek! 🎉';

            playSound();

            launchConfetti();

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
    function isChrome() {
        return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    }

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

            setTimeout(() => confetti.remove(), 5000);
        }
    }
    function playSound() {
        const audio = new Audio('https://www.soundjay.com/button/sounds/button-20.mp3');
        audio.play();
    }
});
