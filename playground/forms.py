from django import forms
from django.forms import ModelForm
from .models import LeaderboardCompetitiveEasyMode


class PostForm(forms.ModelForm):
    class Meta:
        model = LeaderboardCompetitiveEasyMode
        fields = ['name', 'streak', 'rank', 'score']
        widgets = {
            'streak': forms.HiddenInput(),
            'rank': forms.HiddenInput(),
            'score': forms.HiddenInput(),
        }
