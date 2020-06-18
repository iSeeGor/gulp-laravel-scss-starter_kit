<?php include '../layouts/header.php'; ?>

<main class="main post">

	<div class="breadcrumbs">
		<div class="container">
			<nav class="breadcrumbs__nav">
				<ol class="breadcrumbs__list">

					<li class="breadcrumbs__item">
						<a href="/" class="breadcrumbs__link" title="Главная">Главная</a></li>

					<li class="breadcrumbs__item">
						<a href="/views/pages/blog.php" class="breadcrumbs__link" title="Новости ">Новости</a></li>

					<li class="breadcrumbs__item current">
						Название новости</li>
				
				</ol>
			</nav>
		</div>    
	</div>


	<header class="post__header">
		<div class="container">

			<div class="post-header">
				<h1 class="post-header__title">Длинное название новости, которое может состоять из нескольких строк</h1>
			
				<div class="post-header__meta">
					<div class="post-header__meta-category">
						<a href="#" class="post-header__meta-link">Название категории</a>
					</div>
					<div class="post-header__meta-date">
						16/02/20
					</div>
				</div>
			</div>

		</div>
	</header>

	<div class="post__thumbnail">
		<div class="container">
			<div class="post-thumb">
				<img src="/assets/images/content/post/post-image.jpg" alt="" class="post-thumb__image">
			</div>
		</div>
	</div>

	<div class="post__content">
		<div class="container">

			<div class="post__typography typography">
				<h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi!</h2>
				<h3>Lorem ipsum dolor sit.</h3>
				<p>С другой стороны укрепление и развитие структуры играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Равным образом новая модель организационной деятельности позволяет выполнять важные задания по разработке дальнейших направлений развития. Разнообразный и богатый опыт новая модель организационной деятельности в значительной степени обуславливает создание дальнейших направлений развития.</p>
				
				<h4>Lorem ipsum dolor sit amet consectetur.</h4>
				<p>По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.</p>

				<p>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/NLnkBpT3Cu8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</p>

				<p>По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.</p>

				<img src="/assets/images/content/post/post-image-02.jpg" alt="">

				<p>По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.</p>

				<p>По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.</p>
				
				<ul>
					<li>Lorem ipsum dolor sit amet consectetur.</li>
					<li>Lorem ipsum dolor sit amet consectetur.</li>
					<li>Lorem ipsum dolor sit amet consectetur.</li>
					<li>Lorem ipsum dolor sit amet consectetur.</li>
					<li>Lorem ipsum dolor sit amet consectetur.</li>
					<li>Lorem ipsum dolor sit amet consectetur.</li>
				</ul>

				<p>По своей сути <a href="#">рыбатекст является</a> альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.</p>

				<ol>
					<li>Lorem ipsum dolor sit amet consectetur.</li>
					<li>Lorem ipsum dolor sit amet consectetur.</li>
					<li>Lorem ipsum dolor sit amet consectetur.</li>
					<li>Lorem ipsum dolor sit amet consectetur.</li>
					<li>Lorem ipsum dolor sit amet consectetur.</li>
					<li>Lorem ipsum dolor sit amet consectetur.</li>
				</ol>

				<blockquote>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolore eos saepe pariatur possimus nobis ipsa, animi excepturi minima laboriosam officiis nulla quae omnis in error soluta quas voluptatem ab.</p>
				</blockquote>
			</div>

			<div class="post__share share">
				<div class="share__title">Поделиться:</div>
				<div class="share__body">
					<script type="text/javascript">(function() {
						if (window.pluso)if (typeof window.pluso.start == "function") return;
						if (window.ifpluso==undefined) { window.ifpluso = 1;
						var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
						s.type = 'text/javascript'; s.charset='UTF-8'; s.async = true;
						s.src = ('https:' == window.location.protocol ? 'https' : 'http')  + '://share.pluso.ru/pluso-like.js';
						var h=d[g]('body')[0];
						h.appendChild(s);
						}})();</script>
					<div class="pluso" data-background="transparent" data-options="medium,round,line,horizontal,nocounter,theme=04" data-services="facebook,vkontakte,twitter,print"></div>
				</div>
			</div>
		
		</div>
	</div>

</main>

<?php include '../layouts/modals.php'; ?>
<?php include '../layouts/footer.php'; ?>