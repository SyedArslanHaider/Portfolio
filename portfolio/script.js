 const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href'); // Get the target section id
        const targetSection = document.querySelector(targetId); // Get the section element

        // Scroll to the section with smooth behavior
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });