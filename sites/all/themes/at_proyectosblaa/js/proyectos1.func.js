(function ($, Drupal, window, document, undefined) {
	$(document).ready(function(){
		var path = window.location.pathname;
		var pathArray = [];
		var pathArray = path.split("/");
		console.log(pathArray);
	if(typeof pathArray[1] == "string" && pathArray[1] == "arquitectura-bahareque-manizales"){	
		if(typeof pathArray[3] == 'string' && UrlExists('urlImage')){
				urlImage = "http://proyectos.banrepcultural.org/sites/default/files/fondos/"+pathArray[1]+"/"+ pathArray[3] +".jpg",
				console.log(pathArray[3]);
		}
		else if(typeof pathArray[1] == "string" &&  typeof pathArray[3] == "undefined" || pathArray[3] == "portugues" ){
				urlImage = "http://proyectos.banrepcultural.org/sites/default/files/fondos/"+pathArray[1]+"/inicio.jpg",
				console.log(pathArray[3]);
		}
		else{
			urlImage = "http://proyectos.banrepcultural.org/sites/default/files/fondos/"+pathArray[1]+"/default.jpg";
		}

			$.backstretch(
				urlImage,
				{centeredX: true},
				{centeredY: true}
			);
	}
	function UrlExists(url){
	    var http = new XMLHttpRequest();
	    http.open('HEAD', url, false);
	    http.send();
	    return http.status!=404;
	}		
	});// fin document ready
})(jQuery, Drupal, this, this.document);