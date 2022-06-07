//Owl Carousel
    $("#owl-demo").owlCarousel({
        autoPlay: 3000,
        stopOnHover: true,
        navigation: false,
        paginationSpeed: 1000,
        goToFirstSpeed: 2000,
        singleItem: true,
        autoHeight: true,
        transitionStyle: "fade"
    });

    $("#testi-two").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items: 2,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [979, 2]
    });

    $("#testi-three").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 2]
    });

    $("#gallery-post").owlCarousel({
        autoPlay: 3000,
        items: 8,
        itemsDesktop : [1024,5],
        itemsDesktopSmall : [900,3],
        itemsTablet: [600,2],
    });

    $("#center-apps").owlCarousel({
        autoPlay: 3000,
        items: 3,
        itemsDesktop : [1024,3],
        itemsDesktopSmall : [900,3],
        itemsTablet: [600,1],
    });