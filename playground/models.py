from django.db import models

class Case(models.Model):
    name = models.CharField(max_length=40)
    price = models.FloatField()
    hashid  = models.CharField(max_length=50)
    date_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name