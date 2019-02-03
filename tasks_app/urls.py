from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^tasks$', views.Tasks.as_view()),
    url(r'^tasks/(?P<id>\d+)$', views.TaskDetail.as_view()),
]
