from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from .models import horarios, User, calificacion, Groups, comunicados_global, comunicadoescolar
# Register your models here.
admin.site.register(comunicados_global)

admin.site.register(comunicadoescolar)


@admin.register(User)
class UserAdmin(ImportExportModelAdmin):
	pass

admin.site.register(Groups)

@admin.register(horarios)
class horariosAdmin(ImportExportModelAdmin):
	pass

@admin.register(calificacion)
class calificacionesAdmin(ImportExportModelAdmin):
	pass