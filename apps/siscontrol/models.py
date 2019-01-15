from django.db import models
from django.contrib.auth.models import AbstractUser, Group
# Create your models here.

class User(AbstractUser):
	U_SEXO = (('M','Mujer'),('H','Hombre'))
	sexo = models.CharField(max_length=1,blank=True,null=True,choices=U_SEXO)
	clacentro = models.CharField(max_length=11, blank=True,null=True)
	nombreplan = models.CharField(max_length=45, blank=True,null=True)
	claveestado = models.CharField(max_length=45, blank=True,null=True)
	clavemuni = models.CharField(max_length=50, blank=True,null=True)
	clavelocal = models.CharField(max_length=100, blank=True,null=True)
	matricula = models.CharField(max_length=16, blank=True,null=True)
	curp = models.CharField(max_length=18, blank=True,null=True)
	telefono = models.CharField(max_length=11,blank=True,null=True)
	U_TURNO = (('Ma','Matutino'),('Ve','Vespertino'),('Mi','Mixto'),('Di','Director'),('Pa','Paraescolar'))
	turno = models.CharField(max_length=2,blank=True,null=True,choices=U_TURNO)
	orden = models.CharField(max_length=100, blank=True)
	rfc = models.CharField(max_length=13, blank=True,null=True)
	titulo = models.CharField(max_length=30, blank=True,null=True)
	clavprof = models.CharField(max_length=5, blank=True,null=True)
	U_GRADO = (('1','Primero'),('2','Segundo'),('3','Tercero'),('4','Cuarto'),('5','Quinto'),('6','Sexto'))
	grado =models.CharField(max_length=2,blank=True, null=True, verbose_name = "Grado", choices=U_GRADO)
	U_GRUPO = (('A','A'),('B','B'),('C','C'),('D','D'),('E','E'),('F','F'),('G','G'),('H','H'),('I','I'))
	grupo = models.CharField(max_length=2,blank=True, null=True, verbose_name = "Grupo", choices=U_GRUPO)
	periodolec = models.CharField( max_length=20, blank=True, verbose_name = "capacitacion")
	U_CATE = (('Di','Dibujo'),('Ta','Taekwondo'),('Ha','Hawaiano'),('Da','Danza'),('Ma','Marimba'),('Vc','Vocalizacionycanto'),('Bg','Bandadeguerra'),('To','Tochito'),('Es','Escolta'),('Ba','Basquetbol'),('Fu','Futbol'),('Vo','Voleibol'))
	categoria = models.CharField(max_length=2,blank=True,null=True,choices=U_CATE)
	


#######grupos#################
class Groups(Group):
	nombre = models.CharField(max_length=200, verbose_name = "Nombre")


class horarios(models.Model):
	#nombre = models.CharField(max_length=30, verbose_name = "doch")
	U_GRADO = (('1','Primero'),('2','Segundo'),('3','Tercero'),('4','Cuarto'),('5','Quinto'),('6','Sexto'))
	grado =models.CharField(max_length=2,blank=True, verbose_name = "Grado",null=True, choices=U_GRADO)
	U_GRUPO = (('A','A'),('B','B'),('C','C'),('D','D'),('E','E'),('F','F'),('G','G'),('H','H'),('I','I'))
	grupo = models.CharField(max_length=2,blank=True,null=True, verbose_name = "Grupo", choices=U_GRUPO)
	capacitacion = models.CharField( max_length=20, blank=True, verbose_name = "capacitacion")
	U_TURNO = (('Ma','Matutino'),('Ve','Vespertino'),)
	turno = models.CharField(max_length=2,blank=True,null=True,choices=U_TURNO)
	periodolec = models.CharField( max_length=20, blank=True, verbose_name = "capacitacion")
	asignatura = models.CharField( max_length=20, blank=True, verbose_name = "asignatura")
	lunes = models.CharField( max_length=10, blank=True, verbose_name = "lunes")
	martes = models.CharField( max_length=10, blank=True, verbose_name = "martes")
	miercoles = models.CharField( max_length=10, blank=True, verbose_name = "miercoles")
	jueves = models.CharField( max_length=10, blank=True, verbose_name = "jueves")
	vierne = models.CharField( max_length=10, blank=True, verbose_name = "viernes")
	aula = models.CharField( max_length=10, blank=True, verbose_name = "aulas")
	docente = models.CharField( max_length=40, blank=True, verbose_name = "docente")
	archivo = models.FileField(verbose_name = "Archivo", blank=True, null=True, upload_to="comalu")
	

	def __str__(self):
		return self.grado




