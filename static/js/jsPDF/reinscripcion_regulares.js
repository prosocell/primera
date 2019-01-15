$("#imprimir_reinscripcion_regulares").on("click", function () {

	//create object for PDF 
	var ingreso = new jsPDF();
	//Title document PDF
	ingreso.setFontSize(20);
    ingreso.setFont("Arial");
	ingreso.setFontType("bold");
	ingreso.text(110,10,"Solicitud de reinscripcion","center");

	//subtitle data alumno
	ingreso.setFontSize(15);
    ingreso.setFont("Arial");
    ingreso.setFontType("");
	ingreso.text(110,20,"DATOS PERSONALES DEL ALUMNO","center");

	//Label content alumno
	ingreso.setFontSize(11);
    ingreso.setFont("Arial");
	ingreso.setFontType("bold");

	ingreso.text(10,28,"Apellido paterno: ");
	ingreso.text(10,34,"Apellido materno: ");
	ingreso.text(10,40,"Nombre(s): ");
	ingreso.text(10,46,"Número de Matrícula: ");
	ingreso.text(10,52,"Grupo Anterior: ");
	ingreso.text(10,58,"Semestre a cursar: ");
	ingreso.text(10,64,"Domicilio: ");
	ingreso.text(10,70,"Colonia: ");
	ingreso.text(10,76,"Teléfono: ");
	ingreso.text(10,82,"Celular Tutor: ");
	ingreso.text(10,88,"Capacitacion trabajo: ");

	//get values tutor
	var ap_pat_alumno_reg = document.getElementById("ap_pat_alumno_reg").value;
	var ap_mat_alumno_reg = document.getElementById("ap_mat_alumno_reg").value;
	var nombre_alumno_reg = document.getElementById("nombre_alumno_reg").value;
	var num_mat_alumno_reg = document.getElementById("num_mat_alumno_reg").value;
	var grup_ant_alumno_reg = document.getElementById("grup_ant_alumno_reg").value;
	var semestre_cursar = document.getElementById("semestre_cursar").value;
	var domicilio_alumno_reg = document.getElementById("domicilio_alumno_reg").value;
	var colonia_alumno_reg = document.getElementById("colonia_alumno_reg").value;
	var tel_tut_alumno_reg = document.getElementById("tel_tut_alumno_reg").value;
	var cel_tut_alumno_reg = document.getElementById("cel_tut_alumno_reg").value;
	var sem_cap_alumno_reg = document.getElementById("sem_cap_alumno_reg").value;
	
	var dia_alumno_reg = document.getElementById("dia_alumno_reg").value;
	var mes_alumno_reg = document.getElementById("mes_alumno_reg").value;
	var ano_alumno_reg = document.getElementById("ano_alumno_reg").value;

	//insert values alumno

	ingreso.setFontSize(11);
    ingreso.setFont("Arial");
    ingreso.setFontType("");

    ingreso.text(60,28,ap_pat_alumno_reg);
	ingreso.text(60,34,ap_mat_alumno_reg);
	ingreso.text(60,40,nombre_alumno_reg);
	ingreso.text(60,46,num_mat_alumno_reg);
	ingreso.text(60,52,grup_ant_alumno_reg);
	ingreso.text(60,58,semestre_cursar);
	ingreso.text(60,64,domicilio_alumno_reg);
	ingreso.text(60,70,colonia_alumno_reg);
	ingreso.text(60,76,tel_tut_alumno_reg);
	ingreso.text(60,82,cel_tut_alumno_reg);
	ingreso.text(60,88,sem_cap_alumno_reg);

	var nom_tutor_reg = document.getElementById("nom_tutor_reg").value;

	//Firma de tutor
	ingreso.setFontSize(15);
    ingreso.setFont("Arial");
    ingreso.setFontType("");
	ingreso.text(110,108,"Firma del tutor","center");
	ingreso.text(110,123,nom_tutor_reg,"center");
	ingreso.line(70, 125, 150, 125); // horizontal line

	ingreso.text(40,270,"Tuxtla Gutiérrez, Chiapas; a ");
	ingreso.text(110,270,"del mes ");
	ingreso.text(160,270,"del año ");
	ingreso.text(105,270,dia_alumno_reg);
	ingreso.text(135,270,mes_alumno_reg);
	ingreso.text(185,270,ano_alumno_reg);

	//Generate PDF
	ingreso.save('reinscripcion_regular.pdf');

});