from django.conf.urls import url
from . import views
from django.urls import path,include

app_name = 'WarningSystem'

urlpatterns = [
    path('input/',views.print1,name='print1'),
    path('',views.index,name = 'index'),
]