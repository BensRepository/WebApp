from django.db import models

class Case(models.Model):
    name = models.CharField(max_length=40)
    price = models.IntegerField()
    hashid  = models.CharField(max_length=20)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name