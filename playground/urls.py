from django.urls import path
from . import views 
from rest_framework.routers import DefaultRouter
from .views import WebAppViewset
#Url config / routes

router = DefaultRouter()

urlpatterns =[

    path("CaseCalculator/",WebAppViewset.load_calculator, name='calculator'),
    path("",WebAppViewset.load_index, name='index'),
    path("StickerSearch/",WebAppViewset.load_sticker, name='sticker'),
    path("StratRoulette/",WebAppViewset.load_roulette, name='roulette'),
  

            ]