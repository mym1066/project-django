from django.shortcuts import render, redirect, get_object_or_404
# from .models import Advertis, AppCa
from django.views import View

from .forms import AdvertisForm
from .models import Addadvertis, Advertis
from django.views.generic import ListView
from django.http import Http404
from app_tag.models import Tag
from app_category.models import AppCategory

class AdvertisListView(ListView):
    model = Advertis
    template_name = 'advertis_list.html'
    paginate_by = 3
    queryset = Advertis.objects.filter(active=True)


def advertis_register(request):
    if request.method == "POST":
        form = AdvertisForm(request.POST)
        if form.is_valid():
            instance = form.save(commit=False)
            try:
                instance.image = request.FILES.get('image')
            except:
                pass
            instance.save()
            return redirect('/advertis')
    else:
        form = AdvertisForm()
    return render(request, 'advertis_register.html', {'form': form})


def advertis_detail(request, *args, **kwargs):
    advertis_id = kwargs['advertisId']
    advertis_name = kwargs['name']

    advertis = Advertis.objects.get_by_id(advertis_id)

    if advertis is None :# or not advertis.active:
        raise Http404('آگهی مورد نظر یافت نشد')
    context = {
        'advertis': advertis
    }
    return render(request, 'advertis_detail.html', context)


    # tag = Tag.cdd.first()
    # advertis = get_object_or_404(Advertis,slug = slug)


class SearchAdvertisView(ListView):
    template_name = 'advertis_list.html'
    paginate_by = 2

    def get_queryset(self):
        request = self.request
        query = request.GET.get('q')
        if query is not None:
            return Advertis.search(query)
        return Advertis.objects.get_active_advertis()


class AdvertisListByCategory(ListView):
    model = AppCategory
    template_name = 'advertis_list.html'
    paginate_by = 3

    def get_queryset(self):
        category_name = self.kwargs['category_name']
        category = get_object_or_404(AppCategory, name__iexact=category_name)
        return Advertis.objects.filter(categories__name__iexact=category_name,active=True)


def advertis_categories_partial(request):
    categories = AppCategory.objects.all()

    context = {
        'categories': categories,

    }
    return render(request, 'advertis_categories_partial.html', context)



# def Advertis(request):

#     queryset = Advertis.objects.all()
#     context = {'advertis': Advertis.objects.all()}
#     return render(request, "advertis_list.html",context)


# def show(request):
#     addadvertis = Addadvertis.objects.all()  
#     return render(request,"/advertis",{'addadvertis':addadvertis})  

# def edit(request, id):  
#     addadvertis = Addadvertis.objects.get(id=id)  
#     return render(request,'/advertis', {'addadvertis':addadvertis})  

# # def update(request, id):  
#     addadvertis = Addadvertis.objects.get(id=id)  
#     form = AddadvertisForm(request.POST, instance = addadvertis)  
#     if form.is_valid():  
#         form.save()  
#         return redirect("/show")  
#     return render(request, 'advertistml', {'addadvertis': addadvertis})  

# def destroy(request, id):  
#     addadvertis.delete()  
#     return redirect("/show") 


# def adv(request, *args, **kwargs):
#     context = {
#         "about_us": "با ما همیشه در دسترس باشید "
#     }
#     return render(request, 'dashboardaddlisting.html', context)


# def support(request, *args, **kwargs):
#     context = {
#         "about_us": "ما همیشه در کنار شماییم"
#     }
#   return render(request, 'support.html', context)
