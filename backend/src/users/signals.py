from django.db.models.signals import post_save
from django.contrib.auth.models import User
from django.dispatch import receiver
from .models import Profile #gets created when users are updated

#post_save is a signal that gets fired on saving in the database
#User is sender

#When a User is created -> then send 'post_save' Signal
@receiver(post_save, sender=User)
def create_Profile(sender, instance, created, **kwargs):
#^ Signal is recieved by create_Profile function
#^ instace is the created user 
    if created:
        Profile.objects.create(user = instance)

#When a User is saved -> then send 'post_save' Signal to save profile too
@receiver(post_save, sender=User)
def save_Profile(sender, instance, **kwargs):
    instance.profile.save()

