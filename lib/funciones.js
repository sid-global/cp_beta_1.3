/* PROYECTO: COR PROCESSU MOBILE */

/* Limpia las variables del localStorage, y redirecciona al Login
 * 20120613 mt
 */
function salir() {
	localStorage.clear();
	window.open("index.html","_self");	
}
	
/* Abre una nueva ventana en la página de SID
 * 20120613 mt
 */
function sid() {
	window.open("http://www.integradores.net");		
}

/* Función que redirecciona al url pasapa por parámetro
 * 20120613 mt
 */
function redireccionar(url) {
	window.open(url,"_self");
}

/* Obtiene la lista de las Tareas que puede visualizar el usuario logueado, siempre que su estatus absoluto sea 'A'
 * 20120613 mt
 */
function cargarTareasAbiertas(){
	var res = '';
	var html = '<div data-role="collapsible-set"><div data-role="collapsible" data-collapsed="true" data-theme="a">';
	$.getJSON("http://nube4u.com/sid_servicios/json/listaOSAbiertas.php?jsoncallback=?", {usuario:localStorage.nombre}, function(data) {	
		$.each(data, function(i, item) {
			if (res != item.resp) {
				if(res == ''){
					html+= '<h3>'+ item.resp +'</h3><p><ul data-role="listview">';
					res= item.resp;
				} else{
					html+= '</ul></p></div><div data-role="collapsible" data-collapsed="true" data-theme="a">';
					html+= '<h3>'+ item.resp +'</h3><p><ul data-role="listview">';
					res= item.resp;
				}
			}
			html = html + '<li><a onclick="ingresarTrack(' + item.sec + ')" id="' + item.sec + '"> TAREA #'+item.sec+'</a><p> '+item.id+'; '+ item.resp+ '; ' + item.estatus +'</p></li>';	
		});
		html = html + '</ul></p></div></div>';
		$(html).appendTo("#tareas");
		res='';
		location.href="ConsultaOSAbiertas.html\#consulta_os";
	});	
}

/* Obtiene la lista de las Tareas que puede visualizar el usuario logueado, siempre que su estatus absoluto sea 'C'
 * 20120613 mt
 */
function cargarTareasCerradas(){
	usuarioConectado = localStorage.nombre;
	var res = '';
	var html = '<div data-role="collapsible-set"><div data-role="collapsible" data-collapsed="true" data-theme="a">';
	$.getJSON("http://nube4u.com/sid_servicios/json/listaOSCerradas.php?jsoncallback=?", {usuario:usuarioConectado}, function(data) {	
		$.each(data, function(i, item) {
			if (res != item.resp) {
				if(res == ''){
					html+= '<h3>'+ item.resp +'</h3><p><ul data-role="listview">';
					res= item.resp;
				} else{
					html+= '</ul></p></div><div data-role="collapsible" data-collapsed="true" data-theme="a">';
					html+= '<h3>'+ item.resp +'</h3><p><ul data-role="listview">';
					res= item.resp;
				}
			}
			html = html + '<li><a onclick="ingresarTrack(' + item.sec + ')" id="' + item.sec + '"> TAREA #'+item.sec+'</a><p> '+item.id+'; '+ item.resp+ '; ' + item.estatus +'</p></li>';	
		});
		html = html + '</ul></p></div></div>';
		$(html).appendTo("#tareas");
		res='';
		location.href="ConsultaOSCerradas.html\#consulta_os";
	});	
}

/* Obtiene la lista de las Tareas que puede visualizar el usuario logueado, cuya fecha límite sea igual a la fecha del sistema
 * 20120613 mt
 */
function cargarTareasHoy(){
	var res = '';
	var html = '<div data-role="collapsible-set"><div data-role="collapsible" data-collapsed="true" data-theme="a">';
	$.getJSON("http://nube4u.com/sid_servicios/json/listaOSHoy.php?jsoncallback=?", {usuario:localStorage.nombre}, function(data) {	
		$.each(data, function(i, item) {
			if (res != item.resp) {
				if(res == ''){
					html+= '<h3>'+ item.resp +'</h3><p><ul data-role="listview">';
					res= item.resp;
				} else{
					html+= '</ul></p></div><div data-role="collapsible" data-collapsed="true" data-theme="a">';
					html+= '<h3>'+ item.resp +'</h3><p><ul data-role="listview">';
					res= item.resp;
				}
			}
	html = html + '<li><a onclick="ingresarTrack(' + item.sec + ')" id="' + item.sec + '"> TAREA #'+item.sec+'</a><p> '+item.id+'; '+ item.resp+ '; ' + item.estatus +'</p></li>';	
		});
		html = html + '</ul></p></div></div>';
			$(html).appendTo("#tareas");
		res='';
		location.href="ConsultaOSHoy.html\#consulta_os";
	});	
}

