function Saludar() {
	var saludo = "";
	var tiempo = new Date().getHours();

	if (tiempo < 12){
		saludo = "Buenos Dias";
	}else if (tiempo < 18) {
		saludo = "Buenas Tardes UwU";
	}else{
		saludo = "Buenas Noches"
	} 
	document.getElementById('saludo').innerHTML = saludo
}
