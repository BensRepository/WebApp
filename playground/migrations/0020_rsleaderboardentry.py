# Generated by Django 4.2.16 on 2024-10-06 17:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('playground', '0019_delete_rsleaderboardentry'),
    ]

    operations = [
        migrations.CreateModel(
            name='RSLeaderboardEntry',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('rsn', models.CharField(max_length=20)),
                ('weeklybosskillsstart', models.IntegerField()),
                ('weeklybosskillscurrent', models.IntegerField()),
                ('totalxpstart', models.IntegerField()),
                ('totalxpcurrent', models.IntegerField()),
                ('weeklyskillxpstart', models.IntegerField()),
                ('weeklyskillxpcurrent', models.IntegerField()),
                ('event', models.CharField(max_length=20)),
            ],
        ),
    ]