from django.shortcuts import render # type: ignore

def index(request):
    return render(request, 'index.html')

def index2(request):
    return render(request, 'index.html')

def home(request):
    return render(request, 'home.html')

def show(request):
    return render(request, 'show.html')

def edit(request):
    return render(request, 'edit.html')

def delete(request):
    return render(request, 'delete.html')

def base(request):
    return render(request, 'base.html')

def list_students(request):
    students = {
        "name": "Fadi",
        "marks": [90, 95, 98, 97],
        "eachsub": {
            "Software Engineering": 96,
            "Image Processing": 94,
            "Client and Server Programming": 96
        }
    }
    return render(request, 'showstudents.html', students)

# def list_students2(request):
#     students = {
#         "name": "Fadi",
#         "marks": [90, 95, 98, 97],
#         "eachsub": {
#             "Software Engineering": 96,
#             "Image Processing": 94,
#             "Client and Server Programming": 96
#         }
#     }
#     return render(request, 'showstudents.html', students)

def list_students3(request):
    students = {
        "name": "Fadi",
        "marks": [90, 95, 98, 97],
        "eachsub": {
            "Software Engineering": 96,
            "Image Processing": 94,
            "Client and Server Programming": 96
        }
    }
    return render(request, 'editstudents.html', students)

def index2(request):
    name={"fname":"fadi"}
    return render(request,'index.html',name)

