$('.depoimento').slick({
	infinite: true,
	centerMode: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	responsive: [
		{
			breakpoint: 2560,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
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