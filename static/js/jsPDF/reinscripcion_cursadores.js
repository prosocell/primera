$("#imprimir_reinscripcion_cursadores").on("click", function () {

	//create object for PDF 
	var ingreso = new jsPDF();
	//Title document PDF
	ingreso.setFontSize(20);
    ingreso.setFont("Arial");
	ingreso.setFontType("bold");
	ingreso.text(110,10,"Formato de nuevo ingreso cursadores","center");

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
	ingreso.text(10,29,"Apellido materno: ");
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
	var ap_pat_cursador = document.getElementById("ap_pat_cursador").value;
	var ap_mat_cursador = document.getElementById("ap_mat_cursador").value;
	var nombre_cursador = document.getElementById("nombre_cursador").value;
	var num_mat_cursador = document.getElementById("num_mat_cursador").value;
	var semestre_cursador = document.getElementById("semestre_cursador").value;
	var grupo_cursador = document.getElementById("grupo_cursador").value;
	var semestre_cursar_cursador = document.getElementById("semestre_cursar_cursador").value;
	var domicilio_cursador = document.getElementById("domicilio_cursador").value;
	var colonia_cursador = document.getElementById("colonia_cursador").value;
	var tel_cursador = document.getElementById("tel_cursador").value;
	var cel_cursador = document.getElementById("cel_cursador").value;
	var sem_cap_cursador = document.getElementById("sem_cap_cursador").value;

	//insert values alumno

	ingreso.setFontSize(11);
    ingreso.setFont("Arial");
    ingreso.setFontType("");

    ingreso.text(60,28,ap_pat_cursador);
	ingreso.text(60,34,ap_mat_cursador);
	ingreso.text(60,40,nombre_cursador);
	ingreso.text(60,46,num_mat_cursador);
	ingreso.text(60,52,semestre_cursador);
	ingreso.text(60,58,grupo_cursador);
	ingreso.text(60,64,semestre_cursar_cursador);
	ingreso.text(60,70,domicilio_cursador);
	ingreso.text(60,76,colonia_cursador);
	ingreso.text(60,82,tel_cursador);
	ingreso.text(60,88,cel_cursador);
	ingreso.text(60,94,sem_cap_cursador);

	//carta compromiso
	ingreso.setFontSize(15);
    ingreso.setFont("Arial");
    ingreso.setFontType("");
	ingreso.text(110,108,"Carta Compromiso","center");

	ingreso.setFont("Arial");
	ingreso.setFontSize(10);
    ingreso.setFontType("bold")
    ingreso.text(10,116,"Por este medio, hago constar que conozco el reglamento general de alumnos del colegio de bachilleres de");
	ingreso.text(10,121,"Chiapas, en lo que respecta a inscripciones, reinscripciones y evaluaciones del sistema escolarizado, por lo que");
	ingreso.text(10,126,"únicamente cuento con este periodo normal del para acreditar las asignaturas como alumno CURSADOR en ");
	ingreso.text(10,132,"la(s) materia(s) de: ");
	ingreso.setFontSize(8);
    ingreso.setFontType("");
    ingreso.text(10,138,"Acepto cursar la asignatura en el turno contrario por no haberla acreditado en los exámenes de recuperación del ciclo a 2018");
    ingreso.setFontSize(10);
    ingreso.setFontType("bold");
    ingreso.text(10,146,"1.- ");
    ingreso.text(90,146,"del");
    ingreso.text(10,154,"2.- ");
    ingreso.text(90,154,"del");
    ingreso.text(10,160,"Y que de no acreditar, causare BAJA ACADEMICA sin recurrir a apelación alguna para mi causa y con pleno ");
    ingreso.text(10,165,"conocimiento de mis padres o tutor; cómo lo hace constar su firma.Una vez manifestada mi conformidad, sólo me ");
    ingreso.text(10,170,"resta decir que pondré mi más grande empeño para solucionar mi situacion academica.");


    //get values carta compromiso
    var materia_uno_cur = document.getElementById("materia_uno_cur").value;
    var semestre_uno_cur = document.getElementById("semestre_uno_cur").value;
    var materia_dos_cur = document.getElementById("materia_dos_cur").value;
    var semestre_dos_cur = document.getElementById("semestre_dos_cur").value;

    //insert data carta compromiso
    ingreso.setFontSize(10);
    ingreso.setFontType("");
    ingreso.text(30,146,materia_uno_cur);
    ingreso.text(110,146,semestre_uno_cur);
    ingreso.text(30,154,materia_dos_cur);
    ingreso.text(110,154,semestre_dos_cur);



    //get name tutor y alumno
	var nom_tut_cursador = document.getElementById("nom_tut_cursador").value;
	var nom_dos_cursador = document.getElementById("nom_dos_cursador").value;

	//Firma de tutor
	ingreso.setFontSize(15);
    ingreso.setFont("Arial");
    ingreso.setFontType("");
    ingreso.text(110,193,nom_tut_cursador, "center");
	ingreso.text(110,180,"Nombre y firma del tutor","center");
	ingreso.line(70, 195, 150, 195); // horizontal line
	//Firma del alumno
	ingreso.setFontSize(15);
    ingreso.setFont("Arial");
    ingreso.setFontType("");
    ingreso.text(110,213,nom_dos_cursador,"center");
	ingreso.text(110,200,"Nombre y firma del alumno","center");
	ingreso.line(70, 215, 150, 215); // horizontal line

	var dia_alumno_cur = document.getElementById("dia_alumno_cur").value;
	var mes_alumno_cur = document.getElementById("mes_alumno_cur").value;
	var ano_alumno_cur = document.getElementById("ano_alumno_cur").value;


	ingreso.text(40,270,"Tuxtla Gutiérrez, Chiapas; a ");
	ingreso.text(110,270,"del mes ");
	ingreso.text(160,270,"del año ");
	ingreso.text(105,270,dia_alumno_cur);
	ingreso.text(135,270,mes_alumno_cur);
	ingreso.text(185,270,ano_alumno_cur);

	//generate PDF
	ingreso.save('reinscripcion_cursador.pdf');
    



});