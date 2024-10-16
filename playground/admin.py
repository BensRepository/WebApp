from django.contrib import admin

from .models import RSLeaderboardEntry
from .models import Weeklys
admin.site.register(Weeklys)

admin.site.register(RSLeaderboardEntry)