"use strict";

export const Count = ($element) => {
    const target = parseInt($element.dataset.counts, 10);
    if (isNaN(target)) return;

    let started = false;

    const startCounting = () => {
        if (started) return;
        started = true;

        let current = 0;
        const duration = 1500;
        const stepTime = Math.max(Math.floor(duration / target), 10);

        const counter = setInterval(() => {
            current++;
            $element.textContent = current;

            if (current >= target) {
                $element.textContent = target;
                clearInterval(counter);
            }
        }, stepTime);
    };

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                startCounting();
                observer.unobserve($element);
            }
        },
        { threshold: 0.5 }
    );

    observer.observe($element);
};