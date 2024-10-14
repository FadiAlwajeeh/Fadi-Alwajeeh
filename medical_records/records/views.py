# records/views.py

from pyexpat.errors import messages
from django.shortcuts import get_object_or_404, render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from records.models import Record
from .models import Record
from django.contrib import messages
from .forms import RecordForm # type: ignore
from django.contrib.auth import login, authenticate  # استيراد دوال تسجيل الدخول والتحقق من المستخدم
from .forms import CustomUserCreationForm, UserLoginForm
from .models import Profile
from records import models


def register(request):
    print("Request method:", request.method)
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            print("Form is valid")
            user = form.save()
            login(request, user)
            messages.success(request, 'تم إنشاء الحساب بنجاح!')  # إضافة رسالة نجاح
            return redirect('record_list')
        else:
            print("Form errors:", form.errors)
    else:
        form = CustomUserCreationForm()

    return render(request, 'records/register.html', {'form': form})

# دالة تسجيل دخول المستخدمين
def login_view(request):
    # التحقق مما إذا كانت الطلبات من نوع POST
    if request.method == 'POST':
        form = UserLoginForm(request.POST)  # إنشاء نموذج مع البيانات المرسلة
        if form.is_valid():  # التحقق مما إذا كانت البيانات المدخلة صحيحة
            email = form.cleaned_data['email']  # الحصول على البريد الإلكتروني المدخل
            password = form.cleaned_data['password']  # الحصول على كلمة المرور المدخلة
            # التحقق من صحة بيانات الاعتماد
            user = authenticate(request, username=email, password=password)
            if user is not None:  # إذا تم العثور على المستخدم
                login(request, user)  # تسجيل الدخول للمستخدم
                return redirect('record_list')  # توجيه المستخدم إلى الصفحة الرئيسية
    else:
        form = UserLoginForm()  # إذا لم يكن الطلب من نوع POST، إنشاء نموذج فارغ
    # عرض صفحة تسجيل الدخول مع النموذج
    return render(request, 'records/login.html', {'form': form})

# def login_view(request):
#     if request.method == 'POST':
#         username = request.POST['username']
#         password = request.POST['password']
#         user = authenticate(request, username=username, password=password)
#         if user is not None:
#             login(request, user)
#             return redirect('record_list')
#     return render(request, 'records/login.html')


def record_list(request):
    records = Record.objects.all()
    return render(request, 'records/record_list.html', {'records': records})



def add_record(request):
    if request.method == 'POST':
        form = RecordForm(request.POST)
        if form.is_valid():
            record = form.save(commit=False)  # عدم حفظ السجل بعد
            # تحديد ترتيب السجل بناءً على السجلات الحالية
            max_order = Record.objects.aggregate(max_order=models.Max('order'))['max_order'] or 0
            record.order = max_order + 1  # إضافة 1 إلى أكبر ترتيب موجود
            record.save()  # حفظ السجل الآن
            messages.success(request, 'تم إضافة السجل بنجاح!')
            return redirect('record_list')
    else:
        form = RecordForm()

    return render(request, 'records/add_record.html', {'form': form})


def delete_record(request, record_id):
    record = get_object_or_404(Record, id=record_id)
    record.delete()  # حذف السجل
    # إعادة ترتيب السجلات بعد الحذف
    records = Record.objects.all().order_by('order')
    for index, r in enumerate(records):
        r.order = index + 1  # إعادة تعيين ترتيب السجل
        r.save()  # حفظ التغييرات
    messages.success(request, 'تم حذف السجل بنجاح!')
    return redirect('record_list')



def edit_record(request, record_id):
    record = get_object_or_404(Record, id=record_id)
    if request.method == 'POST':
        form = RecordForm(request.POST, instance=record)
        if form.is_valid():
            form.save()
            return redirect('record_list')
    else:
        form = RecordForm(instance=record)
    return render(request, 'records/edit_record.html', {'form': form})


def user_profile(request):
    profiles = Profile.objects.all()  # جلب جميع ملفات التعريف
    return render(request, 'records/user_profile.html', {'profiles': profiles})


def edit_profile(request, user_id):
    profile = get_object_or_404(Profile, user_id=user_id)
    if request.method == 'POST':
        if request.POST.get('action') == 'delete':
            profile.delete()  # حذف ملف التعريف
            return redirect('user_profile')
        else:
            profile.phone_number = request.POST.get('phone_number')
            profile.address = request.POST.get('address')
            profile.date_of_birth = request.POST.get('date_of_birth')
            profile.medical_history = request.POST.get('medical_history')
            profile.save()
            return redirect('user_profile')
    return render(request, 'records/edit_profile.html', {'profile': profile})