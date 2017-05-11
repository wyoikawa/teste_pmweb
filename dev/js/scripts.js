

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


// -------------------

document.write("<span><a href='#' onclick='abreModal()'>Ver promoções do hotel</a></span>")

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
