from django.urls import path
from . import views 
from rest_framework.routers import DefaultRouter
from .views import WebAppViewset
#Url config / routes

router = DefaultRouter()

urlpatterns =[



    path("",WebAppViewset.load_rstools, name='rstools'),
    path("StatLookUp/",WebAppViewset.load_statlookup, name='statlookup'),
    path("StatLookUp/Result/",WebAppViewset.load_statlookupresult, name='statlookupresult'),

    path("LootSimulator/",WebAppViewset.load_lootsimulator, name='lootsimulator'),
    path("LootSimulator/Raids/",WebAppViewset.load_raids, name='raids'),
    path("LootSimulator/Raids/TOA/",WebAppViewset.load_toa, name='tob'),
    path("LootSimulator/Raids/COX/",WebAppViewset.load_cox, name='cox'),
    path("LootSimulator/Raids/TOB/",WebAppViewset.load_tob, name='tob'),
    

    path("Leaderboard/",WebAppViewset.load_leaderboard, name='leaderboard'),

            ]