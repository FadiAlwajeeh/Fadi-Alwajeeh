from django.contrib import admin # type: ignore
from django.urls import path, include  # type: ignore # تأكد من استيراد include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('students/', include('Students.urls')),  # إضافة رابط لتطبيق Students
]