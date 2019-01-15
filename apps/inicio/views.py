from django.shortcuts import render, HttpResponse


# Create your views here.
def contact(request):
    return render(request, "contact/contact.html")
	

#vistas pestaña 1
def quinsom(request):
	obj = request.user.username
	print(obj)
	return render(request, "quinsom/quinsom.html")

def prop(request):
	return render(request, "quinsom/proposito.html")

def orga(request):
	return render(request, "quinsom/organigrama.html")

def mivi(request):
	return render(request, "quinsom/vimi.html")

def valo(request):
	return render(request, "quinsom/valores.html")

def equidir(request):
	return render(request, "quinsom/equidir.html")

def calen(request):
	return render(request, "quinsom/calendario.html")

#carpeta inscripcion todas las vistas de inscripcion
def forma(request):
	return render(request, "inscripciones/formato.html")

def norm(request):
	return render(request, "inscripciones/normal.html")

def nuev(request):
	return render(request, "inscripciones/nuevo.html")

def pag(request):
	return render( request, "inscripciones/pago.html")

def repe(request):
	return render(request, "inscripciones/repetidor.html")

def cursa(request):
	return render(request, "inscripciones/cursadores.html")

def convo(request):
	return render(request, "inscripciones/convocatoria.html")
#vista logeo


