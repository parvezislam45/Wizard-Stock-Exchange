from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import ContactMessage
from .serializers import ContactMessageSerializer
from rest_framework.decorators import api_view

@api_view(['POST'])
def help_center(request):
    if request.method == 'POST':
        serializer = ContactMessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ContactMessageViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
