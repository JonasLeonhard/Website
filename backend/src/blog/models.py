from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.urls import reverse


class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    date_posted = models.DateTimeField(default=timezone.now)
    
    # author = related table (User) 1toMany Relationship
    # on_delete=models.CASCADE -> when user gets deleted, delete all post of user
    author = models.ForeignKey(User, on_delete=models.CASCADE) 

    def __str__(self):
        return self.title

    # GETABSOLUTURL method: when PostCreateView creates a view- it calls this function
    # to get the url to redirect after creating a blogpost, 
    # returns as a string:
    def get_absolute_url(self):
        #you could set attribute success_url
        return reverse("post-detail", kwargs={"pk": self.pk})
    
