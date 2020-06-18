<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8" />
	<meta name="author" content="author name" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta http-equiv="X-UA-Compatible" content="ie=edge" />

	<title>Fur Transfer</title>

	<meta name="description" content="Site description" />
	<meta name="keywords" content="Site keywords..." />
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

	<!--== CSS @media -->
	<link rel="stylesheet" href="/assets/css/media.css" />

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

	
</head>    
<body>
	<div class="root">

		<header class="header">
			<div class="header__top">
				 <div class="container">
					 
					<div class=" header-top">

						<div class="header-top__contacts">
							<div class="header-top__phone">
								<span class="header-top__phone-title">Турция</span>
								<a href="tel:+905305219399" class="header-top__link">+90 530 5219399</a>
							</div>
							<div class="header-top__messengers">
								<a href="whatsapp://send?phone=+905305219399" class="header-top__link">whatsapp</a>
								<span>,&nbsp;</span>
								<a href="viber://chat?number=+905305219399" class="header-top__link">viber</a>
							</div>
						</div>

						<a href="#m-backcall" class="button header-top__link js-modal">Перезвоните мне</a>

					</div>

				 </div>
			</div>

			<div class="header__nav-menu">
				<div class="container">

					<nav class="nav-menu">
						<ul class="nav-menu__list">
							<li class="nav-menu__item is-active">
								<a href="/" class="nav-menu__link">Главная</a>
							</li>
							<li class="nav-menu__item">
								<a href="/views/pages/transfer.php" class="nav-menu__link">Бесплатный трансфер</a>
							</li>
							<li class="nav-menu__logo">
								<div class="logo">
									<a href="/" class="logo__link">
										<img src="/assets/images/theme/nuri-logo.svg" alt="Nuri Logo">
									</a>
								</div>
							</li>
							<li class="nav-menu__item sub-menu">
								<a href="#" class="nav-menu__link">Фабрики</a>

								<ol class="sub-menu__list">
									<li class="sub-menu__item">
										<a href="/views/pages/factories.php" class="sub-menu__link">Levinson</a>
									</li>
									<li class="sub-menu__item">
										<a href="/views/pages/factories.php" class="sub-menu__link">Emelda</a>
									</li>
									<li class="sub-menu__item">
										<a href="/views/pages/factories.php" class="sub-menu__link">Best</a>
									</li>
									<li class="sub-menu__item">
										<a href="/views/pages/factories.php" class="sub-menu__link">Punto</a>
									</li>
									<li class="sub-menu__item">
										<a href="/views/pages/factories.php" class="sub-menu__link">Bilgin's</a>
									</li>
								</ol>
							</li>
							<li class="nav-menu__item sub-menu">
								<a href="#" class="nav-menu__link">Кожа/меха</a>

								<ol class="sub-menu__list">
									<li class="sub-menu__item">
										<a href="/views/pages/prod-page.php" class="sub-menu__link">Норковая шуба</a>
									</li>
									<li class="sub-menu__item">
										<a href="/views/pages/prod-page.php" class="sub-menu__link">Шиншила</a>
									</li>
									<li class="sub-menu__item">
										<a href="/views/pages/prod-page.php" class="sub-menu__link">Дубленка</a>
									</li>
									<li class="sub-menu__item">
										<a href="/views/pages/prod-page.php" class="sub-menu__link">Кожанные изделия</a>
									</li>
									<li class="sub-menu__item">
										<a href="/views/pages/prod-page.php" class="sub-menu__link">Альпака</a>
									</li>
									<li class="sub-menu__item">
										<a href="/views/pages/prod-page.php" class="sub-menu__link">Соболь</a>
									</li>
									<li class="sub-menu__item">
										<a href="/views/pages/prod-page.php" class="sub-menu__link">Каракуль</a>
									</li>
								</ol>
							</li>
							<li class="nav-menu__item">
								<a href="/views/pages/blog.php" class="nav-menu__link">Новости</a>
							</li>
						</ul>

					</nav>

				</div>
			</div>

			<div class="header__mobile">
				<div class="container">
					<div class="mobile-header">
						<div class="mobile-header__top">
							<div class="mobile-header__logo">
								<div class="logo">
									<a href="/" class="logo__link">
										<img src="/assets/images/theme/nuri-logo.svg" alt="Nuri Logo">
									</a>
								</div>
							</div>
							<div class="mobile-header__burger no-select">
								<div class="burger">
									<div class="burger__bar burger__bar_top"></div>
									<div class="burger__bar burger__bar_btm"></div>
								</div>
							</div>
						</div>


						<div class="mobile-header__content">
							<div class="mobile-header__nav">
								<ul class="mobile-nav">
									<li class="mobile-nav__item is-active">
										<a href="/" class="mobile-nav__link">Главная</a>
									</li>
									<li class="mobile-nav__item">
										<a href="/views/pages/transfer.php" class="mobile-nav__link">Бесплатный трансфер</a>
									</li>
									<li class="mobile-nav__item">
										<a href="#" class="mobile-nav__link has-dropdown">Фабрики</a>

										<ul class="mobile-subnav">
											<li class="mobile-subnav__item">
												<a href="/views/pages/factories.php" class="mobile-subnav__link">Levinson</a>
											</li>
											<li class="mobile-subnav__item">
												<a href="/views/pages/factories.php" class="mobile-subnav__link">Emelda</a>
											</li>
											<li class="mobile-subnav__item">
												<a href="/views/pages/factories.php" class="mobile-subnav__link">Best</a>
											</li>
											<li class="mobile-subnav__item">
												<a href="/views/pages/factories.php" class="mobile-subnav__link">Punto</a>
											</li>
											<li class="mobile-subnav__item">
												<a href="/views/pages/factories.php" class="mobile-subnav__link">Bilgin's</a>
											</li>
										</ul>
									</li>
									<li class="mobile-nav__item">
										<a href="#" class="mobile-nav__link has-dropdown">Кожа/меха</a>
										
										<ul class="mobile-subnav">
											<li class="mobile-subnav__item">
												<a href="/views/pages/prod-page.php" class="mobile-subnav__link">Норковая шуба</a>
											</li>
											<li class="mobile-subnav__item">
												<a href="/views/pages/prod-page.php" class="mobile-subnav__link">Шиншила</a>
											</li>
											<li class="mobile-subnav__item">
												<a href="/views/pages/prod-page.php" class="mobile-subnav__link">Дубленка</a>
											</li>
											<li class="mobile-subnav__item">
												<a href="/views/pages/prod-page.php" class="mobile-subnav__link">Кожанные изделия</a>
											</li>
											<li class="mobile-subnav__item">
												<a href="/views/pages/prod-page.php" class="mobile-subnav__link">Альпака</a>
											</li>
											<li class="mobile-subnav__item">
												<a href="/views/pages/prod-page.php" class="mobile-subnav__link">Соболь</a>
											</li>
											<li class="mobile-subnav__item">
												<a href="/views/pages/prod-page.php" class="mobile-subnav__link">Каракуль</a>
											</li>
										</ul>
									</li>
									<li class="mobile-nav__item">
										<a href="/views/pages/blog.php" class="mobile-nav__link">Новости</a>
									</li>
								</ul>
							</div>

							<div class="mobile-header__contacts">
								<div class="mobile-header__phone">
									<span class="mobile-header__phone-title">Турция</span>
									<a href="tel:+905305219399" class="mobile-header__link">+90 530 5219399</a>
								</div>
								<div class="mobile-header__messengers">
									<a href="whatsapp://send?phone=+905305219399" class="mobile-header__link">whatsapp</a>
									<span>,&nbsp;</span>
									<a href="viber://chat?number=+905305219399" class="mobile-header__link">viber</a>
								</div>
							</div>

							<div class="mobile-header__buttons">
								<a href="#m-backcall" class="button mobile-header__button js-modal">Перезвоните мне</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>