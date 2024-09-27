import os
import webbrowser
from threading import Timer

def open_browser():
    webbrowser.open_new("http://127.0.0.1:8000/")

if __name__ == "__main__":
    # قم بتشغيل السيرفر
    os.system("python manage.py runserver")
    # فتح المتصفح بعد قليل من الوقت
    Timer(1, open_browser).start()