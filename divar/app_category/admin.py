from django.contrib import admin

from .models import AppCategory


# Register your models here.

class AppCategoryAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'name']

    class Meta:
        model = AppCategory


admin.site.register(AppCategory, AppCategoryAdmin)
