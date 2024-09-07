from django.db import models

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=200) #charfield sirve para decir que esto es un texto
    description = models.TextField(blank=True) #Contiene mucho texto
    done = models.BooleanField(default=False) #Manejo el estado de la tarea que por defecto es False
    def __str__(self):
        return self.title