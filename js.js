var mobilBtn = document.querySelector(".mobile-menu-btn");

function handleMobileClick(event) {
    var navParent = document.querySelector(".navparent");
    navParent.classList.toggle("navparent--open");
}

mobilBtn.addEventListener("click", handleMobileClick)
