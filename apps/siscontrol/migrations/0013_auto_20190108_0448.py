# Generated by Django 2.1.4 on 2019-01-08 10:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('siscontrol', '0012_groups'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='turno',
            field=models.CharField(blank=True, choices=[('Ma', 'Matutino'), ('Ve', 'Vespertino'), ('Mi', 'Mixto'), ('Di', 'Director')], max_length=2, null=True),
        ),
    ]