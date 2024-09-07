from rest_framework  import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        # fields = ('id,title,description','done')  , Puedo nombrar cada uno de los campos
        fields = '__all__' #Esto dice que no importa cuantos campos aya se pasa todo para serializar