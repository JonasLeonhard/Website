from django.urls import path
from . import views
from base import views as base_views



#Gets called in root -> urls.py ->  path('blog/', include('blog.urls')) 
#Calls the . views.py, wich handels the http response for that page
urlpatterns = [
    path('', base_views.base, name='index'),
]