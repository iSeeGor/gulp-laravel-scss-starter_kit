<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8" />
	<meta name="author" content="author name" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta http-equiv="X-UA-Compatible" content="ie=edge" />

	<title>Site Title</title>

	<meta name="description" content="Site Description..." />
	<meta name="keywords" content="Site Keywords..." />
	<meta name="format-detection" content="telephone=no">

	<!--== favicon's  -->
	<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
	<link rel="manifest" href="/favicon/site.webmanifest">
	<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5">
	<meta name="msapplication-TileColor" content="#00aba9">
	<meta name="theme-color" content="transparent">

	<!--== Preload Fonts -->
	<link rel="preload" href="/assets/fonts/OpenSans-Regular.woff" as="font" type="font/woff" crossorigin="">
	<link rel="preload" href="/assets/fonts/OpenSans-Bold.woff" as="font" type="font/woff" crossorigin="">
	<link rel="preload" href="/assets/fonts/Prata-Regular.woff" as="font" type="font/woff" crossorigin="">

	<!--== CSS Vendor -->
	<link rel="stylesheet" href="/assets/css/vendor.css" />

	<!--== CSS Main Style -->
	<link rel="stylesheet" href="/assets/css/style.css" />

	<!--== CSS Media -->
	<link rel="stylesheet" href="/assets/css/media.css" />

	@if (Request::is('/'))
		<script>
			setTimeout(() => {

				heroAnimation();

				gsap.to('.preloader__body',
				{
					y: '200px',
					opacity: 0,
					duration: 1,
					delay: 0,
					ease: "power4.out",
				});

				gsap.to('.preloader',
				{
					opacity: 0,
					duration: 1,
					delay: 0.5,
					ease: "power4.out",
				});
				gsap.to('.preloader',
				{
					display: 'none',
					duration: 0.1,
					delay: 1.5,
					ease: "power4.out",
				});

			}, 3000);
		</script>
	@endif

</head>
<body>
	<div class="root">

		@include('layouts.header')

		@yield('content')

		@include('layouts.footer')


	</div><!-- ./end root  -->

	<button class="scrolltop">
		<svg class="scrolltop__icon">
			<use xlink:href="/assets/sprite/symbol/sprite.svg#icon-angel-arrow"></use>
		</svg>
	</button>

	{{-- @include('modals.modals') --}}

	<!--== Google Map  -->
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAnmv8rDSzIL4RVE5EBt6Kt4hqdFXU2mA4"></script>

	<!--== Scripts -->
	<script src="/assets/js/vendor.js"></script>
	<script src="/assets/js/scripts.js"></script>
    <script src="/assets/js/mail.js"></script>

</body>
</html>
