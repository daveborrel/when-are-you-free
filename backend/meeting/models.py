from django.db import models


class User(models.Model):
    name = models.CharField(max_length=100, default="")

    def __str__(self):
        return self.name

class Meeting(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    time = models.DateTimeField()
    users = models.ForeignKey(User, on_delete=models.DO_NOTHING)

    def __str__(self):
        return self.title


    