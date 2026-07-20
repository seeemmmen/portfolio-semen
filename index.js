console.log('Happy developing ✨');

let answer = (a, b) => a + b;

setTimeout(() => {
    console.log(answer(20, 50));
}, 5000);

function scrollToSection(sectionId) {
    const sections = document.getElementsByClassName(sectionId);

    if (sections.length > 0) {
        const target = sections[0];
        
        const targetPosition = target.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        
        const duration = 1000; 
        let startTimestamp = null;

        function animationStep(timestamp) {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = timestamp - startTimestamp;
            
            let percentage = Math.min(progress / duration, 1);
            
            const easing = 1 - Math.pow(1 - percentage, 3);
            
            window.scrollTo(0, startPosition + (distance * easing));

            if (progress < duration) {
                window.requestAnimationFrame(animationStep);
            }
        }

        window.requestAnimationFrame(animationStep);
        console.log("Found section:", target);
    } else {
        console.error(`No element found with class '${sectionId}'`);
    }
}

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