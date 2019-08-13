from rest_framework.generics import ListAPIView, RetrieveAPIView
from blog.models import Post
from .serializers import PostSerializer


class PostListView(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDetailView(RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
