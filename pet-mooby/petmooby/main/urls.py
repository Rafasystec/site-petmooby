
from django.urls import path
from django.conf.urls import url
#from django.views.generic.base import TemplateView
from . import views

urlpatterns = [
    path('pages/terms',views.terms,name='terms'),
    path('pages/terms_en',views.terms_en,name='terms_en'),
    path('index',views.index, name="index")
    #path('/pages/terms',views.terms,name='terms')
    #url('', TemplateView.as_view(template_name="index.html"), name="index")
]