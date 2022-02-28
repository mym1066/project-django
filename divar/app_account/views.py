from django.shortcuts import render, redirect, get_object_or_404
from .forms import (
    LoginForm, RegisterForm , 
   PhoneLoginForm,UserRegistrationForm#,EditProfileForm,VerifyCodeForm, UserLoginForm  
)
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth import login, get_user_model, authenticate, logout
from django.contrib.auth.models import User
from random import random
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from random import randint
from .forms import UserRegistrationForm,PhoneLoginForm#,EditProfileForm, UserLoginForm, VerifyCodeForm
#from posts.models import Post
#from kavenegar import *
#from .models import Profile



# Create your views here
def login_user(request):
    if request.user.is_authenticated:
        return redirect('/')

    login_form = LoginForm(request.POST or None)
    if login_form.is_valid():
        user_name = login_form.cleaned_data.get('user_name')
        password = login_form.cleaned_data.get('password')
        user = authenticate(request, username=user_name, password=password)
        if user is not None:
            login(request, user)
            return redirect('/dashboard')
        else:
            login_form.add_error('user_name', 'کاربری با مشخصات وارد شده یافت نشد')

    context = {
        'login_form': login_form
    }
    return render(request,'account/login.html', context)


def register(request):
    if request.user.is_authenticated:
        return redirect('/')
    register_form = RegisterForm(request.POST or None)

    if register_form.is_valid():
        user_name = register_form.cleaned_data.get('user_name')
        password = register_form.cleaned_data.get('password')
        email = register_form.cleaned_data.get('email')
        User.objects.create_user(username=user_name, email=email, password=password)
        return redirect('/login')

    context = {
        'register_form': register_form
    }
    return render(request,'account/register.html', context)



def chat(request):
    context = {
        'data': 'نمونه سایت طراحی شده با جنگو'
    }
    return render(request,'account/chat.html', context)



def user_login(request):
	next = request.GET.get('next')
	if request.method == 'POST':
		form = UserLoginForm(request.POST)
		if form.is_valid():
			cd = form.cleaned_data
			user = authenticate(request, username=cd['username'], password=cd['password'])
			if user is not None:
				login(request, user)
				messages.success(request, 'you logged in successfully', 'success')
				if next:
					return redirect(next)
				return redirect('posts:all_posts')
			else:
				messages.error(request, 'wrong username or password', 'warning')
	else:
		form = UserLoginForm()
	return render(request, 'account/login.html', {'form':form})

def user_register(request):
	if request.method == 'POST':
		form = UserRegistrationForm(request.POST)
		if form.is_valid():
			cd = form.cleaned_data
			user = User.objects.create_user(cd['username'], cd['email'], cd['password'])
			login(request, user)
			messages.success(request, 'you registered successfully', 'success')
			return redirect('posts:all_posts')
	else:
		form = UserRegistrationForm()
	return render(request, 'account/register.html', {'form':form})

def log_out(request):
    logout(request)
    return redirect('/login')



@login_required
def user_logout(request):
	logout(request)
	messages.success(request, 'you logged out successfully', 'success')
	return redirect('posts:all_posts')
@login_required
def user_dashboard(request, user_id):
	user = get_object_or_404(User, pk=user_id)
	posts = Post.objects.filter(user=user)
	self_dash = False
	if request.user.id == user_id:
		self_dash = True
	return render(request, 'account/dashboard.html', {'user':user, 'posts':posts, 'self_dash':self_dash})
	
# @login_required
# def edit_profile(request, user_id):
# 	user = get_object_or_404(User, pk=user_id)
# 	if request.method == 'POST':
# 		form = EditProfileForm(request.POST, instance=user.profile)
# 		if form.is_valid():
# 			form.save()
# 			user.email = form.cleaned_data['email']
# 			user.save()
# 			messages.success(request, 'your profile edited successfully', 'success')
# 			return redirect('account:dashboard', user_id)
# 	else:
# 		form = EditProfileForm(instance=user.profile, initial={'email':request.user.email})
# 	return render(request, 'account/edit_profile.html', {'form':form})

def login_phone(request):
	if request.method == 'POST':
		form = PhoneLoginForm(request.POST)
		if form.is_valid():
			phone = f"0{form.cleaned_data['phone']}"
			rand_num = randint(1000, 9999)
			api = KavenegarAPI('54624B564154623558564355506C59417230747550612F7456524A544F4B733535374A624830485856456B3D')
			params = {'sender':'', 'receptor':phone, 'message':rand_num}
			api.sms_send(params)
			# return redirect('account:verify', phone, rand_num)
			return redirect('account:verify', phone, rand_num)
	else:
		form = PhoneLoginForm()
	return render(request,'login_phone.html', {'form':form})


def verify(request, phone, rand_num):
	if request.method == 'POST':
		form = VerifyCodeForm(request.POST)
		if form.is_valid():
			if rand_num == form.cleaned_data['code']:
				profile = get_object_or_404(Profile, phone=phone)
				user = get_object_or_404(User, profile__id=profile.id)
				login(request, user)
				messages.success(request, 'logged in successfully', 'success')
				return redirect('posts:all_posts')
			else:
				messages.error(request, 'your code is wrong', 'warning')
	else:
		form = VerifyCodeForm()
	return render(request, 'verify.html', {'form':form})
