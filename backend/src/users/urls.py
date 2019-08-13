from django.urls import path
from . import views
from users import views as user_views

#Gets called in root -> urls.py ->  path('blog/', include('blog.urls')) 
#Calls the . views.py, wich handels the http response for that page
urlpatterns = [
    path('', user_views.profile, name='profile'),
]