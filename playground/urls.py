from django.urls import path
from . import views 
from rest_framework.routers import DefaultRouter
from .views import WebAppViewset
#Url config / routes

router = DefaultRouter()

urlpatterns =[

    path("calculator/",WebAppViewset.load_calculator, name='calculator'),
    path("index/",WebAppViewset.load_index, name='index'),
    path("sticker/",WebAppViewset.load_sticker, name='sticker'),
  

            ]