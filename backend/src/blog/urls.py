from django.urls import path
from . import views
from .views import (PostListView, 
                    PostDetailView, 
                    PostCreateView,
                    PostUpdateView,
                    PostDeleteView,
                    UserPostListView)

#Gets called in root -> urls.py ->  path('blog/', include('blog.urls')) 
#Calls the . views.py, wich handels the http response for that page
urlpatterns = [
    path('', PostListView.as_view(), name='blogs-home'),
    path('user/<str:username>', UserPostListView.as_view(), name='user-posts'),
    path('post/<int:pk>/', PostDetailView.as_view(), name='post-detail'),
    path('post/new/', PostCreateView.as_view(), name='post-create'),
    path('post/<int:pk>/update', PostUpdateView.as_view(), name='post-update'),
    path('post/<int:pk>/delete', PostDeleteView.as_view(), name='post-delete'),
    path('about/', views.blog_about, name='blogs-about'),
]