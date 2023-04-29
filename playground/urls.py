from django.urls import path
from . import views 

#Url config / routes
urlpatterns =[

    path("calculator/",views.load_calculator, name='calculator'),
    path("index/",views.load_index, name='index'),
    path("sticker/",views.load_sticker, name='sticker'),
  

            ]