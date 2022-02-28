from django.contrib import admin

# Register your models here.
from .models import Advertis, AdvertisGallery, Addadvertis


class AdvertisAdmin(admin.ModelAdmin):
    list_display = ['title', 'price']
    raw_id_fields = ('categories', )

    class Meta:
        model = Advertis


admin.site.register(Advertis, AdvertisAdmin)
admin.site.register(AdvertisGallery)
admin.site.register(Addadvertis)
