document.addEventListener('DOMContentLoaded', function() {
    var guineaPigButton = document.getElementById('guineaPigButton');

    if (guineaPigButton) {
        guineaPigButton.addEventListener('click', function() {
            guineaPigButton.classList.add('animate-button');
            guineaPigButton.innerHTML = 'Wheek Wheek!'; // Change the button text

            setTimeout(function() {
                guineaPigButton.classList.remove('animate-button');
                guineaPigButton.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUdulyS7DoJSGwK3jiUTN74-7KVuhyyRkrCA&usqp=CAU" alt="Guinea Pig">';
            }, 1000);
        });
    }
});