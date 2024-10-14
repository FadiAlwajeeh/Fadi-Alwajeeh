from atexit import register
from django.urls import path
from .views import edit_profile, login_view, record_list, add_record, edit_record, delete_record, user_profile
from records.views import register
urlpatterns = [
    path('register/', register, name='register'),
    path('login/', login_view, name='login'),  # صفحة تسجيل الدخول
    path('', record_list, name='record_list'),  # قائمة السجلات (الجذر للتطبيق)
    path('add/', add_record, name='add_record'),  # إضافة سجل طبي
    path('edit/<int:record_id>/', edit_record, name='edit_record'),  # تعديل سجل طبي
    path('delete/<int:record_id>/', delete_record, name='delete_record'),  # حذف سجل طبي
    #path('profile/', user_profile, name='user_profile'),  # صفحة المستخدمين
    path('edit/<int:user_id>/', edit_profile, name='edit_profile'),  # صفحة تعديل المستخدم
]