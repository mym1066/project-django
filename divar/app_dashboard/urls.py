from django.urls import path
from .views import dashboard,dashboardaddlisting,dashboardreviews,dashboardlisting,dashboardwishlist,dashboardmyprofile,footerdash,dashboardusers,sidebardash



urlpatterns = [
    path('dashboard',dashboard),
    path('dashboardreviews',dashboardreviews),
    path('dashboardlisting',dashboardlisting),
    path('dashboardwishlist',dashboardwishlist),
    path('dashboardmyprofile',dashboardmyprofile),
    path('dashboardusers',dashboardusers),
    path('footerdash', footerdash, name="footerdash"),
    path('sidebardash', sidebardash, name="sidebardash"),
    

       
]