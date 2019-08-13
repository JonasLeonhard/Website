# loads template, renders it to html, passes it to response
from django.shortcuts import render, get_object_or_404
from .models import Post  # <- get the table from database:
from django.contrib.auth.models import User
from django.views.generic import (ListView, 
                                  DetailView, 
                                  CreateView,
                                  UpdateView,
                                  DeleteView)
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin

# @DEPRECATED:
def blog(request):

    # Define Dictionary with key for the information we need, this gets passed to the template
    # Get the imported objects from the Table 'Post' from the .models.py -> from Database
    context = {
        'posts': Post.objects.all()
    }
    context.update({'title': "Blog Developer"})
    return render(request, 'blog/blog.html', context)

# @CALLED -> in urls.py -> path('', BlogListView.as_view(), name='blogs-home'),
class PostListView(ListView):
    model = Post

    # default looking for -> <app>/<model>_<viewtype>.html
    # changin the template to:
    template_name = 'blog/blog.html'

    # name of Variable passed to template:
    context_object_name = 'posts'

    # defines by what the view is ordered, here:
    # date_posted variable from the Post object
    # -VARIABLE defines negative ordering
    ordering = ['-date_posted']

    # @PAGINATION
    paginate_by = 10

# @CALLED -> in urls.py -> path('post/<int:pk>/', BlogDetailView.as_view(), name='post-detail'),
class PostDetailView(DetailView):
    model = Post
    # default looking for -> <app>/<model>_<viewtype>.html ->blog/post_detail.html

# @CALLED -> in urls.py -> path...
class PostCreateView(LoginRequiredMixin, CreateView):
    model = Post
    fields = ['title', 'content']
    # success_url = "/" #<-- redirect to this url

    # @Override
    def form_valid(self, form):
        # Set the author before validation and saving the form
        form.instance.author = self.request.user
        return super().form_valid(form)

# @CALLED -> in urls.py -> path...
class PostUpdateView(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    model = Post
    fields = ['title', 'content']
    # success_url = "/" #<-- redirect to this url

    # @Override UpdateView
    def form_valid(self, form):
        #Set the author before validation and saving the form
        form.instance.author = self.request.user
        return super().form_valid(form)
    # @Override UserPassesTestMixin
    def test_func(self):
        post = self.get_object() #<- get the post we are trying to update

        # is this the author of the post?
        if self.request.user == post.author:
            return True
        return False

# @CALLED -> in urls.py
class PostDeleteView(LoginRequiredMixin, UserPassesTestMixin, DeleteView):
    model = Post
    # default looking for -> <app>/<model>_<viewtype>.html ->blog/post_delete.html
    success_url = '/blog/'
    # @Override UserPassesTestMixin
    def test_func(self):
        post = self.get_object() #<- get the post we are trying to update

        # is this the author of the post?
        if self.request.user == post.author:
            return True
        return False

def blog_about(request):
    context = {
        'posts': Post.objects.all()
    }
    context.update({'title': "About Developer"})
    return render(request, 'blog/blog_about.html', context)

class UserPostListView(ListView):
    model = Post
    template_name = 'blog/user_posts.html'
    context_object_name = 'posts'
    paginate_by = 10

    def get_queryset(self):
        user = get_object_or_404(User, username= self.kwargs.get('username'))
        return Post.objects.filter(author=user).order_by('-date_posted')