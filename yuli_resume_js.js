document.addEventListener('DOMContentLoaded', function() {
    var guineaPigButton = document.getElementById('guineaPigButton');

    if (guineaPigButton) {
        guineaPigButton.addEventListener('click', function() {
            guineaPigButton.classList.add('animate-button');
            guineaPigButton.innerHTML = 'Wheek Wheek!';

            setTimeout(function() {
                guineaPigButton.classList.remove('animate-button');
                guineaPigButton.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUdulyS7DoJSGwK3jiUTN74-7KVuhyyRkrCA&usqp=CAU" alt="Guinea Pig">';

                if (isChrome()) {
                    console.log('This code is running in Chrome.');
                }
            }, 1000);
        });
    }

    function isChrome() {
        return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    }
});