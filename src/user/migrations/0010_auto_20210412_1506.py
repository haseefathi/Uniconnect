# Generated by Django 2.1 on 2021-04-12 11:06

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0009_auto_20210412_1321'),
    ]

    operations = [
        migrations.AlterField(
            model_name='siteuser',
            name='toefl_score',
            field=models.IntegerField(blank=True, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(120)]),
        ),
    ]
