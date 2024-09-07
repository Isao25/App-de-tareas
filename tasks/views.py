from rest_framework import viewsets #Permite extender el viewsets.ModelViewSet
from .serializers import TaskSerializer
from .models import Task
# Create your views here.
class TaskVIew(viewsets.ModelViewSet):
    #Atraves de estas 2 propiedad ya se puede saber que datos seran consultados(va crear el crud que vamos a necesitar)
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
