from flask import current_app as app
from flask import request, render_template, redirect
import requests
import json

@app.route('/', methods=['GET'])
def index():
    if request.method=='GET':
        return render_template('index.html')
    
@app.route('/display/<string:roll_number>', methods = ['GET'])
def display(roll_number : str):
    details = requests.get('http://localhost:5000/api/user/'+roll_number).json()
    return details