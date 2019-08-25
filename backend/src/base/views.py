from django.shortcuts import render

# @DEPRECATED:
def base(request):

    
    # Define Dictionary with key for the information we need, this gets passed to the template
    context = {
        'test': 'test'
    }
    return render(request, 'base/index.html', context)
