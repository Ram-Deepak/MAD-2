from flask_restful import Resource, Api 
from flask_restful import fields, marshal_with, reqparse 


# create_user_parser = reqparse.RequestParser()
# create_user_parser.add_argument('roll number')

resource_fields = {
    'roll_number' : fields.String,
    'name' : fields.String,
    'call_sign' : fields.String
}

class UserAPI(Resource):
    @marshal_with(resource_fields)
    def get(self, roll_number : str):
        details = {
            'roll_number' : str(roll_number),
            'name' : 'Ranjith',
            'call_sign' : 'Kama Sutra'
        }
        return details