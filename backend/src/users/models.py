from django.db import models
from django.contrib.auth.models import User
from PIL import Image
from django.contrib import messages

# 1to1 Relationship userprofile to user:
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(default='default.jpg', upload_to='profile_images')

    def __str__(self):
        return f'{self.user.username} Profile'

    #@OVERRIDE: save gets run when model gets saved:
    def save(self, *args, **kwargs):
        #@DELETE old profile image upon saving the new one
        try:
            this = Profile.objects.get(id=self.id)
            if this.image != self.image:
                this.image.delete(save=False)
        except:
            pass # when new photo -> do nothing

        #-> then save the new profile  
        super(Profile, self).save(*args, **kwargs)

        #Rezize Uploaded Profile images upon saving:
        #Uses the PIL Library, 
        # images get rezized to 300x300
        try:
            img = Image.open(self.image.path)
            if img.height > 300 or img.width > 300:
                size = (300,300)
                img.thumbnail(size)
                img.save(self.image.path)
                print(f'Profile_Update_IMGRezize - user -- {self.user.username} ')
        except:
            pass


     
        
