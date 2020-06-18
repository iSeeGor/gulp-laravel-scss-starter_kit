const postCardTitleHover = () => {

	$('.post-card__title-link').hover(function(){
		$(this).closest('.post-card').toggleClass('is-hover');
		console.log(1);
		
	})

}