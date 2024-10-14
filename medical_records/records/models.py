# records/models.py

from django.db import models
from django.contrib.auth.models import User

class Record(models.Model):
    
    order = models.PositiveIntegerField(default=0)  # حقل لترتيب السجل
    patient_name = models.CharField(max_length=100)
    id_number = models.PositiveIntegerField(null=True)  # السماح بقيمة فارغة
    date_of_birth = models.DateField()
    age = models.PositiveIntegerField(default=0)  # السماح بقيمة افتراضية
    residence = models.CharField(max_length=200, null=True)  # السماح بقيمة فارغة
    phone_number = models.CharField(max_length=15, null=True)  # السماح بقيمة فارغة
    visit_date = models.DateField()
    specialist = models.CharField(max_length=100, null=True)  # السماح بقيمة فارغة
    doctor_number = models.PositiveIntegerField(null=True)  # السماح بقيمة فارغة
    medical_diagnosis = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    order = models.IntegerField()
    
    class Meta:
        ordering = ['order']  # ترتيب السجلات حسب حقل order

    def __str__(self):
        return self.patient_name






class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    # أضف حقولًا إضافية إذا لزم الأمر
    phone_number = models.CharField(max_length=15, blank=True)
    address = models.TextField(blank=True)
    
    def __str__(self):
        return self.user.username