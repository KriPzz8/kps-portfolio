document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
    const gallery = document.querySelector(".image-gallery");
    if (gallery) {
        setTimeout(() => {
            gallery.classList.add("visible");
        }, 500);
    }
});

