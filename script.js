// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    var anchorLinks = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
          scrollTo(target, 500);
        }
      });
    }
  
    function scrollTo(element, duration) {
      var start = window.pageYOffset;
      var target = window.pageYOffset + element.getBoundingClientRect().top - 50;
      var distance = target - start;
      var startTime = null;
  
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, start, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }
  
      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }
  
      requestAnimationFrame(animation);
    }
  });
  
  // Example form submission handling
  document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('#contact form');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        var name = document.querySelector('#name').value;
        var email = document.querySelector('#email').value;
        var message = document.querySelector('#message').value;
        // Handle form submission here (e.g., send data to server)
        console.log('Form submitted:', name, email, message);
        // Clear form inputs
        document.querySelector('#name').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#message').value = '';
      });
    }
  });
  