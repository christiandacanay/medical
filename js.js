(function(){
    // ----- Mobile Button
    var mobilBtn = document.querySelector(".mobile-menu-btn");

    function handleMobileClick(event) {
        var navParent = document.querySelector(".navparent");
        navParent.classList.toggle("navparent--open");
    }
    
    mobilBtn.addEventListener("click", handleMobileClick);

    // ----- Slider (HOMEPAGE) 

    var location = document.querySelectorAll(".splide-home");

    if(location.length) {
        var slider = new Splide('.splide-home', {
            pagination: false,
            arrows: false
        } );
        slider.mount();
    }


    var icons = document.querySelectorAll(".headicons .icons");
    icons.forEach((element, index) => {
        element.addEventListener("click", function handleIconClick() {
            slider.go(index);
        });
    });


    // ---- IMAGE CAROUSEL (ABOUT US) 

    var selectorClass = ".splider3";

    var carousel = document.querySelectorAll(selectorClass);

    if(carousel.length) {

        var slider3 = new Splide(selectorClass, {
            focus: "center",
            autoWidth: true,
            type: 'loop',
            pagination: false,
            arrows: false,
            autoplay: true,
            perPage: 1,
            trimSpace: false,
        });
        slider3.mount();
    }
    

    //---- Slider (ABOUT US)

    var aboutUsSelectorClass = ".splide2";

    var sliderClass = document.querySelectorAll(aboutUsSelectorClass);

    if(sliderClass.length) {
        var slider2 = new Splide(aboutUsSelectorClass, {
            arrows: false,
        } );
        
        slider2.mount();
    }

    // ----- GALLERY SLIDER

    var gallerySlider = ".splider-gallery";

    var gallerySplider = document.querySelectorAll(gallerySlider);

    console.log(gallerySplider);

    if(gallerySplider.length) {
        var imageSlider = new Splide('.splider-gallery', {
            pagination: false,
            autoWidth: true,
            perPage: 1,
            type: 'loop',
            direction:'rtl',
        });
        imageSlider.mount();
    }

})();