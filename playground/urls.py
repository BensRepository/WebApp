from django.urls import path
from . import views 

#Url config / routes
urlpatterns =[

    path("calculator/",views.big_test, name='calculator'),
    path("index/",views.load_index, name='index')

            ]