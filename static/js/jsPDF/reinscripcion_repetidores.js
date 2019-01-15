$("#imprimir_reinscripcion_repetidores").on("click", function () {

	//create object for PDF 
	var ingreso = new jsPDF();
	//Title document PDF
	ingreso.setFontSize(20);
    ingreso.setFont("Arial");
	ingreso.setFontType("bold");
	ingreso.text(110,10,"Formato de nuevo ingreso repetidores","center");

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
	ingreso.text(10,52,"Semestre: ");
	ingreso.text(10,58,"Grupo: ");
	ingreso.text(10,64,"Semestre a cursar: ");
	ingreso.text(10,70,"Domicilio: ");
	ingreso.text(10,76,"Colonia: ");
	ingreso.text(10,82,"Teléfono: ");
	ingreso.text(10,88,"Celular Tutor: ");
	ingreso.text(10,94,"Semestre Capacitación: ");
	
	//get values alumno
	var ap_pat_repetidor = document.getElementById("ap_pat_repetidor").value;
	var ap_mat_repetidor = document.getElementById("ap_mat_repetidor").value;
	var nombre_repetidor = document.getElementById("nombre_repetidor").value;
	var num_mat_repetidor = document.getElementById("num_mat_repetidor").value;
	var semestre_repetidor = document.getElementById("semestre_repetidor").value;
	var grupo_repetidor = document.getElementById("grupo_repetidor").value;
	var semestre_cursar_repetidor = document.getElementById("semestre_cursar_repetidor").value;
	var domicilio_repetidor = document.getElementById("domicilio_repetidor").value;
	var colonia_repetidor = document.getElementById("colonia_repetidor").value;
	var tel_repetidor = document.getElementById("tel_repetidor").value;
	var cel_repetidor = document.getElementById("cel_repetidor").value;
	var sem_cap_repetidor = document.getElementById("sem_cap_repetidor").value;

	//insert values alumno

	ingreso.setFontSize(11);
    ingreso.setFont("Arial");
    ingreso.setFontType("");

    ingreso.text(60,28,ap_pat_repetidor);
	ingreso.text(60,34,ap_mat_repetidor);
	ingreso.text(60,40,nombre_repetidor);
	ingreso.text(60,46,num_mat_repetidor);
	ingreso.text(60,52,semestre_repetidor);
	ingreso.text(60,58,grupo_repetidor);
	ingreso.text(60,64,semestre_cursar_repetidor);
	ingreso.text(60,70,domicilio_repetidor);
	ingreso.text(60,76,colonia_repetidor);
	ingreso.text(60,82,tel_repetidor);
	ingreso.text(60,88,cel_repetidor);
	ingreso.text(60,94,sem_cap_repetidor);

	//subtitle data tutor
	ingreso.setFontSize(15);
    ingreso.setFont("Arial");
    ingreso.setFontType("");
	ingreso.text(110,108,"Carta Compromiso","center");

	ingreso.setFont("Arial");
	ingreso.setFontSize(10);
    ingreso.setFontType("bold");
	ingreso.text(10,116,"Por este medio, hago constar que conozco el reglamento general de alumnos del colegio de bachilleres de Chiapas,");
	ingreso.text(10,121,"en lo que respecta a inscripciones, reinscripciones y evaluaciones del sistema escolarizado, por lo que únicamente");
	ingreso.text(10,126,"cuento con este periodo normal del: ");
	ingreso.text(110,126,"semestre ciclo: ");
	ingreso.text(170,126," Para acreditar las");
	ingreso.text(10,132,"asignaturas como alumno: REPETIDOR.Y que de no acreditar, causare BAJA ACADEMICA sin recurrir a apelación ");
	ingreso.text(10,138,"alguna para mi causa y con pleno conocimiento de mis padres o tutor; cómo lo hace constar su firma. Una vez ");
	ingreso.text(10,144,"manifestada mi conformidad, sólo me resta decir que pondré mi más grande empeño para acreditar dichas materias. ");

	//get carta compromiso
	var periodo_repetidor = document.getElementById("periodo_repetidor").value;
	var ciclo_repetidor = document.getElementById("ciclo_repetidor").value;
	//insert carta compromiso
	ingreso.setFont("Arial");
    ingreso.setFontType("");
	ingreso.text(75,126,periodo_repetidor);
	ingreso.text(138,126,ciclo_repetidor);



	//get name tutor y alumno
	var nom_tut_repetidor = document.getElementById("nom_tut_repetidor").value;
	var nom_dos_repetidor = document.getElementById("nom_dos_repetidor").value;

	//Firma de tutor
	ingreso.setFontSize(15);
    ingreso.setFont("Arial");
    ingreso.setFontType("");
    ingreso.text(110,168,nom_tut_repetidor, "center");
	ingreso.text(110,154,"Nombre y firma del tutor","center");
	ingreso.line(70, 170, 150, 170); // horizontal line
	//Firma del alumno
	ingreso.setFontSize(15);
    ingreso.setFont("Arial");
    ingreso.setFontType("");
    ingreso.text(110,193,nom_dos_repetidor,"center");
	ingreso.text(110,180,"Nombre y firma del alumno","center");
	ingreso.line(70, 195, 150, 195); // horizontal line

	var dia_alumno_rep = document.getElementById("dia_alumno_rep").value;
	var mes_alumno_rep = document.getElementById("mes_alumno_rep").value;
	var ano_alumno_rep = document.getElementById("ano_alumno_rep").value;


	ingreso.text(40,270,"Tuxtla Gutiérrez, Chiapas; a ");
	ingreso.text(110,270,"del mes ");
	ingreso.text(160,270,"del año ");
	ingreso.text(105,270,dia_alumno_rep);
	ingreso.text(135,270,mes_alumno_rep);
	ingreso.text(185,270,ano_alumno_rep);

	//generate PDF
	ingreso.save('reinscripcion_repetidor.pdf');






	 });