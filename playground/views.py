from django.shortcuts import render
from django.http import HttpResponse
import requests
import json
import threading 
from .models import Case
# Create your views here.
def load_index(request):
    return render(request,'index.html')


def big_test(request):

    caseUrls = {"Revoultion": "hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=Revolution%20Case&currency=2",
                "DreamsNightmares": "hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=Dreams%20%26%20Nightmares%20Case&currency=2",
                "Recoil" : "hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=Recoil%20Case&currency=2",
                "Operation_Riptide":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=Operation%20Riptide%20Case&currency=2",
                "Snakebite":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=Snakebite%20Case&currency=2",
                "Operation_Broken_Fang":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=Operation%20Broken%20Fang%20Case&currency=2",
                "Fracture":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=Fracture%20Case&currency=2",
                "Chroma":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=Chroma%20Case&currency=2",
                "Chroma_2":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=Chroma%202%20Case&currency=2",
                "Chroma_3":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=Chroma%203%20Case&currency=2",
                "Clutch":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=Clutch%20Case&currency=2",
                "CSGO_Weapon":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=CS%3AGO%20Weapon%20Case&currency=2",
                "CSGO_Weapon_2":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=CS%3AGO%20Weapon%20Case%202&currency=2",
                "CSGO_Weapon_3":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=CS%3AGO%20Weapon%20Case%203&currency=2",
                "CS20":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=CS20%20Case&currency=2",
                "Danger_Zone":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=Danger%20Zone%20Case&currency=2",
                "eSports_2013":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=eSports%202013%20Case&currency=2",
                "eSports_2013_Winter":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=eSports%202013%20Winter%20Case&currency=2",
                "eSports_2014_Summer":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=eSports%202014%20Summer%20Case&currency=2",
                "Falchion":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=Falchion%20Case&currency=2",
                "Gamma":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=Gamma%20Case&currency=2",
                "Gamma_2":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=Gamma%202%20Case&currency=2",
                "Glove":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=Glove%20Case&currency=2",
                "Horizon":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=Horizon%20Case&currency=2",
                "Huntsman":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=Huntsman%20Weapon%20Case&currency=2",
                "Operation_Bravo":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=Operation%20Bravo%20Case&currency=2",
                "Operation_Breakout":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=Operation%20Breakout%20Weapon%20Case&currency=2",
                "Operation_Hydra":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=Operation%20Hydra%20Case&currency=2",
                "Operation_Vanguard":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=Operation%20Vanguard%20Weapon%20Case&currency=2",
                "Operation_Phoenix":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=Operation%20Phoenix%20Weapon%20Case&currency=2",
                "Operation_Wildfire":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=Operation%20Wildfire%20Case&currency=2",
                "Prisma":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=Prisma%20Case&currency=2",
                "Prisma_2":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=Prisma%202%20Case&currency=2",
                "Revolver":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=Revolver%20Case&currency=2",
                "Shadow":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=Shadow%20Case&currency=2",
                "Shattered_Web":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=Shattered%20Web%20Case&currency=2",
                "Spectrum":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=Spectrum%20Case&currency=2",
                "Spectrum_2":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=Spectrum%202%20Case&currency=2",
                "Winter_Offensive":"hhttps://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=Winter%20Offensive%20Weapon%20Case&currency=2"
                }
    Hashid = {"Revoultion": "Revolution%20Case",
                "DreamsNightmares": "Dreams%20%26%20Nightmares%20Case",
                "Recoil" : "Recoil%20Case",
                "Operation_Riptide":"Operation%20Riptide%20Case",
                "Snakebite":"Snakebite%20Case",
                "Operation_Broken_Fang":"Operation%20Broken%20Fang%20Case",
                "Fracture":"Fracture%20Case",
                "Chroma":"Chroma%20Case",
                "Chroma_2":"Chroma%202%20Case",
                "Chroma_3":"Chroma%203%20Case",
                "Clutch":"Clutch%20Case",
                "CSGO_Weapon":"CS%3AGO%20Weapon%20Case",
                "CSGO_Weapon_2":"CS%3AGO%20Weapon%20Case%202",
                "CSGO_Weapon_3":"CS%3AGO%20Weapon%20Case%203",
                "CS20":"CS20%20Case",
                "Danger_Zone":"Danger%20Zone%20Case",
                "eSports_2013":"eSports%202013%20Case",
                "eSports_2013_Winter":"eSports%202013%20Winter%20Case",
                "eSports_2014_Summer":"eSports%202014%20Summer%20Case",
                "Falchion":"Falchion%20Case",
                "Gamma":"Gamma%20Case",
                "Gamma_2":"Gamma%202%20Case",
                "Glove":"Glove%20Case",
                "Horizon":"Horizon%20Case",
                "Huntsman":"Huntsman%20Weapon%20Case",
                "Operation_Bravo":"Operation%20Bravo%20Case",
                "Operation_Breakout":"Operation%20Breakout%20Weapon%20Case",
                "Operation_Hydra":"Operation%20Hydra%20Case",
                "Operation_Vanguard":"Operation%20Vanguard%20Weapon%20Case",
                "Operation_Phoenix":"Operation%20Phoenix%20Weapon%20Case",
                "Operation_Wildfire":"Operation%20Wildfire%20Case",
                "Prisma":"Prisma%20Case",
                "Prisma_2":"Prisma%202%20Case",
                "Revolver":"Revolver%20Case",
                "Shadow":"Shadow%20Case",
                "Shattered_Web":"Shattered%20Web%20Case",
                "Spectrum":"Spectrum%20Case",
                "Spectrum_2":"Spectrum%202%20Case",
                "Winter_Offensive":"Winter%20Offensive%20Weapon%20Case"
                }
    caseMedianPrices = {}
    caseMedianPrices2 = {}
    Hashid2 = {}

    for key, value in caseUrls.items():
        try:
            data = requests.get(value).json()["median_price"]
        except:
            data = 1.15
        caseMedianPrices[key] = data
   
    for case in Case.objects.all().values():
        caseMedianPrices2[case['name']] = case['price']
        Hashid2[case['name']] = case['hashid']
    context = {"caseMedianPrices":caseMedianPrices2,'Hashid' : Hashid2}


    return render(request, "calculator.html",context=context)