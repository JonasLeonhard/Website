from django.shortcuts import render, redirect
# flash messages: message.debug(), .info, .succes, .warning, .error
from django.contrib import messages
from users.forms import RegistrationForm, UserUpdateForm, ProfileUpdateForm
from django.contrib.auth.decorators import login_required

# Views are classes that get converted into html
# register() gets called in urls when /register path is invoked


def register(request):

    # When Posting to the /register url by using the form,
    # get the data from the post body
    # display succes flash message
    # if GET request: render creation form /register site
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            form.save()  # <- clean form data and save in database
            username = form.cleaned_data.get('username')
            messages.success(request, f'Account created for {username}')
            return redirect('login')
    else:
        form = RegistrationForm()

    return render(request, 'users/register.html', {'form': form})


@login_required  # <- DECORATOR: adds functionality to existing function
def profile(request):
    if request.method == 'POST':
        user_update_form = UserUpdateForm(request.POST, instance=request.user)
        profile_update_form = ProfileUpdateForm(request.POST,
                                                request.FILES,
                                                instance=request.user.profile)

        if user_update_form.is_valid and profile_update_form.is_valid:
            user_update_form.save()
            profile_update_form.save()

            username = user_update_form.cleaned_data.get('username')
            messages.success(request, f'Account ({username}) has been updated ')
            return redirect('profile')
    else:
        user_update_form = UserUpdateForm(instance=request.user)
        profile_update_form = ProfileUpdateForm(instance=request.user.profile)

    context = {
        'user_update_form': user_update_form,
        'profile_update_form': profile_update_form
    }
    return render(request, 'users/profile.html', context)
