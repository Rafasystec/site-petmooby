from django.shortcuts import render

# Create your views here.

# Create your views here.

def index(request):
    return render(request,'index.html')

def terms(request):
    return render(request,'pages/terms.html')

def terms_en(request):
    return render(request,'pages/terms_en.html')