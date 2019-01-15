from import_export import resources
from .models import User, horarios, calificaciones
			

class UserResource(resources.ModelResource):
	class meta:
		model = User

class horarioResource(resources.ModelResource):
	class meta:
		model = horarios

class calificacionesResource(resources.ModelResource):
	class meta:
		model = calificaciones