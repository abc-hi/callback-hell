function countdown(number, callback) {
    setTimeout(function() {
        document.getElementById('countdown-display').innerText = number;
        if (number > 1) {
            countdown(number - 1, callback);
        } else {
            callback();
        }
    }, 1000);
}

// Start the countdown
countdown(10, function() {
    // Display "Happy Independence Day" after countdown
    setTimeout(function() {
        document.getElementById('countdown-display').innerText = 'Happy Independence Day!';
    }, 1000);
});
