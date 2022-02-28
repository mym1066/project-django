from django.shortcuts import render, redirect
from django.views.generic import ListView
from app_sliders.models import Slider
from app_adv.models import Advertis



# from django.core.paginator import Paginator
# header code behind
# برای رندر پارشیال
def header(request, *args, **kwargs):
    context = {
        'title': 'this is title'
    }
    return render(request, 'shared/Header.html', context)


# footer code behind
def footer(request, *args, **kwargs):
    context = {
        "about_us": "این سایت  به وسیله ی django ایجاد شده است"
    }
    return render(request, 'shared/Footer.html', context)


def sidebar(request, *args, **kwargs):
    context = {
        "about_us": "این سایت  به وسیله ی django ایجاد شده است"
    }
    return render(request, 'shared/Sidebar.html', context)


def home_page(request):
    sliders = Slider.objects.all()
    context = {
        'data': 'نمونه سایت طراحی شده با جنگو',
        'sliders': sliders,
        'advertis': Advertis.objects.all(),
    }

    return render(request, 'home_page.html', context)
