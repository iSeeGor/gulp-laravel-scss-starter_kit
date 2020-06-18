$(function() {

	// Components
	circleParallax();
	mobileDeviceDetect();
	svg4everybody();
	navMenuAnimation();
	catalogCarousele();
	sliderGallery();
	scrollToTop();
	initModals();
	formValidation();
	animationForDecoCirclse();
	perfectScrollbar();
	videoModal();
	iframeTextEditor();
	

	// Mobile
	burger();
	mobileNavMenu();
	mobileSubMenuParentPrevent();

	// Home Page
	testimonials();
	googleMap();
	// heroAnimation();
	
	// Transfer Page
	transferInfo();

	// Blog & Post Pages
	postCardTitleHover();

});



const mobileDeviceDetect = () => {
    window.mobileAndTabletcheck = function() {
        var check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    };
}

const circleParallax = () => {
    let nurillax = new Rellax('.nurillax');
}

const navMenuAnimation = () => {
    if (window.innerWidth > 992) {
        const items = Array.from(document.querySelectorAll('.nav-menu__item'));

        class Item {
            constructor(el) {
                this.DOM = {};
                this.DOM.el = el;
                this.DOM.name = el.querySelector('.nav-menu__link');
                this.colors = {
                    active: window
                        .getComputedStyle(this.DOM.el)
                        .getPropertyValue('--menu-item-color')
                };
                charming(this.DOM.name);
                this.DOM.nameLetters = Array.from(
                    this.DOM.name.querySelectorAll('span')
                );
                this.colors.initial = window.getComputedStyle(
                    this.DOM.nameLetters[0]
                ).color;
                this.initEvents();
            }
            initEvents() {
                const duration = 150;

                this.mouseenterFn = () =>
                    (this.mouseTimeout = setTimeout(() => {
                        this.isActive = true;
                        anime.remove(this.DOM.nameLetters);
                        anime({
                            targets: this.DOM.nameLetters,
                            delay: (t, i) => i * 20,
                            translateY: [
                                {
                                    value: (t, i) => (i % 2 === 0 ? 10 : -10),
                                    duration: duration,
                                    easing: 'easeInSine'
                                },
                                {
                                    value: (t, i) =>
                                        i % 2 === 0 ? [-10, 0] : [10, 0],
                                    duration: duration + 700,
                                    easing: 'easeOutElastic',
                                    elasticity: 600
                                }
                            ],
                            opacity: [
                                {
                                    value: 0,
                                    duration: duration,
                                    easing: 'linear'
                                },
                                {
                                    value: 1,
                                    duration: duration,
                                    easing: 'linear'
                                }
                            ],
                            color: {
                                value: '#7e342d',
                                duration: 1,
                                delay: (t, i) => i * 20 + duration,
                                easing: 'linear'
                            }
                        });
                    }, 50));

                this.mouseleaveFn = () => {
                    clearTimeout(this.mouseTimeout);
                    if (!this.isActive) return;
                    this.isActive = false;

                    anime.remove(this.DOM.nameLetters);
                    anime({
                        targets: this.DOM.nameLetters,
                        delay: (t, i, l) => (l - i - 1) * 20,
                        translateY: [
                            {
                                value: (t, i) => (i % 2 === 0 ? -10 : 10),
                                duration: duration,
                                easing: 'easeInSine'
                            },
                            {
                                value: (t, i) =>
                                    i % 2 === 0 ? [10, 0] : [-10, 0],
                                duration: duration + 700,
                                easing: 'easeOutElastic',
                                elasticity: 600
                            }
                        ],
                        opacity: [
                            { value: 0, duration: duration, easing: 'linear' },
                            { value: 1, duration: duration, easing: 'linear' }
                        ],
                        color: {
                            value: this.colors.initial,
                            duration: 1,
                            delay: (t, i, l) => (l - i - 1) * 20 + duration,
                            easing: 'linear'
                        }
                    });
                };

                this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
                this.DOM.el.addEventListener('touchstart', this.mouseenterFn);
                this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
                this.DOM.el.addEventListener('touchend', this.mouseleaveFn);
            }
        }

        items.forEach(item => new Item(item));
    }
};

