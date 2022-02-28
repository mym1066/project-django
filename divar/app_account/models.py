from django.db import models
import os




def get_filename_ext(filepath):
    base_name = os.path.basename(filepath)
    name, ext = os.path.splitext(base_name)
    return name, ext


def upload_image_path(instance, filename):
    name, ext = get_filename_ext(filename)
    final_name = f"{instance.id}-{instance.title}{ext}"
    return f"dashboard/{final_name}"


    def __str__(self):
        return self.title


class phoneapp(models.Model):
    title = models.CharField(max_length=150, verbose_name='شماره تماس')
    phone = models.PositiveIntegerField(null=True, blank=True)

    class Meta:
        verbose_name = ' شماره تماس ها'
        verbose_name_plural = 'شماره تماس'

    def __str__(self):
        return self.title
