from django.contrib import admin
from .models import Case
from .models import Rate
from .models import LeaderboardCompetitiveEasyMode
from .models import LeaderboardCompetitiveMediumMode
from .models import LeaderboardCompetitiveHardMode
from .models import LeaderboardCompetitiveExpertMode
from .models import LeaderboardCompetitiveOhnepixelMode

admin.site.register(Case)
admin.site.register(Rate)
admin.site.register(LeaderboardCompetitiveEasyMode)
admin.site.register(LeaderboardCompetitiveMediumMode)
admin.site.register(LeaderboardCompetitiveHardMode)
admin.site.register(LeaderboardCompetitiveExpertMode)
admin.site.register(LeaderboardCompetitiveOhnepixelMode)
