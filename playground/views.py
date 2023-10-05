from django.shortcuts import render
from django.http import HttpResponse
import requests
import json
from .models import Case
from .models import Rate
from rest_framework import viewsets
import glob
from WebApp.settings import STATIC_URL
# Create your views here.
class WebAppViewset(viewsets.ModelViewSet):
    def load_index(request):
        print(Case.objects.all().order_by('date_modified').last())
        return render(request,'index.html')
    
    def load_roulette(request):
        return render(request,'roulette.html')
    
    def load_bind(request):
    
        types = glob.glob("."+STATIC_URL+"loadout/*")
        filenames = {}
        context = {}
        for i in types:
            filenames[i[17:]] = glob.glob("."+STATIC_URL+"loadout/"+i[17:]+"/*")
        context['filenames']=filenames
        return render(request,'bind.html',context=context)
    
    def load_sticker(request):

        tornamantNames = ["ESLKatowice14","IntelRio22","PGLAntwerp22","PGLStockholm21","StarLadderBerlin19",
                        "FACEITLondon18","ELEAGUEBoston18","ELEAGUEAtlanta17","ESLCologne16",
                          "MLGColumbus16","ClujNapoca2015","ESLKatowice15","DreamHack14","ESLCologne14",
                          "ESLKatowice14","DreamHack13","RMR20","ESLKatowice19","PGLKrakow17","ESLCologne15","Misc","Paris23"]

        filenames = {}

    
        for i in tornamantNames:
            filespaper = glob.glob("."+STATIC_URL+"stickers/Paper/"+i+"/*") 
            filesholo = glob.glob("."+STATIC_URL+"stickers/Holo/"+i+"/*")
            filesfoil = glob.glob("."+STATIC_URL+"stickers/Foil/"+i+"/*")
            filesgold = glob.glob("."+STATIC_URL+"stickers/Gold/"+i+"/*")
            filenames[i] = {"filespaper":[],"filesholo":[],"filesfoil":[],"filesgold":[]}
            for j in  filespaper:
                filenames[i]["filespaper"].append(j[24:len(j)-4])
            for j in  filesholo:
                filenames[i]["filesholo"].append(j[23:len(j)-4])
            for j in  filesfoil:
                filenames[i]["filesfoil"].append(j[23:len(j)-4])
            for j in  filesgold:
                filenames[i]["filesgold"].append(j[23:len(j)-4])
            
        return render(request,'sticker.html',context=filenames)

    def load_calculator(request):

        caseMedianPrices = {}
        Hashid = {}
        caseNames =[]
        for case in Case.objects.all().values().order_by('price'):
            caseMedianPrices[case['name']] = case['price']
            Hashid[case['name']] = case['hashid']
            caseNames.append(case['name']) 
        context = {"caseMedianPrices":caseMedianPrices,'Hashid' : Hashid,'caseNames':caseNames}

        return render(request, "calculator.html",context=context)
    
    def _get_prices(self):
        needs_updating = Case.objects.all().order_by('date_modified').first()
        url = "https://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name="+needs_updating.hashid+"&currency=2"
        api_request = requests.get(url)
        try:
            api_request.raise_for_status()
            return api_request.json()
        except:
            print("no data returned")
            return None
        
    def _get_conversion_rates(self):
        url = "https://openexchangerates.org/api/latest.json?app_id=97690a0737ec4f75a6e93c705a61e81d%27"
        api_request = requests.get(url)
        try:
            api_request.raise_for_status()
            return api_request.json()
        except:
            print("no data returned")
            return None
        
    def _save_conversion_rates(self):
        update_rate = Rate.objects.all()
        required_rates = ['GBP','USD','EUR']
        rate_data = self._get_conversion_rates()
       
        if rate_data is not None:
            try:
                for i in required_rates:
                    print(float(rate_data['rates'][i]))
                    rate_object = Rate.objects.get(name=i)
                    rate_object.value = float(rate_data['rates'][i])
                    rate_object.save(update_fields=['value'])
                    print("saves model")
            except:
                print("Didn't save model")
                pass
    
    def save_price_data(self):
        needs_updating = Case.objects.all().order_by('date_modified').first()
        case_data = self._get_prices()
        print(case_data)
        if case_data is not None:
            try:
                case_object = Case.objects.get(name=needs_updating.name)
                case_object.price = float(case_data['median_price'][1:])
                case_object.save(update_fields=['price','date_modified'])
            except:
                print("Didn't save model")
                pass


    def skin_master(request):
        types = glob.glob("."+STATIC_URL+"loadout/*")
        filenames = {}
        context = {}
        for i in types:
            filenames[i[17:]] = glob.glob("."+STATIC_URL+"loadout/"+i[17:]+"/*")
        context['filenames']=filenames
        return render(request, "skin_master.html",context=context)
    
    def skin_master_practise(request):
        types = ["machineguns","shotguns","smgs","pistols","rifles"]
        weapons = {"machineguns":[],"shotguns":[],"smgs":[],"pistols":[],"rifles":[]}
        filenames = {}
        filenames['types'] = types

        for t in types:
            weapons[t] = glob.glob("."+STATIC_URL+"skins/"+t+"/*")
            filenames[t] = []
            for j in weapons[t]:
                filenames[t].append(j.split("\\")[1])
        for t in types:
             for w in weapons[t]:
                grey = glob.glob(w+"/grey/*") 
                light_blue = glob.glob(w+"/light_blue/*")
                blue = glob.glob(w+"/blue/*")
                purple = glob.glob(w+"/purple/*")
                pink = glob.glob(w+"/pink/*")
                red =  glob.glob(w+"/red/*")
                weapon_name = w.split("\\")[1]
                filenames[weapon_name] = {"grey":[],"light_blue":[],"blue":[],"purple":[],"pink":[],"red":[]}

                for j in grey:
                    skinname = j.split("\\")[2]
                    filenames[weapon_name]["grey"].append(skinname[0:len(skinname)-4])
                for j in  light_blue:
                    skinname = j.split("\\")[2]
                    filenames[weapon_name]["light_blue"].append(skinname[0:len(skinname)-4])
                for j in  blue:
                    skinname = j.split("\\")[2]
                    filenames[weapon_name]["blue"].append(skinname[0:len(skinname)-4])
                for j in  purple:
                    skinname = j.split("\\")[2]
                    filenames[weapon_name]["purple"].append(skinname[0:len(skinname)-4])
                for j in  pink:
                    skinname = j.split("\\")[2]
                    filenames[weapon_name]["pink"].append(skinname[0:len(skinname)-4])
                for j in  red:
                    skinname = j.split("\\")[2]
                    filenames[weapon_name]["red"].append(skinname[0:len(skinname)-4])
    

        return render(request, "skin_master_practise.html",context=filenames)    
    
    def skin_master_survival(request):
        types = glob.glob("."+STATIC_URL+"loadout/*")
        filenames = {}
        context = {}
        for i in types:
            filenames[i[15:]] = glob.glob("."+STATIC_URL+"loadout/"+i[15:]+"/*")
        context['filenames']=filenames
        return render(request, "skin_master_survival.html",context=context)    
    
    def skin_master_ranked(request):
        types = glob.glob("."+STATIC_URL+"loadout/*")
        filenames = {}
        context = {}
        for i in types:
            filenames[i[17:]] = glob.glob("."+STATIC_URL+"loadout/"+i[17:]+"/*")
        context['filenames']=filenames
        return render(request, "skin_master_ranked.html",context=context)    
    
    def skin_master_play(request):
        types = glob.glob("."+STATIC_URL+"loadout/*")
        filenames = {}
        context = {}
        for i in types:
            filenames[i[17:]] = glob.glob("."+STATIC_URL+"loadout/"+i[17:]+"/*")
        context['filenames']=filenames
        return render(request, "skin_master_play.html",context=context)    
    
    def skin_master_leaderboard(request):
        types = glob.glob("."+STATIC_URL+"loadout/*")
        filenames = {}
        context = {}
        for i in types:
            filenames[i[17:]] = glob.glob("."+STATIC_URL+"loadout/"+i[17:]+"/*")
        context['filenames']=filenames
        return render(request, "skin_master_leaderboard.html",context=context)    

    def skin_master_about(request):
        types = glob.glob("."+STATIC_URL+"loadout/*")
        filenames = {}
        context = {}
        for i in types:
            filenames[i[17:]] = glob.glob("."+STATIC_URL+"loadout/"+i[17:]+"/*")
        context['filenames']=filenames
        return render(request, "skin_master_about.html",context=context)    

    def skin_master_report_bug(request):
        types = glob.glob("."+STATIC_URL+"loadout/*")
        filenames = {}
        context = {}
        for i in types:
            filenames[i[17:]] = glob.glob("."+STATIC_URL+"loadout/"+i[17:]+"/*")
        context['filenames']=filenames
        return render(request, "skin_master_report_bug.html",context=context)    