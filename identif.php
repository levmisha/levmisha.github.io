<?php
echo '<div class="enter">
<div class="close"></div>
<form class="enter__form" method="post">
	<label class="enter__name">Логин <input type="text" class="enter__input"></label>
	<label class="enter__password">Пароль <input type="text" class="enter__input"></label>
	<input type="button" class="enter__send" value="Войти">
	<div class="enter__register">
		Зарегистрироваться
	</div>
</form>
</div>
<div class="new-user">
	<div class="close"></div>
	<form class="new-user__form" method="post">
		<label class="new-user__name">Логин <input type="text" class="new-user__input"></label>
		<label class="new-user__password">Пароль <input type="text" class="new-user__input"></label>
		<label class="new-user__email">Почта <input type="text" class="enter__input"></label>
		<input type="button" class="new-user__send" value="Зарегистрироваться">
		<div class="new-user__enter">
			Вход
		</div>
	</form>
</div>';
?>