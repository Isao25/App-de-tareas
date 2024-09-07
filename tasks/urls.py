#Aqui creamos las rutas que el frontend desea consultar
from django.urls import path, include
from rest_framework.documentation import include_docs_urls 
from rest_framework import routers #Esto ayuda a crear las urls
from tasks import views

router = routers.DefaultRouter()
router.register(r'tasks',views.TaskVIew,'tasks') #Se pasan 3 parametros

#Todo esto generara mis rutas get, post, put y delete
urlpatterns = [
    #Versionado de API
    path("api/v1/", include(router.urls)),
    path('docs/',include_docs_urls(title="Tasks API"))
]