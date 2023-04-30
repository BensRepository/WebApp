from django.shortcuts import render
from django.http import HttpResponse
import requests
import json
from .models import Case
from rest_framework import viewsets

# Create your views here.
class WebAppViewset(viewsets.ModelViewSet):
    def load_index(request):
        print(Case.objects.all().order_by('date_modified').last())
        return render(request,'index.html')

    def load_sticker(request):
        return render(request,'sticker.html')

    def load_calculator(request):

        caseMedianPrices = {}
        Hashid = {}
        
        for case in Case.objects.all().values():
            caseMedianPrices[case['name']] = case['price']
            Hashid[case['name']] = case['hashid']
        context = {"caseMedianPrices":caseMedianPrices,'Hashid' : Hashid}


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

            ##caseMedianPrices = {}
            ##for key, value in caseUrls.items():
                ##try:
                ## data = requests.get(value).json()["median_price"]
            ## except:
                ##  data = 1.15
                ##caseMedianPrices[key] = data