const catalogCarousele = () => {

    let carousele;

    let options = {};

    options = {
        // loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 600,
        threshold: 20,

        navigation: {
            nextEl: '.catalog-carousele .button-next',
            prevEl: '.catalog-carousele .button-prev',
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30
            },

            460: {
                slidesPerView: 2,
                spaceBetween: 40
            },

            767: {
                slidesPerView: 3,
                spaceBetween: 30,
            },

            991: {
                slidesPerView: 3,
                spaceBetween: 30,
            },

            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
            
        },
    };

    carousele = new Swiper ('.catalog-carousele__container', options);

}

const sliderGallery = () => {

    let slider;

    let options = {};

    options = {
        slidesPerView: 'auto',
        spaceBetween: 35,
        // loop: true,
        speed: 1200,
        threshold: 20,
        longSwipesRatio: 0.6,
        grabCursor: true,
        // centeredSlides: true,
        

        navigation: {
            nextEl: '.slider__control .button-next',
            prevEl: '.slider__control .button-prev',
        },
        

        breakpoints: {
            0: {
                slidesPerView: 1,
            },

            767: {
                slidesPerView: 'auto',
                spaceBetween: 40,
            },

            991: {
                spaceBetween: 35,
            }
            
        },
    };

    slider = new Swiper ('.slider__container', options);

    $('.slider__container').lightGallery({
        selector: '.swiper-slide a',
        share: false,
        actualSize: false,
        autoplayControls: false,
        download: false,
        // fullScreen: false,
        // zoom: false,
        showThumbByDefault: false,
        thumbWidth: 130,
        thumbContHeight: 110,
    });

}

const scrollToTop = () => {
    let toTopBtn = $('.scrolltop');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 600) {
            toTopBtn.addClass('scrolltop_visible');
        } else {
            toTopBtn.removeClass('scrolltop_visible');
        }
    });

    $(document).on('click', '.scrolltop', () => {
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });
};

const initModals = () => {
    $('.js-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        modal: false,
        removalDelay: 300,
        showCloseBtn: false,

        callbacks: {
            open: function() {
                // fix for position:fixed elements
                if(!mobileAndTabletcheck()){
                    $('.header').css('padding-right', '17px');
                }

                // custom close button
                $('.modal__close').on('click',function(e){
					e.preventDefault();
					$.magnificPopup.close();
				}); 

                // Gsap effect close/hide modal
                gsap.fromTo('.modal', {
                    y: '-100px',
                    opacity: 0,
                    scale: 1.2,
                },
                
                { 
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    duration: 1.2,
                    delay: 0,
                    ease: "power4.out", 
                });

                gsap.fromTo('.mfp-bg', {
                    opacity: 0
                },
                
                {
                    opacity: 0.9,
                    duration: 1,
                    ease: "power4.out", 
                })

            },
            beforeClose: function() {
                
                 // Gsap effect close/hide modal
                gsap.to('.modal', { 
                    y: '-100px',
                    scale: 1.2,
                    opacity: 0,
                    duration:1.2,
                    delay: 0,
                    ease: "power4.out", 
                });

                gsap.to('.mfp-bg', { 
                    opacity: 0,
                    duration: 1,
                    ease: "power4.out", 
                });
            },
            close: function(){
                // fix for position:fixed elements
                $('.header').css('padding-right', '0px')
            },

        }
    });
};

const formValidation = () => {
    const forms = document.querySelectorAll('.js-validate');

    $.validator.methods.email = function( value, element ) {
        return this.optional( element ) || /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( value );
    }

    forms.forEach(function(form){
        $(form).validate({
            errorElement: "em",
            errorPlacement: function(error, element) {
                element.parent().parent().append(error);
            }
        });
        
    });

    $('.input_number').bind('keypress', function(e){
		var keyCode = (e.which)?e.which:event.keyCode
		return !(keyCode>31 && (keyCode<48 || keyCode>57)); 
	});
};

const animationForDecoCirclse = () => {

    $(window).resize(function(){

        if(window.innerWidth >= 1024){

            circleTextDecoAnim();
            // circleSectionDecoAnim();
            circleFigureDecoAnim();

        }

    }).resize()

    function circleTextDecoAnim(){
        let circleBlocks = document.querySelectorAll('.text-block__circle');

        circleBlocks.forEach((item)=>{
            item.classList.add('view-out');

            let waypoint = new Waypoint({
                element: item,
                handler: function(direction) {
                    this.element.classList.remove('view-out');
                    this.destroy();        
                },
                offset: '65%',
            });
        })
        
    };

    // function circleSectionDecoAnim(){
    //     let circleBlocks = document.querySelectorAll('.section__circle');

    //     circleBlocks.forEach((item)=>{
    //         item.classList.add('view-out');

    //         let waypoint = new Waypoint({
    //             element: item,
    //             handler: function(direction) {
    //                 this.element.classList.remove('view-out');
    //                 this.destroy();        
    //             },
    //             offset: '65%',
    //         });
    //     })
        
    // };

    function circleFigureDecoAnim(){
        let circleBlocks = document.querySelectorAll('.figure-circle');

        circleBlocks.forEach((item)=>{
            item.classList.add('view-out');

            let waypoint = new Waypoint({
                element: item,
                handler: function(direction) {
                    this.element.classList.remove('view-out');
                    this.destroy();        
                },
                offset: '65%',
            });
        })
        
    };
    
}

