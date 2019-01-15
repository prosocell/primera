from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import User, comunicados_global, horarios, comunicadoescolar


class UserCreationFormWithEmail(UserCreationForm):
	last_name = forms.TextInput(attrs={'class':'form-control mb-2','placeholder':'Apellidos'})
	first_name = forms.TextInput(attrs={'class':'form-control mb-2','placeholder':'Nombre'})
	username = forms.TextInput(attrs={'class':'form-control mb-2','placeholder':'Nombre de usuario'})
	password1 = forms.PasswordInput(attrs={'class':'form-control mb-2','placeholder':'Contraseña'})
	password2 = forms.PasswordInput(attrs={'class':'form-control mb-2','placeholder':'Repetir contraseñaPassword'})
	email = forms.EmailField(help_text="254 caracteres como maximo y debe ser valido")
	sexo = forms.Select(attrs={'class':'form-control mb-2', 'placeholder':'Sexo'})
	nombreplan = forms.TextInput(attrs={'class':'form-control mb-2','placeholder':'Nombre del Plan'})
	claveestado = forms.TextInput(attrs={'class':'form-control mb-2','placeholder':''})
	clacentro = forms.TextInput(attrs={'class':'form-control mb-2','placeholder':'Clave Centro'})
	clavemuni = forms.TextInput(attrs={'class':'form-control mb-2','placeholder':'Clave Municipal'})
	clavelocal = forms.TextInput(attrs={'class':'form-control mb-2','placeholder':'Clave Local'})
	curp = forms.TextInput(attrs={'class':'form-control mb-2','placeholder':'curp'})
	telefono = forms.TextInput(attrs={'class':'form-control mb-2','placeholder':'telefono'})
	turno = forms.TextInput(attrs={'class':'form-control mb-2','placeholder':'turno'})
	orden = forms.TextInput(attrs={'class':'form-control mb-2','placeholder':'orden'})
	rfc = forms.TextInput(attrs={'class':'form-control mb-2','placeholder':'RFC'})
	titulo = forms.TextInput(attrs={'class':'form-control mb-2','placeholder':'titulo'})
	#groups = forms.Select(attrs={'class':'form-control mb-2', 'placeholder':'grupos'})
	
	class Meta:
		model = User
		fields = ("first_name", "last_name","username", "password1", "password2", "email", "sexo", "nombreplan", "claveestado", "clacentro", "clavemuni", "clavelocal", "curp", "telefono", "turno", "orden", "rfc", "titulo")

class Comunicadosform(forms.ModelForm):
	
	title = forms.TextInput(attrs={'class':'form-control mb-2','placeholder':'Nombre de usuario'})
	description = forms.TextInput(attrs={'class':'form-control mb-2','placeholder':'Descripcion'})
	turno = forms.TextInput(attrs={'class':'form-control mb-2'})
	archivo = forms.FileInput(attrs={'class':'form-control mb-2',})
	
	class Meta:
		model = comunicados_global
		fields = ("title","description","turno","archivo")



class  UploadFileForm(forms.ModelForm):

	class Meta:
		model = horarios
		fields = ("grado","grupo","capacitacion","turno","periodolec","asignatura","lunes","martes","miercoles","jueves","vierne","aula", "docente")


class Horariosform(forms.ModelForm):
	
	title = forms.TextInput(attrs={'class':'form-control mb-2','placeholder':'Nombre de usuario'})
	description = forms.TextInput(attrs={'class':'form-control mb-2','placeholder':'Descripcion'})
	turno = forms.TextInput(attrs={'class':'form-control mb-2'})
	archivo = forms.FileInput(attrs={'class':'form-control mb-2',})
	
	class Meta:
		model = horarios
		fields = ("grado","grupo","capacitacion","turno","periodolec","asignatura","lunes","martes","miercoles","jueves","vierne","aula","docente")



class ComunicadoExtraform(forms.ModelForm):
	title = forms.TextInput(attrs={'class':'form-control mb-2','placeholder':'Nombre de usuario'})
	description = forms.TextInput(attrs={'class':'form-control mb-2','placeholder':'Descripcion'})
	categora = forms.TextInput(attrs={'class':'form-control mb-2'})
	image = forms.FileInput(attrs={'class':'form-control mb-2',})
	
	class Meta:
		model = comunicadoescolar
		fields = ("title","description","categoria","image")

		