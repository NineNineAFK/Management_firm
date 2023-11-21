$(document).ready(function () {
    // Function to smoothly animate counters
    function animateCounter(counterElement, endValue) {
        $({ count: 0 }).animate(
            {
                count: endValue
            },
            {
                duration: 3000, // Animation duration in milliseconds
                easing: 'swing', // Use jQuery easing function
                step: function () {
                    // Update the counter value during animation
                    $(counterElement).text(Math.floor(this.count)+ "+");
                },
                complete: function () {
                    // Repeat the animation
                    animateCounter(counterElement, endValue);
                }
            }
        );
    }

    // Counter 1: 100+ projects delivered in less than 72 Hours per project*
    animateCounter('#projectsCounter', 100);

    // Counter 2: Currently working with 25+ worldwide clients
    animateCounter('#clientsCounter', 25);
    
});
