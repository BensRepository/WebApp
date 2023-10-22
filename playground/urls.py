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
    path("BindGenerator/",WebAppViewset.load_bind, name='bind'),
    path("SkinMaster/",WebAppViewset.skin_master, name='skin_master'),
    path("SkinMaster/Play/Practise/",WebAppViewset.skin_master_practise, name='skin_master_practise'),
    path("SkinMaster/Play/Survival/",WebAppViewset.skin_master_survival, name='skin_master_survival'),
    path("SkinMaster/Play/Ranked/",WebAppViewset.skin_master_ranked, name='skin_master_ranked'),  
    path("SkinMaster/Play/",WebAppViewset.skin_master_play, name='skin_master_play'),  
    path("SkinMaster/Leaderboard/",WebAppViewset.skin_master_leaderboard, name='skin_master_leaderboard'),  
    path("SkinMaster/About/",WebAppViewset.skin_master_about, name='skin_master_about'), 
    path("SkinMaster/ReportBug/",WebAppViewset.skin_master_report_bug, name='skin_master_report_bug'), 
    path('SkinMaster/Submit/',WebAppViewset.new,name='skin_master_submit')
            ]