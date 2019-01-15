# -*- coding: utf-8 -*-
from __future__ import unicode_literals,absolute_import
from django.urls import path, include
from django.contrib.auth.views import LoginView,LogoutView
from .views import(
    SignUpview, 
    siscontrol, 
    infdoc, 
    Comunicado_list, 
    directivo, 
    calificaciones,
    horario, 
    edit_comunicado, 
    controlsystem, 
    list_com, 
    delete_comu, 
    subircomunicado, 
    change_password, 
    comu_extra_basquet,
    comu_extra_futbol,
    comu_extra_taekwondo,
    comu_extra_hawaiano,
    comu_extra_danza,
    comu_extra_marimba,
    comu_extra_voca,
    comu_extra_bandaguerra,
    comu_extra_tochito,
    comu_extra_escolta,
    comu_extra_voli,
    forma,
    pag,
    convo,
    nuevo,
    cursador,
    normal,
    repite,
    subirextra,
    admin_extra,
    delete_extra,
    user_list,
    delete_user,
    cal_par
    ) 

urlpatterns = [
    path('',LoginView.as_view(template_name='siscontrol/index.html'), name='index'),
    path('siscontrol/', include('django.contrib.auth.urls')),
    path('control', controlsystem, name="control"),
    path('user_list/', user_list.as_view(), name="user_list"),
    path('delete_user/<int:pk>/', delete_user.as_view(),name="delete_user"),
	#Registro
	path('signup/', SignUpview.as_view(), name ="signup"),
    path('camb_password', change_password, name="camb_password" ),
	path('login/', LoginView.as_view(), name="login"),
	#Docentes#alumnos#Informacion
	path('infdoc/<int:pk>/', infdoc.as_view(), name="infdoc"),
	#Directivo
	path('directivo/', directivo, name="directivo" ),  
    #comunicados
    path('comu_extra_basquet/', comu_extra_basquet.as_view(), name="comu_extra_basquet"),
    path('comu_extra_futbol/', comu_extra_futbol.as_view(), name="comu_extra_futbol"),
    path('comu_extra_taekwondo/', comu_extra_taekwondo.as_view(), name="comu_extra_taekwondo"),
    path('comu_extra_hawaiano/', comu_extra_hawaiano.as_view(), name="comu_extra_hawaiano"),
    path('comu_extra_danza/', comu_extra_danza.as_view(), name="comu_extra_danza"),
    path('comu_extra_marimba/', comu_extra_marimba.as_view(), name="comu_extra_marimba"),
    path('comu_extra_voca/', comu_extra_voca.as_view(), name="comu_extra_voca"),
    path('comu_extra_bandaguerra/', comu_extra_bandaguerra.as_view(), name="comu_extra_bandaguerra"),
    path('comu_extra_tochito/', comu_extra_tochito.as_view(), name="comu_extra_tochito"),
    path('comu_extra_escolta/', comu_extra_escolta.as_view(), name="comu_extra_escolta"),
    path('comu_extra_voli/', comu_extra_voli.as_view(), name="comu_extra_voli"),
    path('comunicadosgeneral/', Comunicado_list.as_view(), name="comunicadosgeneral"), 
    path('list-comunicado/', list_com.as_view(), name="list-comunicado"),
    path('delete_comu/<int:pk>', delete_comu.as_view(), name="delete_comu"),
    path('edit-comu/<int:pk>/', edit_comunicado.as_view(), name="edit-comu"),
    path('subircomunicado/', subircomunicado, name="subircomunicado"),
    ########Admin#######
    #calificaciones
    path('calificaciones/', calificaciones.as_view(), name="calificaciones"),
    path('cal_par/', cal_par.as_view(), name="cal_par"),
    #horarios
    path('horario/', horario.as_view(), name="horario"),
    #extraescolar#
    path('subirextra/', subirextra, name="subirextra"),
    path('admin_extra', admin_extra.as_view(), name="admin_extra"),
    path('delete_extra/<int:pk>', delete_extra.as_view(), name="delete_extra"),
    #PDF´S#
    path('formato/', forma, name="formato"),
    path('pago/', pag, name="pago"),
    path('convocatoria/', convo, name="convocatoria"),
    path('nuevo/', nuevo, name='nuevo'),
    path('cursador/', cursador, name='cursadores'),
    path('normal/', normal, name='normal'),
    path('repetidor', repite, name='repetidor'),
]	