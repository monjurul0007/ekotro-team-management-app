from django.db import models

class demoTable(models.Model):
    uid= models.IntegerField(unique=True)
    firstName = models.CharField(max_length=30)
    lastName = models.CharField(max_length=30)
