from django.db.models import Q
from django.db import models
import os
from app_category.models import AppCategory
from django.forms import ModelForm
from phonenumber_field.modelfields import PhoneNumberField


# from django.contrib.gis.db import models
# from django.contrib.gis.geos import Point


def get_filename_ext(filepath):
    base_name = os.path.basename(filepath)
    name, ext = os.path.splitext(base_name)
    return name, ext


def upload_image_path(instance, filename):
    name, ext = get_filename_ext(filename)
    final_name = f"{instance.id}-{instance.title}{ext}"
    return f"advertis/{final_name}"


def upload_gallery_image_path(instance, filename):
    name, ext = get_filename_ext(filename)
    final_name = f"{instance.id}-{instance.title}{ext}"
    return f"advertis/galleries/{final_name}"


# Create your models here.

class AdvertisManager(models.Manager):
    def get_active_advertis(self):
        return self.get_queryset().filter(active=True)

    def get_advertis_by_category(self, category_name):
        return self.get_queryset().filter(categories__name__iexact=category_name, active=True)

    def get_by_name(self, advertis_name):
        qs = self.get_queryset().filter(name=advertis_name)
        if qs.count() == 1:
            return qs.first()
        else:
            return None

    def get_by_id(self, advertis_id):
        qs = self.get_queryset().filter(id=advertis_id)
        if qs.count() == 1:
            return qs.first()
        else:
            return None

            # def search(self, query):

    #     lookup = (
    #             Q(title__icontains=query) |
    #             Q(description__icontains=query) |
    #             Q(tag__title__icontains=query)
    #     )
    #     return self.get_queryset().filter(lookup, active=True).distinct()


class Advertis(models.Model):
    title = models.CharField(max_length=150, verbose_name='عنوان')
    description = models.TextField(verbose_name='توضیحات')
    price = models.IntegerField(verbose_name='قیمت')
    image = models.ImageField(upload_to='upload_image_path/', null=True, blank=True, verbose_name='تصویر')
    active = models.BooleanField(default=False, verbose_name='وجود دارد  / حذف شده')
    # review = models.IntegerField(verbose_name='بازدید')
    # Shortdescription =models.IntegerField(verbose_name='توضیحات')
    categories = models.ForeignKey(AppCategory,on_delete=models.CASCADE, blank=True, verbose_name='دسته بندی ها')
    phone_number = models.CharField(max_length=12, blank=True, verbose_name='شماره تماس')
    location = models.CharField(max_length=50, verbose_name="موقعیت")
    website = models.CharField(max_length=20, verbose_name="وب سایت")

    objects = AdvertisManager()

    class Meta:
        verbose_name = 'اگهی'
        verbose_name_plural = 'اگهی ها'
        ordering = ('-id',)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return f"/advertis/{self.id}/{self.title.replace('', '-')}"

    @classmethod
    def search(cls, query):
        lookup = (
                Q(title__icontains=query) |
                Q(description__icontains=query)
        )
        return cls.objects.filter(lookup, active=True).distinct()




class Addadvertis(models.Model):
    categories = models.ManyToManyField(AppCategory, blank=True, verbose_name='دسته بندی ها')
    title = models.CharField(max_length=150, verbose_name='عنوان')
    phone_number = models.CharField(max_length=12, blank=True, verbose_name='شماره تماس')
    location = models.CharField(max_length=50, verbose_name="موقعیت")
    description = models.TextField(verbose_name=' توضیحات تکمیلی')
    price = models.IntegerField(verbose_name='قیمت')
    website = models.CharField(max_length=20, verbose_name="وب سایت")
    image = models.ImageField(max_length=20, verbose_name='عکس', null=True, blank=True)
    objects = AdvertisManager()

    class Meta:
        db_table = "addadvertis"

    class Meta:
        verbose_name = 'ثبت آگهی'
        verbose_name_plural = 'اگهی های ثبت شده '

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return f"/advertis/{self.id}/{self.title.replace('', '-')}"


class AdvertisGallery(models.Model):
    title = models.CharField(max_length=150, verbose_name='عنوان')
    image = models.ImageField(upload_to=upload_gallery_image_path, verbose_name='تصویر')

    # advertis = models.ForeignKey(Advertis, on_delete=models.CASCADE, verbose_name='اگهی')

    class Meta:
        verbose_name = 'تصویر'
        verbose_name_plural = 'تصاویر'

    def __str__(self):
        return self.title

# class Category(models.Model):
#     parent = models.ForeignKey('self', default=None, null=True, blank=True, on_delete=models.SET_NULL,
#                                related_name="children", verbose_name="زیردسته")
#     title = models.CharField(max_length=200, verbose_name="عنوان دسته بندی")
#     slug = models.SlugField(max_length=100, unique=True, verbose_name="آدرس دسته بندی")
#     status = models.BooleanField(default=True, verbose_name="آیا نمایش داده شود؟")
#     position = models.IntegerField(verbose_name="پوزیشن")

#     def __str__(self):
#         return self.name


#
# class Stack(models.Model):
#   location = models.PointField(geography=True, spatial_index=True)

# class Client(models.Model):
#     phone_number = PhoneField(blank=True, help_text='Contact phone number')
