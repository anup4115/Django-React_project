from django.db import models

class Candidate(models.Model):
    image = models.ImageField(upload_to='images/')
    name = models.CharField(max_length=100)
    job_post = models.CharField(max_length=100)
    salary = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    date_posted = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
