from django import forms
from django.forms import ModelForm
from .models import LeaderboardCompetitiveEasyMode
from .models import LeaderboardCompetitiveMediumMode
from .models import LeaderboardCompetitiveHardMode
from .models import LeaderboardCompetitiveExpertMode
from .models import LeaderboardCompetitiveOhnepixelMode


class PostFormEasy(forms.ModelForm):
    class Meta:
        model = LeaderboardCompetitiveEasyMode
        fields = ['name', 'streak', 'rank', 'score','length']
        widgets = {
            'streak': forms.HiddenInput(),
            'rank': forms.HiddenInput(),
            'score': forms.HiddenInput(),
            'length': forms.HiddenInput(),
        }
class PostFormMedium(forms.ModelForm):
    class Meta:
        model = LeaderboardCompetitiveMediumMode
        fields = ['name', 'streak', 'rank', 'score','length']
        widgets = {
            'streak': forms.HiddenInput(),
            'rank': forms.HiddenInput(),
            'score': forms.HiddenInput(),
            'length': forms.HiddenInput(),
        }
class PostFormHard(forms.ModelForm):
    class Meta:
        model = LeaderboardCompetitiveHardMode
        fields = ['name', 'streak', 'rank', 'score','length']
        widgets = {
            'streak': forms.HiddenInput(),
            'rank': forms.HiddenInput(),
            'score': forms.HiddenInput(),
            'length': forms.HiddenInput(),
        }
class PostFormExpert(forms.ModelForm):
    class Meta:
        model = LeaderboardCompetitiveExpertMode
        fields = ['name', 'streak', 'rank', 'score','length']
        widgets = {
            'streak': forms.HiddenInput(),
            'rank': forms.HiddenInput(),
            'score': forms.HiddenInput(),
            'length': forms.HiddenInput(),
        }
class PostFormOhnepixel(forms.ModelForm):
    class Meta:
        model = LeaderboardCompetitiveOhnepixelMode
        fields = ['name', 'streak', 'rank', 'score','length']
        widgets = {
            'streak': forms.HiddenInput(),
            'rank': forms.HiddenInput(),
            'score': forms.HiddenInput(),
            'length': forms.HiddenInput(),
        }




class PostFormEasySurvival(forms.ModelForm):
    class Meta:
        model = LeaderboardCompetitiveEasyMode
        fields = ['name', 'streak', 'rank', 'score','length']
        widgets = {
            'streak': forms.HiddenInput(),
            'rank': forms.HiddenInput(),
            'score': forms.HiddenInput(),
            'length': forms.HiddenInput(),
        }
class PostFormMediumSurvival(forms.ModelForm):
    class Meta:
        model = LeaderboardCompetitiveMediumMode
        fields = ['name', 'streak', 'rank', 'score','length']
        widgets = {
            'streak': forms.HiddenInput(),
            'rank': forms.HiddenInput(),
            'score': forms.HiddenInput(),
            'length': forms.HiddenInput(),
        }
class PostFormHardSurvival(forms.ModelForm):
    class Meta:
        model = LeaderboardCompetitiveHardMode
        fields = ['name', 'streak', 'rank', 'score','length']
        widgets = {
            'streak': forms.HiddenInput(),
            'rank': forms.HiddenInput(),
            'score': forms.HiddenInput(),
            'length': forms.HiddenInput(),
        }
class PostFormExpertSurvival(forms.ModelForm):
    class Meta:
        model = LeaderboardCompetitiveExpertMode
        fields = ['name', 'streak', 'rank', 'score','length']
        widgets = {
            'streak': forms.HiddenInput(),
            'rank': forms.HiddenInput(),
            'score': forms.HiddenInput(),
            'length': forms.HiddenInput(),
        }
class PostFormOhnepixelSurvival(forms.ModelForm):
    class Meta:
        model = LeaderboardCompetitiveOhnepixelMode
        fields = ['name', 'streak', 'rank', 'score','length']
        widgets = {
            'streak': forms.HiddenInput(),
            'rank': forms.HiddenInput(),
            'score': forms.HiddenInput(),
            'length': forms.HiddenInput(),
        }