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
    path("SkinMaster/Leaderboard/Easy/",WebAppViewset.skin_master_leaderboard_competitive_easy, name='skin_master_leaderboard_competitive_easy'),  
    path("SkinMaster/Leaderboard/Medium/",WebAppViewset.skin_master_leaderboard_competitive_medium, name='skin_master_leaderboard_competitive_medium'),  
    path("SkinMaster/Leaderboard/Hard/",WebAppViewset.skin_master_leaderboard_competitive_hard, name='skin_master_leaderboard_competitive_hard'),  
    path("SkinMaster/Leaderboard/Expert/",WebAppViewset.skin_master_leaderboard_competitive_expert, name='skin_master_leaderboard_competitive_expert'), 
    path("SkinMaster/Leaderboard/Ohnepixel/",WebAppViewset.skin_master_leaderboard_competitive_ohnepixel, name='skin_master_leaderboard_competitive_ohnepixel'),   
    path("SkinMaster/About/",WebAppViewset.skin_master_about, name='skin_master_about'), 
    path("SkinMaster/ReportBug/",WebAppViewset.skin_master_report_bug, name='skin_master_report_bug'), 
    path('SkinMaster/Competitive/Easy/',WebAppViewset.easy_leaderboard_competitive,name='skin_master_easy'),
    path('SkinMaster/Competitive/Medium/',WebAppViewset.medium_leaderboard_competitive,name='skin_master_medium'),
    path('SkinMaster/Competitive/Hard/',WebAppViewset.hard_leaderboard_competitive,name='skin_master_hard'),
    path('SkinMaster/Competitive/Expert/',WebAppViewset.expert_leaderboard_competitive,name='skin_master_expert'),
    path('SkinMaster/Competitive/Ohnepixel/',WebAppViewset.ohnepixel_leaderboard_competitive,name='skin_master_ohne')
            ]