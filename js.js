(function(){
    // ----- Mobile Button
    var mobilBtn = document.querySelector(".mobile-menu-btn");

    function handleMobileClick(event) {
        var navParent = document.querySelector(".navparent");
        navParent.classList.toggle("navparent--open");
    }
    
    mobilBtn.addEventListener("click", handleMobileClick);


    // ----- Slider (HOMEPAGE) 

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

    // ---- Slider (ABOUT US)

    var slider2 = new Splide('.splide2', {
        arrows: false,
    } );
    
    slider2.mount();
    


})();