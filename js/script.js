document.addEventListener("DOMContentLoaded", function() {
    console.log("Сайт завантажено та готовий до роботи!");

    // Функція для плавного скролу до секцій
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
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

    // Функція для обробки кліків на зображення в галереї
    document.querySelectorAll(".gallery img").forEach(img => {
        img.addEventListener("click", function() {
            console.log("Клік на зображення:", this.src);
        });
    });

    // Додаємо плаваючу кнопку нагору
    const scrollTopButton = document.createElement("button");
    scrollTopButton.innerHTML = "⬆";
    scrollTopButton.id = "scrollTopBtn";
    document.body.appendChild(scrollTopButton);

    // Стилі для кнопки (можна винести в CSS)
    scrollTopButton.style.position = "fixed";
    scrollTopButton.style.bottom = "20px";
    scrollTopButton.style.right = "20px";
    scrollTopButton.style.width = "50px";
    scrollTopButton.style.height = "50px";
    scrollTopButton.style.background = "#fdd835";
    scrollTopButton.style.color = "#000";
    scrollTopButton.style.border = "none";
    scrollTopButton.style.borderRadius = "50%";
    scrollTopButton.style.cursor = "pointer";
    scrollTopButton.style.display = "none";
    scrollTopButton.style.fontSize = "24px";
    scrollTopButton.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.2)";

    // Відображення кнопки при прокрутці вниз
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            scrollTopButton.style.display = "block";
        } else {
            scrollTopButton.style.display = "none";
        }
    });

    // Обробник натискання на кнопку
    scrollTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

function toggleMenu() {
    var navContainer = document.querySelector(".nav-container");
    if (navContainer.style.display === "flex") {
        navContainer.style.display = "none";
    } else {
        navContainer.style.display = "flex";
    }
}
