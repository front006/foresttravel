document.querySelector('.burger').addEventListener('click', function () {
	document.querySelector('.burger__line').classList.toggle('active');
    document.querySelector('.header-nav').classList.toggle('header-nav--active');
});