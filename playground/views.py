from django.shortcuts import render
from django.http import HttpResponse
import requests
import json
from .models import Case
from rest_framework import viewsets

# Create your views here.
class WebAppViewset(viewsets.ModelViewSet):
    def load_index(request):
     
        return render(request,'index.html')

    def load_sticker(request):
        return render(request,'sticker.html')

    def load_calculator(request):

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


        caseMedianPrices = {}
        Hashid = {}
        
        for case in Case.objects.all().values():
            caseMedianPrices[case['name']] = case['price']
            Hashid[case['name']] = case['hashid']
        context = {"caseMedianPrices":caseMedianPrices,'Hashid' : Hashid}


        return render(request, "calculator.html",context=context)
    
    def _get_prices(self):
        url = "https://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=Operation%20Riptide%20Case&currency=2"
        api_request = requests.get(url)
        try:
            api_request.raise_for_status()
            return api_request.json()
        except:
            print("no data returned")
            return None

    def save_price_data(self):
        case_data = self._get_prices()
        print(case_data)
        if case_data is not None:
            try:
                case_object = Case.objects.get(name="Operation_Riptide")
                case_object.price = float(case_data['median_price'][1:])
                case_object.save(update_fields=['price'])
            except:
                print("Didn't save model")
                pass

            ##caseMedianPrices = {}
            ##for key, value in caseUrls.items():
                ##try:
                ## data = requests.get(value).json()["median_price"]
            ## except:
                ##  data = 1.15
                ##caseMedianPrices[key] = data