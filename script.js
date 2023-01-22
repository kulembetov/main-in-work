// Поворачивает кнопку при на нажатии на кнопку

document.querySelectorAll(".main-in-work__button").forEach((item) =>
item.addEventListener("click", ({ target }) => {
	target
		.closest(".main-in-work__box")
		.querySelectorAll(".main-in-work__button")
		.forEach((item) => {
			item.classList.toggle("main-in-work__button_active");
		});
	target
		.closest(".main-in-work__box")
		.querySelectorAll(".main-in-work__button")
		.forEach(function (item) {
			item.classList.toggle("main-in-work__button_active");
		});
})
);

// Открывает аккордеон и поворачивает кнопку при открытии аккордеона

document.querySelectorAll(".main-in-work__wrapper").forEach((item) =>
item.addEventListener("click", ({ target }) => {
	target
		.closest(".main-in-work__box")
		.querySelectorAll(".main-in-work__button")
		.forEach((item) => {
			item.classList.toggle("main-in-work__button_active");
		});
	target
		.closest(".main-in-work__box")
		.querySelectorAll(".main-in-work__description")
		.forEach(function (item) {
			item.classList.toggle("main-in-work__description_active");
		});
})
);