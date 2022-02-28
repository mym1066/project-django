# from django.contrib.gis import forms as gis_forms
# from django.contrib.gis.db import models as gis_models
# from mapwidgets.widgets import GooglePointFieldWidget

from django import forms
from .models import Advertis
from phonenumber_field.formfields import PhoneNumberField

#from django.contrib.auth.models import Advertis



# class GoogleAddressForm(gis_forms.ModelForm):
#     location = gis_forms.PointField(
#         widget=widgets.GooglePointFieldWidget(
#             ),
#         )
#     class Meta:
#         model = Point
#         fields = "__all__"
#         formfield_overrides = {
#             gis_models.PointField: {"widget": widgets.GooglePointFieldWidget()}
#         }


class AdvertisForm(forms.ModelForm):

    class Meta:
        model = Advertis

        fields = "__all__"


          
  

    



