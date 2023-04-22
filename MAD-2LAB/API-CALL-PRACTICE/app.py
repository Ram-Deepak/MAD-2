from flask import Flask, request
from flask_restful import Api

app = Flask(__name__, template_folder="templates")
api = Api(app) 
app.app_context().push()

from application.controllers import * 

from application.api import UserAPI
api.add_resource(UserAPI, '/api/user/<string:roll_number>')
    
if __name__ == '__main__':
    app.run(debug=True)