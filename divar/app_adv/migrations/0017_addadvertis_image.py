# Generated by Django 3.2.2 on 2022-02-15 20:01

import app_adv.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_adv', '0016_remove_addadvertis_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='addadvertis',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=app_adv.models.upload_image_path, verbose_name='تصویر'),
        ),
    ]
