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