from django.shortcuts import render, redirect
from django.http import HttpResponse
import requests
import json
from .models import Case
from .models import Rate
from .models import LeaderboardCompetitiveEasyMode
from .models import LeaderboardCompetitiveMediumMode
from .models import LeaderboardCompetitiveHardMode
from .models import LeaderboardCompetitiveExpertMode
from .models import LeaderboardCompetitiveOhnepixelMode
from .models import LeaderboardSurvivalEasyMode
from .models import LeaderboardSurvivalMediumMode
from .models import LeaderboardSurvivalHardMode
from .models import LeaderboardSurvivalExpertMode
from .models import LeaderboardSurvivalOhnepixelMode

from .models import RSLeaderboardEntry


from .forms import PostFormEasy
from .forms import PostFormMedium
from .forms import PostFormHard
from .forms import PostFormExpert
from .forms import PostFormOhnepixel

from .forms import PostFormEasySurvival
from .forms import PostFormMediumSurvival
from .forms import PostFormHardSurvival
from .forms import PostFormExpertSurvival
from .forms import PostFormOhnepixelSurvival

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
    
    def load_rstools(request):
        return render(request,'rstools.html')
    
    def load_raids(request):
        return render(request,'Raids/raids.html')
    def load_cox(request):
        return render(request,'Raids/cox.html')
    def load_tob(request):
        return render(request,'Raids/tob.html')
    def load_toa(request):
        return render(request,'Raids/toa.html')
    
    def load_lootsimulator(request):
        return render(request,'lootsimulator.html')
    

    def load_xpleaderboard(request):
        leaderboard_data=[]
        context = {}
        for x in RSLeaderboardEntry.objects.all().values():
            leaderboard_data.append(x)
     
        context['leaderboard_data'] = leaderboard_data
        return render(request,'xpleaderboard.html',context)
    
    def load_statlookup(request):

            return render(request,'statlookup.html')

    def load_statlookupresult(request):
        name = request.POST.get('text')
        name2 = request.POST.get('text2')
        compare = request.POST.get('compare')
        type = request.POST.get('type')
        api_request2 = ""
        print(type)
        print(compare)
        if(type == "Hardcore Ironman"):
            try:
                url = "https://secure.runescape.com/m=hiscore_oldschool_hardcore_ironman/index_lite.ws?player=" +name
                api_request = requests.get(url)
                api_request.raise_for_status() 
           
  
            except:
                #api_requestHCIM = "no data returned"
                print("no data returned")
            if(compare == "True"):
                
                try:
                    url = "https://secure.runescape.com/m=hiscore_oldschool_hardcore_ironman/index_lite.ws?player=" +name2
                    api_request2 = requests.get(url)
                    api_request2.raise_for_status() 
                    api_request2 = api_request2.content
                except:
                    #api_requestHCIM = "no data returned"
                    print("no data returned hc")

        elif(type == "Ultimate Ironman"):
            try:
                url = "https://secure.runescape.com/m=hiscore_oldschool_ultimate/index_lite.ws?player=" +name
                api_request = requests.get(url)
                api_request.raise_for_status() 
            except:
                #api_requestUIM = "no data returned"
                print("no data returned")
            if(compare == "True"):
                try:
                    url = "https://secure.runescape.com/m=hiscore_oldschool_ultimate/index_lite.ws?player=" +name2
                    api_request2 = requests.get(url)
                    api_request2.raise_for_status() 
                    api_request2 = api_request2.content
                except:
                    #api_requestHCIM = "no data returned"
                    print("no data returned")
        elif(type == "Ironman"):
            try:
                url = "https://secure.runescape.com/m=hiscore_oldschool_ironman/index_lite.ws?player=" +name
                api_request = requests.get(url)
                api_request.raise_for_status() 
            except:
                #api_requestIM = "no data returned"
                print("no data returned IM")
            if(compare == "True"):
                try:
                    url = "https://secure.runescape.com/m=hiscore_oldschool_ironman/index_lite.ws?player=" +name2
                    api_request2 = requests.get(url)
                    api_request2.raise_for_status() 
                    api_request2 = api_request2.content
                except:
                    #api_requestIM = "no data returned"
                    print("no data returned IM2")
        else:
            try:
                url = "https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=" +name
                api_request = requests.get(url)
                api_request.raise_for_status() 
                type = "All" 
            except:
                print("no data returned")
                type = "All"
                return render(request,'statlookup.html')
            if(compare == "True"):
                try:
                    url = "https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=" +name2
                    api_request2 = requests.get(url)
                    api_request2.raise_for_status() 
                    api_request2 = api_request2.content
                    print(str(api_request2.content)) 
                except:
                    print("no data returned")
                    type = "All"

            

        context = {"player_data":str(api_request.content),"rsn":name,"type":type, "compare":compare,"player_data_compare":str(api_request2),"rsncompare":name2}
        return render(request,'statlookup_results.html',context=context)

    
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
                          "ESLKatowice14","DreamHack13","RMR20","ESLKatowice19","PGLKrakow17","ESLCologne15","Misc","Paris23","Copenhagen24"]

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

        types = ["machineguns","shotguns","smgs","pistols","pifles"]
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
            
      
        # type = "rifles"
        # gun2 = glob.glob("."+STATIC_URL+"skins/"+type+"/*")
        # total = 0
        # list = []
        # for i in gun2:
        #     gun = i.split("\\")[1]
        #     for j in ["grey","light_blue","blue","purple","pink","red"]:
        #         total += len(glob.glob("."+STATIC_URL+"skins/"+type+"/"+gun+"/"+j+"/*"))
        #         for x in glob.glob("."+STATIC_URL+"skins/"+type+"/"+gun+"/"+j+"/*"):

        #             list.append(x)
        # print(filenames)
        return render(request, "skin_master_practise.html",context=filenames)    
    
    def skin_master_survival(request):
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
            
      
        return render(request, "skin_master_survival.html",context=filenames)    
    
    def skin_master_ranked(request):
        types = ["machineguns","shotguns","smgs","pistols","rifles"]
        weapons = {"machineguns":[],"shotguns":[],"smgs":[],"pistols":[],"rifles":[]}
        filenames = {}
        filenames['types'] = types

        for t in types:
            weapons[t] = glob.glob("."+STATIC_URL+"skins/"+t+"/*")
            filenames[t] = []
           
            for j in weapons[t]:
                filenames[t].append(j.split("\\")[1]) 
        print(weapons[t])
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


        return render(request, "skin_master_ranked.html",context=filenames)    
    
    def skin_master_play(request):
        types = glob.glob("."+STATIC_URL+"loadout/*")
        filenames = {}
        context = {}
        for i in types:
            filenames[i[17:]] = glob.glob("."+STATIC_URL+"loadout/"+i[17:]+"/*")
        context['filenames']=filenames
        return render(request, "skin_master_play.html",context=context)    
    
    def skin_master_leaderboard_competitive_easy(request):
        context= {}
        leaderboard_data=[]
        for x in LeaderboardCompetitiveEasyMode.objects.all().values():
            leaderboard_data.append(x)
     
        context['leaderboard_data'] = leaderboard_data
      
        return render(request, "skin_master_leaderboard_competitive_easy.html",context=context)    
    
    def skin_master_leaderboard_competitive_medium(request):
        context= {}
        leaderboard_data=[]
        for x in LeaderboardCompetitiveMediumMode.objects.all().values():
            leaderboard_data.append(x)
     
        context['leaderboard_data'] = leaderboard_data
      
        return render(request, "skin_master_leaderboard_competitive_medium.html",context=context)    
    
    def skin_master_leaderboard_competitive_hard(request):
        context= {}
        leaderboard_data=[]
        for x in LeaderboardCompetitiveHardMode.objects.all().values():
            leaderboard_data.append(x)
     
        context['leaderboard_data'] = leaderboard_data
      
        return render(request, "skin_master_leaderboard_competitive_hard.html",context=context)    
    

    def skin_master_leaderboard_competitive_expert(request):
        context= {}
        leaderboard_data=[]
        for x in LeaderboardCompetitiveExpertMode.objects.all().values():
            leaderboard_data.append(x)
     
        context['leaderboard_data'] = leaderboard_data
      
        return render(request, "skin_master_leaderboard_competitive_expert.html",context=context)    
    def skin_master_leaderboard_competitive_ohnepixel(request):
        context= {}
        leaderboard_data=[]
        for x in LeaderboardCompetitiveOhnepixelMode.objects.all().values():
            leaderboard_data.append(x)
     
        context['leaderboard_data'] = leaderboard_data
      
        return render(request, "skin_master_leaderboard_competitive_ohnepixel.html",context=context)    
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
    

    def easy_leaderboard_competitive(request):
        if request.method == "POST":
            form = PostFormEasy(request.POST)
            form.save()
            return redirect("/SkinMaster/Leaderboard/Competitive/Easy/")
        else:
            form = PostFormEasy()
        return render(request,"easy_leaderboard_competitive.html", {"form": form})
    
    def medium_leaderboard_competitive(request):
        if request.method == "POST":
            form = PostFormMedium(request.POST)
            form.save()
            return redirect("/SkinMaster/Leaderboard/Competitive/Medium/")
        else:
            form = PostFormMedium()
        return render(request,"medium_leaderboard_competitive.html", {"form": form})
    
    def hard_leaderboard_competitive(request):
        if request.method == "POST":
            form = PostFormHard(request.POST)
            form.save()
            return redirect("/SkinMaster/Leaderboard/Competitive/Hard/")
        else:
            form = PostFormHard()
        return render(request,"hard_leaderboard_competitive.html", {"form": form})
    
    def expert_leaderboard_competitive(request):
        if request.method == "POST":
            form = PostFormExpert(request.POST)
            form.save()
            return redirect("/SkinMaster/Leaderboard/Competitive/Expert/")
        else:
            form = PostFormExpert()
        return render(request,"expert_leaderboard_competitive.html", {"form": form})
    

    def ohnepixel_leaderboard_competitive(request):
        if request.method == "POST":
            form = PostFormOhnepixel(request.POST)
            form.save()
            return redirect("/SkinMaster/Leaderboard/Competitive/Ohnepixel/")
        else:
            form = PostFormOhnepixel()
        return render(request,"ohnepixel_leaderboard_competitive.html", {"form": form})
    








    def skin_master_leaderboard_survival_easy(request):
        context= {}
        leaderboard_data=[]
        for x in LeaderboardSurvivalEasyMode.objects.all().values():
            leaderboard_data.append(x)
     
        context['leaderboard_data'] = leaderboard_data
      
        return render(request, "skin_master_leaderboard_survival_easy.html",context=context)    
    
    def skin_master_leaderboard_survival_medium(request):
        context= {}
        leaderboard_data=[]
        for x in LeaderboardSurvivalMediumMode.objects.all().values():
            leaderboard_data.append(x)
     
        context['leaderboard_data'] = leaderboard_data
      
        return render(request, "skin_master_leaderboard_survival_medium.html",context=context)    
    
    def skin_master_leaderboard_survival_hard(request):
        context= {}
        leaderboard_data=[]
        for x in LeaderboardSurvivalHardMode.objects.all().values():
            leaderboard_data.append(x)
     
        context['leaderboard_data'] = leaderboard_data
      
        return render(request, "skin_master_leaderboard_survival_hard.html",context=context)    
    

    def skin_master_leaderboard_survival_expert(request):
        context= {}
        leaderboard_data=[]
        for x in LeaderboardSurvivalExpertMode.objects.all().values():
            leaderboard_data.append(x)
     
        context['leaderboard_data'] = leaderboard_data
      
        return render(request, "skin_master_leaderboard_survival_expert.html",context=context)    
    def skin_master_leaderboard_survival_ohnepixel(request):
        context= {}
        leaderboard_data=[]
        for x in LeaderboardSurvivalOhnepixelMode.objects.all().values():
            leaderboard_data.append(x)
     
        context['leaderboard_data'] = leaderboard_data
      
        return render(request, "skin_master_leaderboard_survival_ohnepixel.html",context=context)    
    
    #FIX FROM HERE

    def easy_leaderboard_survival(request):
        if request.method == "POST":
            form = PostFormEasySurvival(request.POST)
     
            form.save()
            return redirect("/SkinMaster/Leaderboard/Survival/Easy/")
        else:
            form = PostFormEasy()
        return render(request,"easy_leaderboard_survival.html", {"form": form})
    
    def medium_leaderboard_survival(request):
        if request.method == "POST":
            form = PostFormMediumSurvival(request.POST)
            form.save()
            return redirect("/SkinMaster/Leaderboard/Survival/Medium/")
        else:
            form = PostFormMediumSurvival()
        return render(request,"medium_leaderboard_survival.html", {"form": form})
    
    def hard_leaderboard_survival(request):
        if request.method == "POST":
            form = PostFormHardSurvival(request.POST)
            form.save()
            return redirect("/SkinMaster/Leaderboard/Survival/Hard/")
        else:
            form = PostFormHardSurvival()
        return render(request,"hard_leaderboard_survival.html", {"form": form})
    
    def expert_leaderboard_survival(request):
        if request.method == "POST":
            form = PostFormExpertSurvival(request.POST)
            form.save()
            return redirect("/SkinMaster/Leaderboard/Survival/Expert/")
        else:
            form = PostFormExpertSurvival()
        return render(request,"expert_leaderboard_survival.html", {"form": form})
    

    def ohnepixel_leaderboard_survival(request):
        if request.method == "POST":
            form = PostFormOhnepixelSurvival(request.POST)
            form.save()
            return redirect("/SkinMaster/Leaderboard/Survival/Ohnepixel/")
        else:
            form = PostFormOhnepixel()
        return render(request,"ohnepixel_leaderboard_survival.html", {"form": form})
    