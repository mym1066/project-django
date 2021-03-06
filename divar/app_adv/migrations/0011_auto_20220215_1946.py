# Generated by Django 3.2.2 on 2022-02-15 16:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app_category', '0003_rename_advertiscategory_appcategory'),
        ('app_adv', '0010_remove_addadvertis_categories'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='addadvertis',
            name='advertis',
        ),
        migrations.RemoveField(
            model_name='addadvertis',
            name='phone_number',
        ),
        migrations.AddField(
            model_name='addadvertis',
            name='Phone_Number',
            field=models.CharField(blank=True, max_length=12, verbose_name='شماره تماس'),
        ),
        migrations.AddField(
            model_name='addadvertis',
            name='categories',
            field=models.ManyToManyField(blank=True, to='app_category.AppCategory', verbose_name='دسته بندی ها'),
        ),
        migrations.AlterField(
            model_name='addadvertis',
            name='image',
            field=models.ImageField(blank=True, max_length=20, null=True, upload_to='', verbose_name='عکس'),
        ),
        migrations.AlterField(
            model_name='addadvertis',
            name='location',
            field=models.CharField(max_length=50, verbose_name='موقعیت'),
        ),
        migrations.AlterField(
            model_name='advertisgallery',
            name='advertis',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app_adv.advertis', verbose_name='اگهی'),
        ),
    ]
