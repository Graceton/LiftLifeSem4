document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".benefit-card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("show");
                }, index * 300); // 300ms delay per card
            }
        });
    }, {
        threshold: 0.4
    });

    cards.forEach(card => observer.observe(card));
});
