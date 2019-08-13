"""django_react_root URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.urls import path, include
from users import views as user_views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    #path('api-auth/', include('rest_framework.urls')), #?
    #ADMIN:
    path('admin/', admin.site.urls),

    #REGISTRATION:
    path('register/', user_views.register, name='register'),

    #LOGIN/OUT:
    #instead of looking in ->registration/login.html we specify namespace(template_name) as users 
    path('login/', auth_views.LoginView.as_view(template_name='users/login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(template_name='users/logout.html'), name='logout'),

    #PROFILE:
    #path('profile/', user_views.profile, name='profile'),
    path('profile/', include('users.urls'), name='profile'),
    #path('post/<int:pk>/', PostDetailView.as_view(), name='post-detail'),

    #Rest API Calls:
    path('api/', include('blog.api.urls')), #api for calling comments

    #EMAIL RESET:
    path('password-reset/', auth_views.PasswordResetView.as_view(template_name='users/password_reset.html'), name='password_reset'),
    path('password-reset/done/', auth_views.PasswordResetDoneView.as_view(template_name='users/password_reset_done.html'), name='password_reset_done'),
    path('password-reset-confirm/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(template_name='users/password_reset_confirm.html'), name='password_reset_confirm'),
    path('password-reset-complete/', auth_views.PasswordResetCompleteView.as_view(template_name='users/password_reset_complete.html'), name='password_reset_complete'),
    
    #Blog:
    path('blog/', include('blog.urls'), name='blog-home'),

    #Homepage:
    path('', include('base.urls'), name="base")

    
 
]

#Deloying Images in BROWSERMODE - DEBUG:
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
