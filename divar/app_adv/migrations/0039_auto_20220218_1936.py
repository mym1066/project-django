# Generated by Django 3.2.2 on 2022-02-18 16:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_adv', '0038_alter_advertis_image'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='advertis',
            options={'ordering': ('-id',), 'verbose_name': 'اگهی', 'verbose_name_plural': 'اگهی ها'},
        ),
        migrations.RemoveField(
            model_name='advertisgallery',
            name='advertis',
        ),
        migrations.AlterField(
            model_name='advertis',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='upload_image_path/', verbose_name='تصویر'),
        ),
    ]