# Generated by Django 3.2.2 on 2022-02-17 13:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app_adv', '0029_auto_20220217_1655'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='advertis',
            name='review',
        ),
    ]
