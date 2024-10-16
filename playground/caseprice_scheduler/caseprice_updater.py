from apscheduler.schedulers.background import BackgroundScheduler 
from apscheduler.triggers.cron import CronTrigger
from playground.views import WebAppViewset



def start():
    scheduler = BackgroundScheduler()
    weekly = WebAppViewset()
    scheduler.add_job(weekly.periodically_update,"interval",minutes=3,id="leaderboardupdated_001",replace_existing=True)
    scheduler.add_job(weekly.change_weekly, trigger='cron', day_of_week='sun',hour=23,minute=59, second=59)
    scheduler.add_job(weekly.set_previous, trigger='cron', day_of_week='sun',hour=23,minute=59, second=59)
    scheduler.add_job(weekly.set_new_values, trigger='cron', day_of_week='sun',hour=23,minute=59, second=59)
    scheduler.start()

