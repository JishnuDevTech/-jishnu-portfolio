document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Fade-in effect for sections on scroll
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(50px)";
        section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        observer.observe(section);
    });

    // Animation for profile image on hover
    const profileImg = document.querySelector(".profile-img");
    if (profileImg) {
        profileImg.addEventListener("mouseover", () => {
            profileImg.style.transform = "scale(1.1)";
            profileImg.style.transition = "transform 0.3s ease-in-out";
        });
        profileImg.addEventListener("mouseleave", () => {
            profileImg.style.transform = "scale(1)";
        });
    }

    // Calculator button click event
    const calcButton = document.getElementById("calc-btn");
    if (calcButton) {
        calcButton.addEventListener("click", function() {
            window.open("dist/calculator", "_blank");
        });
    }

    // 🔥🔥 Special Entry Effect (Portfolio loads with fade-in)
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 1.2s ease-in-out";
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 300);

    // 💡 Typing Effect for Name
    const nameElement = document.getElementById("hero-name");
    if (nameElement) {
        const nameText = nameElement.textContent;
        nameElement.textContent = "";
        let i = 0;
        function typeEffect() {
            if (i < nameText.length) {
                nameElement.textContent += nameText[i];
                i++;
                setTimeout(typeEffect, 150);
            }
        }
        typeEffect();
    }
});
