function toggleMenu() {
  const nav = document.getElementById("nav-links");
  const hamburger = document.getElementById("hamburger");
  const overlay = document.getElementById("overlay");

  const isActive = nav.classList.toggle("show");
  hamburger.classList.toggle("active");
  overlay.classList.toggle("show", isActive);
}

function closeMenu() {
  document.getElementById("nav-links").classList.remove("show");
  document.getElementById("hamburger").classList.remove("active");
  document.getElementById("overlay").classList.remove("show");
}




function isInViewport(element, threshold = 0.2) {
  const rect = element.getBoundingClientRect();
  const elementHeight = rect.height;
  const visibleHeight = Math.min(window.innerHeight - rect.top, elementHeight);
  const visibleRatio = visibleHeight / elementHeight;

  return visibleRatio >= threshold && rect.top >= 0;
}

function animateSkills() {
  const section = document.querySelector('.skills');

  if (isInViewport(section, 0.2)) {
    document.querySelectorAll('.skill-item').forEach(item => {
      const fill = item.querySelector('.bar-fill');
      const percentText = item.querySelector('.bar-percent');
      const target = parseInt(item.dataset.percent);
      let current = 0;

      fill.style.transition = 'none';
      fill.style.width = '0%';
      percentText.textContent = '0%';

      setTimeout(() => {
        fill.style.transition = 'width 2s ease-out';
        fill.style.width = target + '%';
      }, 100);

      const interval = setInterval(() => {
        if (current >= target) {
          clearInterval(interval);
        } else {
          current++;
          percentText.textContent = current + '%';
        }
      }, 20);
    });
  }
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills); // ← ini yang bikin mobile jalan




 document.querySelectorAll('.soft-card').forEach(card => {
    const color = card.getAttribute('data-color');
    card.style.setProperty('--hover-color', color);
  });



   document.querySelectorAll('.view-detail').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const card = this.closest('.project-card');
      card.classList.add('expanded');
    });
  });

  document.querySelectorAll('.close-detail').forEach(btn => {
    btn.addEventListener('click', function() {
      const card = this.closest('.project-card');
      card.classList.remove('expanded');
    });
  });