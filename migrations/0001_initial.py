# Generated by Django 3.2.2 on 2022-01-24 18:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='phoneapp',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=150, verbose_name='شماره تماس')),
                ('phone', models.PositiveIntegerField(blank=True, null=True)),
            ],
            options={
                'verbose_name': ' شماره تماس ها',
                'verbose_name_plural': 'شماره تماس',
            },
        ),
    ]
