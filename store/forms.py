from typing import Any
from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms

from .models import Order, Customer

class CreateUserForm(UserCreationForm):
    
    def __init__(self, *args: Any, **kwargs) :
        super().__init__(*args, **kwargs)
        self.fields['username'].widget.attrs.update({
            'class':'lgn' ,
            'type':'text', 
            'placeholder':'Username' ,
            'id':'username'
        })
        self.fields['email'].widget.attrs.update({
            'class':'lgn' ,
            'type':'text', 
            'placeholder':'Email' ,
            'id':'email'
        })
        self.fields['password1'].widget.attrs.update({
            'class':'lgn' ,
            'type':'text', 
            'placeholder':'Enter Password' ,
            'id':'password'
        })
        self.fields['password2'].widget.attrs.update({
            'class':'lgn' ,
            'type':'password', 
            'placeholder':'Re-Enter Password' ,
            'id':'confpassword'
        })

    class Meta:
        model = User
        fields = ['username','email','password1','password2']