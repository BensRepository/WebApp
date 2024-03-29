# Generated by Django 4.2.3 on 2023-10-24 23:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('playground', '0012_leaderboardsurvivaleasymode_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='LeaderboardSurvivalMediumMode',
            fields=[
                ('playerID', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=20)),
                ('streak', models.IntegerField()),
            ],
        ),
        migrations.DeleteModel(
            name='LeaderboardSurvivaleMediumMode',
        ),
        migrations.RemoveField(
            model_name='leaderboardsurvivaleasymode',
            name='length',
        ),
        migrations.RemoveField(
            model_name='leaderboardsurvivaleasymode',
            name='rank',
        ),
        migrations.RemoveField(
            model_name='leaderboardsurvivaleasymode',
            name='score',
        ),
        migrations.RemoveField(
            model_name='leaderboardsurvivalexpertmode',
            name='length',
        ),
        migrations.RemoveField(
            model_name='leaderboardsurvivalexpertmode',
            name='rank',
        ),
        migrations.RemoveField(
            model_name='leaderboardsurvivalexpertmode',
            name='score',
        ),
        migrations.RemoveField(
            model_name='leaderboardsurvivalhardmode',
            name='length',
        ),
        migrations.RemoveField(
            model_name='leaderboardsurvivalhardmode',
            name='rank',
        ),
        migrations.RemoveField(
            model_name='leaderboardsurvivalhardmode',
            name='score',
        ),
        migrations.RemoveField(
            model_name='leaderboardsurvivalohnepixelmode',
            name='length',
        ),
        migrations.RemoveField(
            model_name='leaderboardsurvivalohnepixelmode',
            name='rank',
        ),
        migrations.RemoveField(
            model_name='leaderboardsurvivalohnepixelmode',
            name='score',
        ),
    ]
