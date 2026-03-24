// Navbar scroll effect
    window.addEventListener('scroll', () => {
      document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const menuClose = document.getElementById('menuClose');

    function openMenu() {
      navLinks.classList.add('active');
      if (menuClose) menuClose.style.display = 'flex';
    }

    function closeMenu() {
      navLinks.classList.remove('active');
      if (menuClose) menuClose.style.display = 'none';
    }

    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        navLinks.classList.contains('active') ? closeMenu() : openMenu();
      });
    }

    if (menuClose) {
      menuClose.addEventListener('click', closeMenu);
    }

    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Scroll reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Stats counter animation
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll('.counter');
          counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
              current += step;
              if (current < target) {
                counter.textContent = Math.floor(current) + '+';
                requestAnimationFrame(updateCounter);
              } else {
                counter.textContent = target + '+';
              }
            };

            updateCounter();
          });
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) counterObserver.observe(statsSection);

    // Form handler
    function handleSubmit(e) {
      const btn = e.target.querySelector('button');
      btn.textContent = '¡Enviado!';
      btn.style.background = '#22C55E';
      btn.disabled = true;
    }
