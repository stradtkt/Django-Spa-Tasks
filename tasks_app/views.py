from django.shortcuts import render
from django.views import View


class Tasks(View):
    def get(self, request, tasks_id):
        pass

    def post(self, request, task_id):
        pass

    def delete(self, request, task_id):
        pass

class TaskDetail(View):
    def get(self, request, tasks_id):
        pass

    def delete(self, request, task_id):
        pass