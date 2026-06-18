    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          navLinks.forEach(a => {
            const active = a.getAttribute('href') === '#' + e.target.id;
            a.style.opacity = active ? '1' : '.55';
            a.style.fontWeight = active ? '600' : '400';
          });
        }
      });
    }, { threshold: 0.25 });
    sections.forEach(s => io.observe(s));

    const animEls = document.querySelectorAll('.project-card, .service-card, .skill-group, .exp-card');
    const animIO = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
          animIO.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });

    animEls.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(22px)';
      el.style.transition = `opacity .45s ease ${i * 0.06}s, transform .45s ease ${i * 0.06}s, box-shadow .22s`;
      animIO.observe(el);
    });