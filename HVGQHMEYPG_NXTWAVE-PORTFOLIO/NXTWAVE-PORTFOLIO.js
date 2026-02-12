function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}


const counters = document.querySelectorAll(".counter");
let started = false;

const startCounters = () => {
    if (started) return;
    started = true;

    counters.forEach(counter => {
        const target = +counter.dataset.target;
        let count = 0;
        const speed = target / 80;

        const update = () => {
            count += speed;
            if (count < target) {
                counter.innerText = Math.ceil(count);
                requestAnimationFrame(update);
            } else {
                counter.innerText = target + "+";
            }
        };

        update();
    });
};

const observer = new IntersectionObserver(
    entries => {
        if (entries[0].isIntersecting) {
            startCounters();
        }
    }, {
        threshold: 0.5
    }
);

observer.observe(document.querySelector(".about-stats"));

const bars = document.querySelectorAll(".progress-bar");
const observers = new IntersectionObserver(
    entries => {
        if (entries[0].isIntersecting) {
            bars.forEach(bar => {
                bar.style.width = bar.dataset.progress + "%";
            });
        }
    }, {
        threshold: 0.4
    }
);

observers.observe(document.querySelector(".skills-section"));

function handleSubmit(event) {
    event.preventDefault();
    const success = document.getElementById("success")
    setTimeout(() => {
        success.innerText = "SUBMITTED !"
    }, 1500)

    event.target.reset();
}