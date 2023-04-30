from apscheduler.schedulers.background import BackgroundScheduler 
from playground.views import WebAppViewset



def start():
    scheduler = BackgroundScheduler()
    price = WebAppViewset()
    scheduler.add_job(price.save_price_data,"interval",minutes=1,id="caseprice_001",replace_existing=True)
    scheduler.start()