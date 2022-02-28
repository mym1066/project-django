from django.shortcuts import render

# Create your views here



def footerdash(request, *args, **kwargs):
    context = {
        "about_us": "این سایت فروشگاهی به وسیله ی django ایجاد شده است"
    }
    return render(request, 'shared/footerdash.html', context)

def sidebardash(request, *args, **kwargs):
    context = {
        "about_us": "این سایت فروشگاهی به وسیله ی django ایجاد شده است"
    }
    return render(request, 'shared/sidebardash.html', context)


def dashboard(request):
    context = {
        'data': 'به قسمت پیشخوان خوش آمدید'
    }
    return render(request,'dashboard.html', context)


def dashboardaddlisting(request):
    context = {
        'data': 'به قسمت پیشخوان خوش آمدید'
    }
    return render(request,'dashboardaddlisting.html', context)


def dashboardreviews(request):
    context = {
        'data': 'به قسمت پیشخوان خوش آمدید'
    }
    return render(request,'dashboardreviews.html', context)


def dashboardlisting(request):
    context = {
    }
    return render(request,'dashboardlisting.html', context)



def dashboardwishlist(request):
    context = {
        'data': 'به قسمت پیشخوان خوش آمدید'
    }
    return render(request,'dashboardwishlist.html', context)


def dashboardusers(request):
    context = {
        'data': 'به قسمت پیشخوان خوش آمدید'
    }
    return render(request,'dashboardusers.html', context)


def dashboardmyprofile(request):
    context = {
         'data': 'به قسمت پیشخوان خوش آمدید'
     }
    return render(request,'dashboardmyprofile.html', context)
