from apscheduler.schedulers.background import BackgroundScheduler 
from apscheduler.triggers.cron import CronTrigger
from playground.views import WebAppViewset



def start():
    scheduler = BackgroundScheduler()
    price = WebAppViewset()
    rates = WebAppViewset()
    weekly = WebAppViewset()
    scheduler.add_job(price.save_price_data,"interval",minutes=10,id="caseprice_001",replace_existing=True)
    scheduler.add_job(rates._save_conversion_rates,"interval",minutes=1440,id="currencyrates_001",replace_existing=True)
    scheduler.add_job(weekly.change_weekly, trigger='cron', day_of_week='sun',hour=23,minute=59)
    scheduler.start()