const perfectScrollbar = () => {
    
    const container = document.querySelectorAll('.js-scrollbar');

    if(container) initScroll();

    
    function initScroll(){
        for(let i = 0; i < container.length; i++){
            
            new PerfectScrollbar(container[i], {
                wheelSpeed: 0.5,
                wheelPropagation: false,
                minScrollbarLength: 20
            });

        }
    }
}

const videoModal = () => {

    $('.video-block').lightGallery({
        selector: '.js-iframe-modal',
        share: false,
        actualSize: false,
        autoplayControls: false,
        download: false,
        fullScreen: false,
        counter: false,
        zoom: false,
        thumbWidth: 130,
        thumbContHeight: 110,
        loadYoutubeThumbnail: true,
        youtubeThumbSize: 'default',
        videoMaxWidth: '1200px'
    }); 
}

const iframeTextEditor = () => {
    
    $('.typography iframe').parent().addClass('responsive-iframe')

}

const burger = () => {

	function burgerInit(){
		let burger = document.querySelector('.mobile-header__burger'),
        	header = document.querySelector('.header__mobile');
    
		burger.onclick = function() {
			header.classList.toggle('is-opened');
		}
	}
	
	if(window.innerWidth <= 767) burgerInit();
	

	window.onorientationchange = function() { 
		burgerInit();
	};

}

const mobileSubMenuParentPrevent = () => {

	$('.sub-menu').find(".nav-menu__link").click(function(e){
		
		e.preventDefault();
		
	});
}


const mobileNavMenu = () => {
    let AccordionMenu = function(selector) {
        this.colMenu = document.querySelectorAll(`${selector} li`);
        let This = this;
        this.colMenu.forEach(function(items) {
            if (items.querySelector('ul')) {
                items.firstElementChild.classList.add('has-dropdown');
                // items.firstElementChild.insertAdjacentHTML('beforeend', '<svg class="mobile-menu__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 451.847 451.847" xml:space="preserve"> <g> <path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751 c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0 c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"/> </g> </svg>');

                items.firstElementChild.onclick = function(e) {
                    e.preventDefault();

                    let isTrue = this.parentElement.classList.toggle('open');

                    if (isTrue) {
                        This.show(this.nextElementSibling);
                    } else {
                        This.hide(this.nextElementSibling);
                    }
                };
            }
        });
    };

    // Show an element
    AccordionMenu.prototype.show = function(elem) {
        // Get the natural height of the element
        var getHeight = function() {
            elem.style.display = 'block'; // Make it visible
            var height = elem.scrollHeight + 'px'; // Get it's height
            return height;
        };

        var height = getHeight(); // Get the natural height
        elem.style.height = height; // Update the height

        setTimeout(function() {
            elem.style.height = 'auto';
        }, 350);
    };

    // Hide an element
    AccordionMenu.prototype.hide = function(elem) {
        // Give the element a height to change from
        elem.style.height = elem.scrollHeight + 'px';

        // Set the height back to 0
        setTimeout(function() {
            elem.style.height = '0';
        }, 110);

        setTimeout(function() {
            elem.style.display = '';
        }, 700);
    };

    new AccordionMenu('.mobile-nav');
};
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
const transferInfo = () => {

	function fireAmination(){

        gsap.fromTo('.transfer-info__media', {
			x: '400px',
			y: '-100px',
			scale: 0.6,
        },
        
        { 
			x: 0,
			y: 0,
			scale: 1,
            duration: 3,
            delay: 1,
            ease: "power4.out", 
        });

    }

    if(window.innerWidth >= 1200){
        fireAmination();
    }

}
const postCardTitleHover = () => {

	$('.post-card__title-link').hover(function(){
		$(this).closest('.post-card').toggleClass('is-hover');
		console.log(1);
		
	})

}