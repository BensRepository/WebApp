from django.db import models

class RSLeaderboardEntry(models.Model):
    id = models.AutoField(primary_key=True)
    rsn = models.CharField(max_length=20)
    weeklybosskillsstart = models.IntegerField()
    weeklybosskillscurrent = models.IntegerField()
    totalxpstart = models.IntegerField()
    totalxpcurrent = models.IntegerField()
    weeklyskillxpstart = models.IntegerField()
    weeklyskillxpcurrent = models.IntegerField()
    event = models.CharField(max_length=20)
    date_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.rsn
    
class Weeklys(models.Model):
    id = models.AutoField(primary_key=True)
    skill = models.CharField(max_length=45)
    boss = models.CharField(max_length=45)