/* Obtiene la lista de las Tareas que puede visualizar el usuario logueado, siempre que se encuentren vencidas
 * 20120613 mt 
 */
function cargarTareasVencidas(){
	var res = '';
	var html = '<div data-role="collapsible-set"><div data-role="collapsible" data-collapsed="true" data-theme="a">';
	$.getJSON("http://nube4u.com/sid_servicios/json/listaOSVencidas.php?jsoncallback=?", {usuario:localStorage.nombre}, function(data) {	
		$.each(data, function(i, item) {
			if (res != item.resp) {
				if(res == ''){
					html+= '<h3>'+ item.resp +'</h3><p><ul data-role="listview">';
					res= item.resp;
				} else{
					html+= '</ul></p></div><div data-role="collapsible" data-collapsed="true" data-theme="a">';
					html+= '<h3>'+ item.resp +'</h3><p><ul data-role="listview">';
					res= item.resp;
				}
			}
			html = html + '<li><a onclick="ingresarTrack(' + item.sec + ')" id="' + item.sec + '"> TAREA #'+item.sec+'</a><p> '+item.id+'; '+ item.resp+ '; ' + item.estatus +'</p></li>';	
		});
		html = html + '</ul></p></div></div>';
		$(html).appendTo("#tareas");
		res='';
		location.href="ConsultaOSVencidas.html\#consulta_os";
	});	
}	

/* Realiza la validación de los datos del login
 * 20120613 mt 
 */
function login () {
	var usuario = document.getElementById("login").value;
	var psw = document.getElementById("password").value;
		
	// Se validan los datos del usuario
	$.getJSON("http://nube4u.com/sid_servicios/json/validarLogin.php?jsoncallback=?", {usuario:usuario , psw:psw}, function(data){
		var login = data.result;
		if (login == 'OK') {
			usuarioConectado = usuario;
			localStorage.nombre = usuario;
			location.href="index.html\#menu_principal";
		} else if (login == 'BD') {
			alert("Se produjo un error al conectar con la BD");	
		} else if (login == 'US') {
			alert ("El usuario no se encuentra registrado en la base de datos o se encuentra inactivo.");
		} else if (login == 'NO') {
			alert ("Contraseña inválida.");
		}
				
   	});	
	
}

/* Obtiene la lista de las tareas que puede ver el usuario logueado, a las cuales se les haya registrado un tracking durante el día en curso
 * 20120613 alvaro
 */
function cargarTareasTS(){
	var html = '<div data-role="collapsible-set"><div data-role="collapsible" data-collapsed="true" data-theme="a">';
	var res = '';
	$.getJSON("http://nube4u.com/sid_servicios/json/listaOSTimeSheet.php?jsoncallback=?", function(count) {	
			if (count.cant == 0) {	
				location.href="ConsultaTimesheet.html\#timeSheet";
			} else {
				$.getJSON("http://nube4u.com/sid_servicios/json/listaOSTimeSheet.php?jsoncallback=?", function(data) {	
					$.each(data, function(i, item) {
						if (res != item.trk_login_mod) {
							if(res == ''){
								html+= '<h3>'+ item.trk_login_mod +'</h3><p><ul data-role="listview">';
								res= item.trk_login_mod;
							} else{
								html+= '</ul></p></div><div data-role="collapsible" data-collapsed="true" data-theme="a">';
								html+= '<h3>'+ item.trk_login_mod +'</h3><ul data-role="listview">';
								res= item.trk_login_mod;
							}
						}
						html = html + '<li><a onclick="ingresarTrack(' + item.sec + ')" id="' + item.sec + '"> TAREA #'+item.sec+'</a><p> '+item.id+'; '+ item.resp+ '</p><p>'+ item.trk_obs+';'+ item.trk_login_mod + '; ' + item.estatus +'</p></li>';	
					});
					html = html + '</ul></p></div></div>';
					$(html).appendTo("#timesheet");
					res='';
					location.href="ConsultaTimesheet.html\#timeSheet";
				});
			}
		});
}
