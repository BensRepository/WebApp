# Generated by Django 4.2 on 2023-04-30 13:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('playground', '0003_alter_case_hashid'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='case',
            name='date',
        ),
        migrations.AddField(
            model_name='case',
            name='ddate_modified',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
