const heroAnimation = () => {

    function fireAmination(){

        gsap.fromTo('.header__top', {
            y: '-100px',
            opacity: 0,
        },
        
        { 
            y: 0,
            opacity: 1,
            duration: 1.2,
            delay: 1,
            ease: "power4.out", 
        });

        gsap.fromTo('.header__nav-menu', {
            y: '40px',
            opacity: 0,
        },
        
        { 
            y: 0,
            opacity: 1,
            duration: 1.4,
            delay: 1,
            ease: "power4.out", 
        });

        gsap.fromTo('.header .logo', {
            opacity: 0,
        },
        
        { 
            opacity: 1,
            duration: 1.6,
            delay: 1.6,
            ease: "power4.out", 
        });

        gsap.fromTo('.hero__image-left', {
            width: 0
        },
        
        { 
            width: '217px',
            duration: 2.4,
            delay: 1.8,
            ease: "expo.out", 
        });

        gsap.fromTo('.hero__title', {
            y: '50px',
            opacity: 0
        },
        
        { 
            y: '0',
            opacity: 1,
            duration: 1.4,
            delay: 2,
            ease: "back.out(1.7)", 
        });

        gsap.fromTo('.hero__content .button', {
            y: '-50px',
            opacity: 0
        },
        
        { 
            y: '0',
            opacity: 1,
            duration: 1.4,
            delay: 2.2,
            ease: "back.out(1.7)", 
        });

        gsap.fromTo('.hero__image-right', {
            x: '100px',
            opacity: 0
        },
        
        { 
            x: '0',
            opacity: 1,
            duration: 1.8,
            delay: 2.4,
            ease: "circ.out", 
        });

        gsap.fromTo('.hero__catalog-carousele', {
            y: '100px',
            opacity: 0
        },
        
        { 
            y: '0',
            opacity: 1,
            duration: 2,
            delay: 1.2,
            ease: "power4.out", 
        });
    }

    if(window.innerWidth >= 1200){
        fireAmination();
    }


}

const testimonials = () => {

	let thumbCarousele = new Swiper ('.testimonials__thumbnails .swiper-container', {
		loopedSlides: 5,
        slidesPerView: 3,
        slideToClickedSlide: true,
        spaceBetween: 0,
        loop: true,
        speed: 800,
        threshold: 20,
        // grabCursor: true,

        navigation: {
            nextEl: '.testimonials__control .button-next',
            prevEl: '.testimonials__control .button-prev',
        },

        pagination: {
            el: '.testimonials__pagination',
            type: 'bullets',
            clickable: true,
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 0
            },

            475: {
                slidesPerView: 2,
                spaceBetween: 0
            },

            767: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            
        },
	});
	
	let contentCarousele = new Swiper ('.testimonials__body .swiper-container', {
		loopedSlides: 5,
        slidesPerView: 1,
        spaceBetween: 40,
        loop: true,
        speed: 800,
        threshold: 20,
        longSwipesRatio: 0.6,
		// grabCursor: true,
		direction: 'vertical',

    });
    
    if(document.querySelector('.testimonials__thumbnails')){
        thumbCarousele.controller.control = contentCarousele;
        contentCarousele.controller.control = thumbCarousele;
    }
	
	
}

const googleMap = () => {
    function initMap() {
        let popupContent =
                '<p class="marker_content">Company Address</p>',
            image = {
                url: '/assets/icons/icon-map-marker.svg'
                // size: new google.maps.Size(49, 65),
                // origin: new google.maps.Point(-3, 0),
                // anchor: new google.maps.Point(-40, 140)
            },
            coordinates = { lat: 41.0086146, lng: 28.9547234 },
            map = new google.maps.Map(document.querySelector('.map-holder'), {
                center: coordinates,
                zoom: 16,
                zoomControl: true,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.LEFT_BOTTOM
                },

                // disableDefaultUI: true,
                styles: [
                    {
                        "featureType": "landscape.man_made",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "lightness": "-5"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape.man_made",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "saturation": "21"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape.natural",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "saturation": "1"
                            },
                            {
                                "color": "#eae2d3"
                            },
                            {
                                "lightness": "20"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "saturation": "39"
                            },
                            {
                                "lightness": "7"
                            },
                            {
                                "gamma": "1.06"
                            },
                            {
                                "visibility": "on"
                            },
                            {
                                "hue": "#00b8ff"
                            },
                            {
                                "weight": "1.44"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "lightness": "100"
                            },
                            {
                                "weight": "1.16"
                            },
                            {
                                "color": "#e0e0e0"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "saturation": "-16"
                            },
                            {
                                "lightness": "28"
                            },
                            {
                                "gamma": "0.87"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "saturation": "-75"
                            },
                            {
                                "lightness": "-15"
                            },
                            {
                                "gamma": "1.35"
                            },
                            {
                                "weight": "1.45"
                            },
                            {
                                "hue": "#00dcff"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#626262"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "saturation": "19"
                            },
                            {
                                "weight": "1.84"
                            }
                        ]
                    }
                ]
            }),
            marker = new google.maps.Marker({
                position: coordinates,
                map: map,
                icon: image,
                animation: google.maps.Animation.DROP,

            }),
            infowindow = new google.maps.InfoWindow({
                content: popupContent
            });

        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
    }

    /*
     *  Убрать Проверку if !!!!
     */

    if (document.querySelector('.map-holder')) {
        initMap();
    }
};