document.addEventListener("DOMContentLoaded", () => {
    const saveBtn = document.getElementById("article-btn");
    const icon = saveBtn.querySelector("i");
    let isSaved = false;

    // Save article toggle
    saveBtn.addEventListener("click", () => {
        isSaved = !isSaved;
        if (isSaved) {
            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");
            saveBtn.innerHTML = `<i class="fa-solid fa-bookmark"></i> ARTICLE SAVED`;
            saveBtn.style.backgroundColor = "crimson";
        } else {
            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");
            saveBtn.innerHTML = `<i class="fa-regular fa-bookmark"></i> SAVE ARTICLE`;
            saveBtn.style.backgroundColor = "black";
        }
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Close mobile menu on link click + smooth scroll
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
            navLinks.classList.remove("active"); // Close menu
        });
    });
});
