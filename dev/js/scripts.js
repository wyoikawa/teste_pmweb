

// var cssId = 'myCss';
// var contentType = "Content-Type";
//
// if (!document.getElementById(cssId)) {
// 	var head  = document.getElementsByTagName('head')[0];
// 	var link  = document.createElement('link');
// 	link.contentType = "text/css";
// 	link.rel  = 'stylesheet';
// 	link.type = 'text/css';
// 	link.href = 'https://cdn.rawgit.com/wyoikawa/teste_pmweb/master/prod/css/styles.min.css';
// 	link.media = 'all';
// 	head.appendChild(link);
// }


// ------------------- ALTERAÇÕES CSS

$(".page-content").css({
	"background": "none",
	"box-shadow": "none !important",
	"width": "94%",
	"margin": "0 auto"
});
$(".page-content #listagemHoteisContent .itemHotel").css({
	"width": "33.33%",
	"float": "left",
	"padding": "20px",
	"background": "#FFFFFF"
})
$("#navTop").css("background-color", "#f5534b");
$(".mcolor-label-text2, .mcolor-cliente-principal-text, .mcolor-cliente-principal-text, .ultimaBusca:not(:first-child) .ultima-busca-label, #caminho.mcolor-label-text2, .busca-field .mcolor-label-text").css("color", "#f5534b");
$(".busca-flutuante-field-icon .mcolor-label-text2").css("color", "#f5534b");
$("#busca-btn.mcolor-action-btn").css("background-color", "#F6534C");
$("#busca-btn.mcolor-action-btn").hover(function() {
	$(this).attr("style", "background-color: #e64c45 !important");
});
$(".bubblingG2 span").css("background", "#F6534C");
$("#destino, #datas, #adultos, #criancas, #modificarBusca").hover(function() {
	$(this).css("color", "#c74f4a");
}, function(){
	$(this).css("color", "#FFFFFF");
});
$("#caminho.mcolor-label-text2 .caminho-pagina-atual").css("text-decoration", "none");
$(".mcolor-busca-bright").css("background", "#493E38");
$(".bloco-seletor-adulto, .bloco-seletor-crianca").css("background-color", "#303131");
$(".bloco-seletor-adulto.bloco-seletor-adulto-selected, .bloco-seletor-crianca.bloco-seletor-crianca-selected").attr("style", "background-color: #483F38 !important");
$(".mcolor-cliente-principal-bg").css("background", "#302C29");
$(".mcolor-busca-dark").css("background", "#201F1D");
$("#busca-promocode-label").css("color", "#FFFFFF");
$(".page-content #listagemHoteisContent").css("margin", "0 -15px");
$(".page-content #listagemHoteisContent .itemHotel:nth-child(1)").css("margin-top", "0")
$(".page-content #listagemHoteisContent .itemHotel .slider-imagens-hotel, .page-content #listagemHoteisContent .itemHotel .slider-imagens-hotel .slide img").css("width", "100%");
$(".page-content #listagemHoteisContent .itemHotel .slider-imagens-hotel .img-hotel-arrow-right").css({
	"left": "auto",
	"right": "0"
});
$(".page-content #listagemHoteisContent .itemHotel .itemHotelContent").css({
	"clear": "both",
	"margin-left": "0"
});
$("#busca-calendario .dia-semana").attr("style", "color: #f5534b !important");
$(".gridDatas .blocoData").css("width", "50px");

$("#buscarNovamente").css({
	"width": "100%",
	"float": "left"
});
$("footer").css({
	"width": "100%",
	"float": "left"
});

$("#busca-calendario").css({
	"width": "450px"
});
$("#calendario-1").css({
	"width": "100%",
	"margin-left": "0"
});
$("#calendar-2").remove();


// -------------------  MONTA LINK DA MODAL

document.write("<span><a href='#' onclick='abreModal()'>Ver promoções do hotel</a></span>");

// ------------------ MONTA MODAL

document.write("<div class=''></div>")

function abreModal(codigoHotel) {
	var baseURL = "http://pmweb.agencia.pmweb.com.br/teste-cro/promocoes/" + codigoHotel + ".json";
	$.ajax({
		type: "GET",
		dataType: 'json',
		url: baseURL,
		success: function (data) {
			data.forEach(function(item, index) {
				console.log(item.CodigoTarifa)
			})
		}
	})
}
