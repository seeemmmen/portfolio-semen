console.log('Happy developing ✨');

let answer = (a, b) => a + b;

setTimeout(() => {
    console.log(answer(20, 50));
}, 5000);

function scrollToSection(sectionId) {
    const sections = document.getElementsByClassName(sectionId);

    if (sections.length > 0) {
        sections[0].scrollIntoView({ behavior: 'smooth' });
        console.log("Found section:", sections[0]);
    } else {
        console.error(`No element found with class '${sectionId}'`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.header-text h1').classList.add('animate');
});

const hiddenElements = document.querySelectorAll('.hidden-element');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-element');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

hiddenElements.forEach((el) => observer.observe(el));

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            if (
                this.hostname === window.location.hostname &&
                this.href.indexOf('#') === -1 &&
                !this.href.includes('mailto:') &&
                this.target !== '_blank'
            ) {
                e.preventDefault();

                const targetUrl = this.href;

                document.body.classList.add('fade-out');

                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 400);
            }
        });
    });
});