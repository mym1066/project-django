# Generated by Django 3.2.2 on 2022-02-17 21:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_adv', '0037_alter_advertis_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='advertis',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='upload_image_path', verbose_name='تصویر'),
        ),
    ]