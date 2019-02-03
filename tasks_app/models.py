from django.db import models

class Task(models.Model):
    task = models.CharField(max_length=150)
    status = models.BooleanField(default=True)
