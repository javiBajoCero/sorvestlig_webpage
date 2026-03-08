document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    function removeActiveLinks() {
        navLinks.forEach(link => link.classList.remove('active'));
    }

    function addActiveLink(link) {
        link.classList.add('active');
    }

    function scrollToSection(event) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });

            removeActiveLinks();
            addActiveLink(event.target);
        }
    }

    navLinks.forEach(link => link.addEventListener('click', scrollToSection));

    window.addEventListener('scroll', function() {
        removeActiveLinks();

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const scrollPosition = window.scrollY;

            if (scrollPosition >= sectionTop - sectionHeight / 3) {
                const link = document.querySelector(`nav ul li a[href="#${section.id}"]`);
                if (link) {
                    addActiveLink(link);
                }
            }
        });
    });
});
