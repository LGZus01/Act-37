function iniciar(){
	var elemento=document.getElementById("lienzooooo");
	lienzo=elemento.getContext("2d");
	lienzo.globalAlpha=".5";
	lienzo.fillStyle="#950505";

	//Primer rectangulo, color rojo
	lienzo.fillRect(5,5,770,470);
	//Hacemos el recorte dejando 10 en cada lado
	lienzo.clearRect(15,15,750,450);

	//Vamos por la linea delgada
	lienzo.strokeStyle="#C19309";
	lienzo.strokeRect(20,20,740,440);

	

	//Hacemos nuevamente lo mismo
	lienzo.fillRect(25,25,730,430);
	//Hacemos nuevamente el corte
	lienzo.clearRect(35,35,710,410);

	//Hacemos nuevo la lineaaaaaaaaaaaaaa delgada
	lienzo.strokeStyle="#C19309";
	lienzo.strokeRect(40,40,700,400);



	//Hacemos nuevamente lo mismo
	lienzo.fillRect(45,45,690,390);
	//Hacemos nuevamente el corte
	lienzo.clearRect(55,55,670,370);

	//Hacemos nuevo la lineaaaaaaaaaaaaaa delgada
	lienzo.strokeStyle="#C19309";
	lienzo.strokeRect(60,60,660,360);




	//Hacemos nuevamente lo mismo
	lienzo.fillRect(65,65,650,350);
	//Hacemos nuevamente el corte
	lienzo.clearRect(75,75,630,330);

	//Hacemos nuevo la lineaaaaaaaaaaaaaa delgada
	lienzo.strokeStyle="#C19309";
	lienzo.strokeRect(80,80,620,320);



	//Hacemos nuevamente lo mismo
	lienzo.fillRect(85,85,610,310);
	//Hacemos nuevamente el corte
	lienzo.clearRect(95,95,590,290);

	//Hacemos nuevo la lineaaaaaaaaaaaaaa delgada
	lienzo.strokeStyle="#C19309";
	lienzo.strokeRect(100,100,580,280);
}
window.addEventListener("load",iniciar,false);