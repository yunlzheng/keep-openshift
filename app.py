from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"
    
if __name__ == '__mian__':
    app.debug = True
    app.run('0.0.0.0')
        
    


