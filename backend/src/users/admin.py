from django.contrib import admin
from .models import Profile

#registering profile to admin page
admin.site.register(Profile)
