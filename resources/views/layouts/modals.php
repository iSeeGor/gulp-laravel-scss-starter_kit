<div class="modals">

	<div class="modal m-backcall" id="m-backcall">

		<div class="block-form">
			<div class="block-form__inner">

				<div class="block-form__header">
					<div class="block-form__title">Перезвоните мне</div>
					<div class="block-form__description">Для того, чтобы оставить заявку, заполните форму
						и мы свяжемся с Вами для уточнения деталей
					</div>
				</div>

				<form class="main-form form js-validate" autocomplete="off">
					<div class="form__row">
						<div class="input-group">
							<input class="input_nuri" type="text" name="name" id="m-name" required>
							<label for="m-name"><span>Ваше имя</span></label>
						</div>
					</div>
					<div class="form__row">
						<div class="input-group">
							<input class="input_nuri input_number" type="text" name="phone" id="m-phone" required minlength="10" digits="true">
							<label for="m-phone"><span>Ваш телефон </span></label>
						</div>
					</div>
					<div class="form__row">
						<div class="input-group">
							<textarea class="textarea_nuri" name="msg" id="m-msg"></textarea>
							<label for="m-msg"><span>Пожалуйста, напишите вопросы, которые<br> Вас интересуют</span></label>
						</div>
					</div>

					<button type="submit" class="button button_primary">Отправить</button>
				</form>
			</div>
		</div>

		<button class="button modal__close" aria-label="Close">
			<svg class="icon-close">
				<use xlink:href="/assets/sprite/symbol/sprite.svg#icon-close"></use>
			</svg>
		</button>

	</div>

	<div class="modal m-transfer" id="m-transfer">

		<div class="block-form">
			<div class="block-form__inner">

				<div class="block-form__header">
					<div class="block-form__title">Заказать бесплатный трансфер</div>
					<div class="block-form__description">Для того, чтобы оставить заявку, заполните форму
						и мы свяжемся с Вами для уточнения деталей
					</div>
				</div>

				<form class="main-form form js-validate" autocomplete="off">
					<div class="form__row">
						<div class="input-group">
							<input class="input_nuri" type="text" name="name" id="m-name" required>
							<label for="m-name"><span>Ваше имя</span></label>
						</div>
					</div>
					<div class="form__row">
						<div class="input-group">
							<input class="input_nuri input_number" type="text" name="phone" id="m-phone" required minlength="10" digits="true">
							<label for="m-phone"><span>Ваш телефон </span></label>
						</div>
					</div>
					<div class="form__row">
						<div class="input-group">
							<textarea class="textarea_nuri" name="msg" id="m-msg"></textarea>
							<label for="m-msg"><span>Пожалуйста, напишите вопросы, которые<br> Вас интересуют</span></label>
						</div>
					</div>

					<button type="submit" class="button button_primary">Отправить</button>
				</form>
			</div>
		</div>

		<button class="button modal__close" aria-label="Close">
			<svg class="icon-close">
				<use xlink:href="/assets/sprite/symbol/sprite.svg#icon-close"></use>
			</svg>
		</button>

	</div>

	<div class="modal m-success" id="m-success">
		<div class="block-form">
			<div class="block-form__inner">

				<div class="block-form__header">
					<div class="block-form__title">Спасибо, заявка успешно отправлена</div>
					<div class="block-form__description">Мы свяжемся с Вами в ближайшее время
					</div>
				</div>
			</div>
		</div>

		<button class="button modal__close" aria-label="Close">
			<svg class="icon-close">
				<use xlink:href="/assets/sprite/symbol/sprite.svg#icon-close"></use>
			</svg>
		</button>
	</div>

</div>