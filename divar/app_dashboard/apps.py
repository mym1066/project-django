from django.apps import AppConfig


class AppDashboardConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'app_dashboard'





class IranianCitiesConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'iranian_cities'
    verbose_name = 'Iranian Cities'