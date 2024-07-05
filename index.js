function typeWriter(text, elementId, speed) {
    const element = document.getElementById(elementId);
    let i = 0;
    const typingInterval = setInterval(() => {
        element.textContent += text.charAt(i);
        i++;
        if (i > text.length - 1) {
            clearInterval(typingInterval);
        }
    }, speed);
}

// Call the typeWriter function for each headline
typeWriter("Unveil Digital Anomalies with GlitchSpy", "headline1", 100);

window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".section");
    const header = document.getElementById("header");
    const container = document.querySelector(".container");
    const getStartedBtn = document.querySelector(".btn");

    let currentSection = null;

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
            currentSection = section;
        }
    });

    if (currentSection) {
        const bgColor = getComputedStyle(currentSection).backgroundColor;

        header.style.backgroundColor = bgColor;

        const isDarkBackground = (bgColor) => {
            const rgb = bgColor.match(/\d+/g);
            const brightness =
                (parseInt(rgb[0]) * 299 +
                    parseInt(rgb[1]) * 587 +
                    parseInt(rgb[2]) * 114) /
                1000;
            return brightness < 200; // Adjust the threshold value to better detect dark backgrounds
        };

        if (isDarkBackground(bgColor)) {
            container.classList.add("dark-background");
            container.classList.remove("light-background");
        } else {
            container.classList.add("light-background");
            container.classList.remove("dark-background");
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav a");

    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            // Remove 'active' class from all links
            navLinks.forEach((link) => link.classList.remove("active"));

            // Add 'active' class to the clicked link
            event.target.classList.add("active");
        });
    });
});
