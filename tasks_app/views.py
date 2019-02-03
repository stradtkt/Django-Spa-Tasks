from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from .models import *
import json

class Tasks(View):
    def get(self, request):
        return JsonResponse({"status": "ok"})

    def post(self, request):
        body = json.loads(request.body.decode())
        Task.objects.create(body)
        return JsonResponse({"status": "ok"})

    def put(self, request, task_id):
        return JsonResponse({"status": "ok"})

    def delete(self, request, task_id):
        return JsonResponse({"status": "ok"})

class TaskDetail(View):
    def get(self, request, tasks_id):
        return JsonResponse({"status": "ok"})

    def delete(self, request, task_id):
        return JsonResponse({"status": "ok"})