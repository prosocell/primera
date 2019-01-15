$("#imprimir_nuevo_ingreso").on("click", function () {
	//create object for PDF 
	var ingreso = new jsPDF();
	//Title document PDF
	ingreso.setFontSize(20);
    ingreso.setFont("Arial");
	ingreso.setFontType("bold");
	ingreso.text(110,10,"Formato de nuevo ingreso","center");

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
	ingreso.text(10,46,"Fecha de nacimiento: ");
	ingreso.text(10,52,"Sexo: ");
	ingreso.text(10,58,"Grupo: ");
	ingreso.text(10,64,"Domicilio: ");
	ingreso.text(10,70,"Curp: ");
	ingreso.text(10,76,"Colonia: ");
	ingreso.text(10,82,"Minicipio: ");
	ingreso.text(10,88,"Estado: ");
	ingreso.text(10,94,"Código Postal: ");
	ingreso.text(10,100,"Correo: ");

	//get values alumno
	var ap_pat_nuevo = document.getElementById("ap_pat_nuevo").value;
	var ap_mat_nuevo = document.getElementById("ap_mat_nuevo").value;
	var nombres_ingreso = document.getElementById("nombres_ingreso").value;
	var date_nac = document.getElementById("date_nac").value;
	var sexo_nuevo = $('input[name="sexo"]:checked').val();
	var grupo_nuevo = document.getElementById("grupo_nuevo").value;
	var domicilio_nuevo = document.getElementById("domicilio_nuevo").value;
	var curp_nuevo = document.getElementById("curp_nuevo").value;
	var colonia_nuevo = document.getElementById("colonia_nuevo").value;
	var municipio_nuevo = document.getElementById("municipio_nuevo").value;
	var estado_nuevo = document.getElementById("estado_nuevo").value;
	var cp_nuevo = document.getElementById("cp_nuevo").value;
	var correo_nuevo = document.getElementById("correo_nuevo").value;

	//insert values alumno

	ingreso.setFontSize(11);
    ingreso.setFont("Arial");
    ingreso.setFontType("");

    ingreso.text(60,28,ap_pat_nuevo);
	ingreso.text(60,34,ap_mat_nuevo);
	ingreso.text(60,40,nombres_ingreso);
	ingreso.text(60,46,date_nac);
	ingreso.text(60,52,sexo_nuevo);
	ingreso.text(60,58,grupo_nuevo);
	ingreso.text(60,64,domicilio_nuevo);
	ingreso.text(60,70,curp_nuevo);
	ingreso.text(60,76,colonia_nuevo);
	ingreso.text(60,82,municipio_nuevo);
	ingreso.text(60,88,estado_nuevo);
	ingreso.text(60,94,cp_nuevo);
	ingreso.text(60,100,correo_nuevo);
	


	//subtitle data tutor
	ingreso.setFontSize(15);
    ingreso.setFont("Arial");
    ingreso.setFontType("");
	ingreso.text(110,108,"DATOS PERSONALES DEL TUTOR O TUTORES","center");

	//Label content tutor
	ingreso.setFontSize(11);
    ingreso.setFont("Arial");
	ingreso.setFontType("bold")
	ingreso.text(10,116,"Primer tutor: ");
	ingreso.text(10,122,"Domicilio: ");
	ingreso.text(10,128,"Colonia: ");
	ingreso.text(10,134,"Municipio: ");
	ingreso.text(10,140,"Estado: ");
	ingreso.text(10,146,"Código Postal: ");
	ingreso.text(10,152,"Teléfono de casa: ");
	ingreso.text(10,158,"Celular del Tutor: ");
	ingreso.text(10,164,"Segundo tutor: ");
	ingreso.text(10,170,"Domicilio: ");
	ingreso.text(10,176,"Colonia: ");
	ingreso.text(10,182,"Municipio: ");
	ingreso.text(10,188,"Estado: ");
	ingreso.text(10,194,"Código Postal: ");
	ingreso.text(10,200,"Teléfono de casa: ");
	ingreso.text(10,206,"Celular del Tutor: ");

	//get values tutor
	var p_tutor_nuevo = document.getElementById("p_tutor_nuevo").value;
	var domicilio_pt_nuevo = document.getElementById("domicilio_pt_nuevo").value;
	var colonia_pt_nuevo = document.getElementById("colonia_pt_nuevo").value;
	var municipio_pt_nuevo = document.getElementById("municipio_pt_nuevo").value;
	var estado_pt_nuevo = document.getElementById("estado_pt_nuevo").value;
	var cp_pt_nuevo = document.getElementById("cp_pt_nuevo").value;
	var tel_pt_nuevo = document.getElementById("tel_pt_nuevo").value;
	var cel_pt_nuevo = document.getElementById("cel_pt_nuevo").value;

	var s_tutor_nuevo = document.getElementById("s_tutor_nuevo").value;
	var domicilio_st_nuevo = document.getElementById("domicilio_st_nuevo").value;
	var colonia_st_nuevo = document.getElementById("colonia_st_nuevo").value;
	var municipio_st_nuevo = document.getElementById("municipio_st_nuevo").value;
	var estado_st_nuevo = document.getElementById("estado_st_nuevo").value;
	var cp_st_nuevo = document.getElementById("cp_st_nuevo").value;
	var tel_st_nuevo = document.getElementById("tel_st_nuevo").value;
	var cel_st_nuevo = document.getElementById("cel_st_nuevo").value;

	//insert data content tutor
	ingreso.setFontSize(11);
    ingreso.setFont("Arial");
	ingreso.setFontType("")
	ingreso.text(60,116,p_tutor_nuevo);
	ingreso.text(60,122,domicilio_pt_nuevo);
	ingreso.text(60,128,colonia_pt_nuevo);
	ingreso.text(60,134,municipio_pt_nuevo);
	ingreso.text(60,140,estado_pt_nuevo);
	ingreso.text(60,146,cp_pt_nuevo);
	ingreso.text(60,152,tel_pt_nuevo);
	ingreso.text(60,158,cel_pt_nuevo);
	ingreso.text(60,164,s_tutor_nuevo);
	ingreso.text(60,170,domicilio_st_nuevo);
	ingreso.text(60,176,colonia_st_nuevo);
	ingreso.text(60,182,municipio_st_nuevo);
	ingreso.text(60,188,estado_st_nuevo);
	ingreso.text(60,194,cp_st_nuevo);
	ingreso.text(60,200,tel_st_nuevo);
	ingreso.text(60,206,cel_st_nuevo);

	//subtitle data escuela procedencia
	ingreso.setFontSize(15);
    ingreso.setFont("Arial");
    ingreso.setFontType("");
	ingreso.text(110,214,"DATOS DE LA ESCUELA SECUNDARIA DE PROCEDENCIA","center");

	//label escuela procedencia
	ingreso.setFontSize(11);
    ingreso.setFont("Arial");
	ingreso.setFontType("bold")
	ingreso.text(10,222,"Nombre de la secundaria: ");
	ingreso.text(10,228,"Clave de la secundaria: ");
	ingreso.text(10,234,"Promedio: ");
	ingreso.text(10,240,"Folio de Certificado: ");
	ingreso.text(10,246,"Fecha de expedición de certificado: ");
	ingreso.text(10,252,"Tipo de Secundaria: ");
	ingreso.text(40,270,"Tuxtla Gutiérrez, Chiapas; a ");
	ingreso.text(110,270,"del mes ");
	ingreso.text(160,270,"del año ");

	//get values escuela procedencia
	var nom_secundaria_nuevo = document.getElementById("nom_secundaria_nuevo").value;
	var clave_secu_nuevo = document.getElementById("clave_secu_nuevo").value;
	var promedio_nuevo = document.getElementById("promedio_nuevo").value;
	var folio_cert_nuevo = document.getElementById("folio_cert_nuevo").value;
	var fech_exped_nuevo = document.getElementById("fech_exped_nuevo").value;
	var tipo_secu_nuevo = $('input[name="escuela"]:checked').val();
	var dia_nuevo = document.getElementById("dia_nuevo").value;
	var mes_nuevo = document.getElementById("mes_nuevo").value;
	var ano_nuevo = document.getElementById("ano_nuevo").value;

	//iinsert data escuela procedencia
	ingreso.setFontSize(11);
    ingreso.setFont("Arial");
	ingreso.setFontType("")
	ingreso.text(60,222,nom_secundaria_nuevo);
	ingreso.text(60,228,clave_secu_nuevo);
	ingreso.text(60,234,promedio_nuevo);
	ingreso.text(60,240,folio_cert_nuevo);
	ingreso.text(80,246,fech_exped_nuevo);
	ingreso.text(60,252,tipo_secu_nuevo);
	ingreso.text(100,270,dia_nuevo);
	ingreso.text(135,270,mes_nuevo);
	ingreso.text(185,270,ano_nuevo);

	//Generate PDF
	ingreso.save('nuevo_ingreso.pdf');
   
    });




