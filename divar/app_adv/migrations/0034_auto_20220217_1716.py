# Generated by Django 3.2.2 on 2022-02-17 13:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_adv', '0033_auto_20220217_1708'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='advertis',
            name='review',
        ),
        migrations.AddField(
            model_name='advertis',
            name='location',
            field=models.CharField(default=22, max_length=50, verbose_name='موقعیت'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='advertis',
            name='phone_number',
            field=models.CharField(blank=True, max_length=12, verbose_name='شماره تماس'),
        ),
        migrations.AddField(
            model_name='advertis',
            name='website',
            field=models.CharField(default=235, max_length=20, verbose_name='وب سایت'),
            preserve_default=False,
        ),
    ]