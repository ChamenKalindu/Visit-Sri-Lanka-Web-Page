window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const brand = document.querySelector(".navbar-brand");
    const items = document.querySelectorAll(".nav-link");
    if (window.scrollY > 50) { 
      navbar.classList.add("bg-white", "shadow-sm"); // Adds white background and a shadow
      navbar.classList.remove("bg-transparent");
      brand.classList.add("text-dark");
      brand.classList.remove("text-white");
      items.forEach(element => {
        element.classList.add("text-dark");
        element.classList.remove("text-white")
      });


    } else {
      navbar.classList.add("bg-transparent");
      navbar.classList.remove("bg-white", "shadow-sm");
      brand.classList.add("text-white");
      brand.classList.remove("text-dark");
      items.forEach(element => {
        element.classList.add("text-white");
        element.classList.remove("text-dark")
      });
    }
  });