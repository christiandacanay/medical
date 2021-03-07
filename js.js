(function(){
    // ----- Mobile Button
    var mobilBtn = document.querySelector(".mobile-menu-btn");

    function handleMobileClick(event) {
        var navParent = document.querySelector(".navparent");
        navParent.classList.toggle("navparent--open");
    }
    
    mobilBtn.addEventListener("click", handleMobileClick);


    // ----- Slider
	var slider = new Splide('.splide', {
        pagination: false,
        arrows: false
    } );

    slider.mount();

    var icons = document.querySelectorAll(".headicons .icons");

    icons.forEach((element, index) => {
        element.addEventListener("click", function handleIconClick() {
            slider.go(index);
        });
    });


})();