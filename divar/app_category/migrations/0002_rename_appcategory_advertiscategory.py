# Generated by Django 3.2.2 on 2022-01-06 08:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app_adv', '0005_advertis_categorys'),
        ('app_category', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='AppCategory',
            new_name='AdvertisCategory',
        ),
    ]
