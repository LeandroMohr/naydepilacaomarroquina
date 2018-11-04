$('.depoimento').slick({
	infinite: true,
	centerMode: false,
	arrows: false,
	dots: false,
	mobileFirst: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1024,
			settings: "unslick"
		}
	]
});

$('.phone-mask').mask('(00) 00000-0000');

// Exemplo de JavaScript inicial para desativar envios de formulário, se houver campos inválidos.
(function () {
	'use strict';
	window.addEventListener('load', function () {
		// Pega todos os formulários que nós queremos aplicar estilos de validação Bootstrap personalizados.
		var forms = document.getElementsByClassName('lead');
		// Faz um loop neles e evita o envio
		var validation = Array.prototype.filter.call(forms, function (form) {
			form.addEventListener('submit', function (event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
			}, false);
		});
	}, false);
})();

// Habilita mensagem no Hover. Ex: Facebook no cabeçalho
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

$('body').on('click', '.ancora', function () {
	$('html, body').stop().animate({ scrollTop: $($(this).attr('href')).offset().top - 100 }, 1000, 'linear');
});