from django.urls import path
from . import views


urlpatterns = [
    path('advertis/', views.AdvertisListView.as_view(), name='advertis_list'),
    path('advertis/detail/', views.advertis_detail),
    path('advertis/search/', views.SearchAdvertisView.as_view(), name='advertis_search'),
    path('advertis/<category_name>/', views.AdvertisListByCategory.as_view(), name='category_advertis'),
    path('advertis/<advertisId>/<name>/', views.advertis_detail),
    path('advertis_categories_partial/', views.advertis_categories_partial, name='advertis_categories_partial'),
    path('advertis_register/', views.advertis_register),

]

