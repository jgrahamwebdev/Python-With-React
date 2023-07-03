
from flask import Flask

app = Flask(__name__)

# Members API route
@app.route("/employees")
def employees():
    return {      
        "employees": ["Employee 1", "Employee 2", "Employee 3", "Employee 4"],
        "active": ["Full", "Full", "Part", "Full"],
        "performance": ["😁", "🙁", "😃", "😁"]
    }

# Way we will run our app
if __name__ == "__main__":
    app.run(debug=True)


