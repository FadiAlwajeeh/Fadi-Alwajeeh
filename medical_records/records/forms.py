from django import forms
from .models import Record
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

class RecordForm(forms.ModelForm):
    class Meta:
        model = Record
        fields = [
            'patient_name',
            'id_number',
            'date_of_birth',
            'age',
            'residence',
            'phone_number',
            'visit_date',
            'specialist',
            'doctor_number',
            'medical_diagnosis',
        ]
        



class CustomUserCreationForm(UserCreationForm):
    email = forms.EmailField()
    phone_number = forms.CharField(max_length=15, required=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'phone_number', 'password1', 'password2']

class UserLoginForm(forms.Form):
    email = forms.EmailField()
    password = forms.CharField(widget=forms.PasswordInput)