# Create your models here.
class comunicados_global(models.Model):
    title = models.CharField(max_length=200, verbose_name = "Titulo")
    description = models.TextField(verbose_name = "Descripcion")
    archivo = models.FileField(verbose_name = "Archivo", blank=True, null=True, upload_to="comalu" )
    U_TURNO = (('Ma','Matutino'),('Ve','Vespertino'),('Mi','Mixto'))
    turno = models.CharField(max_length=2,blank=True,null=True,choices=U_TURNO)
    created = models.DateTimeField(auto_now_add=True, verbose_name = "Fecha de creacion")
    updated = models.DateTimeField(auto_now=True, verbose_name = "Fecha de edicion")


    class Meta: 
        verbose_name = "Comunicado"
        verbose_name_plural = "Comunicados"
        ordering = ["-created"]

    def __str__(self):
        return self.title

class comunicadoescolar(models.Model):
    title = models.CharField(max_length=200, verbose_name="Título")
    description = models.TextField(verbose_name="Descripción")
    image = models.ImageField(verbose_name="Imagen", upload_to="comalu", null=True, blank=True)
    U_TURNO = (('Di','Dibujo'),('Ta','Taekwondo'),('Ha','Hawaiano'),('Da','Danza'),('Ma','Marimba'),('Vc','Vocalizacionycanto'),('Bg','Bandadeguerra'),('To','Tochito'),('Es','Escolta'),('Ba','Basquetbol'),('Fu','Futbol'),('Vo','Voleibol'))
    categoria = models.CharField(max_length=2,blank=True,null=True,choices=U_TURNO)
    created = models.DateTimeField(auto_now_add=True, verbose_name="Fecha de creación")
    updated = models.DateTimeField(auto_now=True, verbose_name="Fecha de edición")

    class Meta:
        verbose_name = "comunicado escolar"
        verbose_name_plural = "comunicados escolar"
        ordering = ["-created"]

    def __str__(self):
        return self.title   

        
class calificacion(models.Model):
	clavemate = models.CharField(max_length=45,blank=True,null=True)
	materia = models.CharField(max_length=45,blank=True,null=True)
	semestre = models.CharField(max_length=45,blank=True,null=True)
	grupo = models.CharField(max_length=2,blank=True,null=True)
	clavegrupo = models.CharField(max_length=4,blank=True,null=True)
	parcial_1 = models.CharField(max_length=45,blank=True,null=True)
	parcial_2 = models.CharField(max_length=45,blank=True,null=True)
	parcial_3 = models.CharField(max_length=45,blank=True,null=True)
	calificaci = models.CharField(max_length=45,blank=True,null=True)
	prompar = models.CharField(max_length=45,blank=True,null=True)
	promsem = models.CharField(max_length=45,blank=True,null=True)
	inasistenc = models.CharField(max_length=45,blank=True,null=True)
	numclases = models.CharField(max_length=45,blank=True,null=True)
	inasispar1 = models.CharField(max_length=45,blank=True,null=True)
	nclasespar = models.CharField(max_length=45,blank=True,null=True)
	inasispar2 = models.CharField(max_length=45,blank=True,null=True)
	nclasespa2 = models.CharField(max_length=45,blank=True,null=True)
	inasispar3 = models.CharField(max_length=45,blank=True,null=True)
	nclasespa3 = models.CharField(max_length=45,blank=True,null=True)
	edoacredit = models.CharField(max_length=45,blank=True,null=True)
	matricula = models.CharField(max_length=45,blank=True,null=True)
	orden = models.CharField(max_length=45,blank=True,null=True)
	

class Meta:
	verbose_name = "calificacion"
	verbose_name_plural = "calificacion"
	ordering = ["created"]

	def __str__(self):
		return self.title




