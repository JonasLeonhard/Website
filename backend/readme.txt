-> to activate virtualenv:      source env/bin/activate
-> to start django server:      cd backend (activate virtualenv)
								cd src
								python manage.py runserver

------env variables:----------
->declare: 						python3
								import os
								os.environ['MAIL_NAME'] = "ENV_VARIABLE"
								
-> get variable in python:		print(os.environ['MAIL_NAME']) #/MAIL_PASS

-> IN VIRTUALENV:				export MAIL_NAME="xyz"
------Starting a new App------
-> create a new app:            python manage.py startapp comments ##com=new app name
-> add to settings.py:          add appname to INSTALLED_APPS


------Database----------------
-> create a Table in models.py
-> migrate it to the database:  python manage.py makemigrations
-> apply migration:             python manage.py migrate
-> add table to admin_panel:    from .models import Comment ## 
   in admin.py                  admin.site.register(Comment)
              
------API---------------------
-> Create Folder in App:        api directory + __init__.py
-> Create Serializer:           serializers.py + Serializer inside
-> Create View:                 views.py
-> Create Urls:                 urls.py file and urlpatterns

------Server:---------------------
-> python3 manage.py runserver

------To make a new App:---------------------

-> python3 manage.py startapp APPLICATIONNAME

-> to ad a app to the folder structure:
	-add root urls.py path
	-add app urls.py path to views
	-add views function referenced in app urls.py

-> Create 'templates' folder in App ##gets returned in views.py
	-add a--name folder inside templates folder in app
	-add classname from apps.py to root -> setting.py INSTALLED_APPS
	-pass context dictionary in render() to html file
	-create a base.html file - other files inherit from it /{% extends 'blog/		 base.html' %}

-> Create a 'static' folder with 'app' folder in it : for css styling in app folder
	-create main.css inside
	-{% load static %} loads static directory (place top of base.html)
	-<link rel="stylesheet" type= "text/css" href="{% static 'blog/main.css' %}"> 		 ###link to the css

------Database:---------------------
-> Migration: python3 manage.py makemigration ##creates default tables such as auth...
	-apply with : python3 manage.py migrate
	
-> Superuser creation 
	-python3 manage.py createsuperuser

-> Create Tables in Database in models.py
	-using djangos own database language

-> Checking the Database:
	-python3 manage.py shell
	-from blog import Post
		>>> from blog.models import Post
		>>> from django.contrib.auth.models import User
		>>> User.objects.all()
		>>> user = User.objects(filter(username='jonas') ##filter by name
		>>> post_1 = Post(title='post 01', content='content test', author = user)
		>>> post_1.save()
		
		>>>user.post_set.all() ##get all post from user
		>>>user.post_set.create(title='')... ##create post for user
		
	-make post obj more descriptive: dunder method in models.y __str__(self):
	
	-to see the database in the admin panel: register it in admin.py:
		>>>

------Profile:---------------------
to look at saved images: 		python manage.py shell	
								from django.contrib.auth.models import User
								user = User.objects.filter(username='admin_jonas')
								user.profile.image.url

------Signals:---------------------

create a signals.py file:		 signals.py
@reciever + function when 		 @receiver(post_save, sender=User)
it updates: 					 def create_Profile(sender, instance, created, **kwargs):
register in apps.py: 			 def ready(self):
        						 import users.signals
								 
------Class Based Views:---------------------
import view in <app>.views.py:   from django.views.generic import ListView
create class based view:		 class BlogListView(ListView):
in urls.py link the view:        path('', BlogListView.as_view(), name='blogs-home'),
set template in class:			 template_name
implement Detail/Create View	 Declare Classes(inherit from LoginRequiredMixin?)
								 models add get_absolute_url(self):
								 urls.py->
								     path('post/<int:pk>/', PostDetailView.as_view(), name='post-detail'),
   									 path('post/new/', PostCreateView.as_view(), name='post-create'),


------Paginator:---------------------
add paginator to 
classbased view: 				 paginate_by = ###

