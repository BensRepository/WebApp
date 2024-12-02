from django.urls import path
from . import views 
from rest_framework.routers import DefaultRouter
from .views import WebAppViewset
#Url config / routes

router = DefaultRouter()

urlpatterns =[

    path("",WebAppViewset.load_index, name='rstools'),
    path("StatLookUp/",WebAppViewset.load_statlookup, name='statlookup'),
    path("StatLookUp/Result/",WebAppViewset.load_statlookupresult, name='statlookupresult'),

            ]