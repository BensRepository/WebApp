from django.contrib import admin

from .models import RSLeaderboardEntry
from .models import Weeklys
from .models import RaidsLeaderboard
from .models import GainsLeaderboard
admin.site.register(GainsLeaderboard)
admin.site.register(RaidsLeaderboard)
admin.site.register(RSLeaderboardEntry)
admin.site.register(Weeklys)