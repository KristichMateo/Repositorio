from distutils.log import debug
from urllib import request
from flask import Flask, render_template, request
from flask_mysqldb import MySQL
app = Flask(__name__, template_folder="templates")
mysql = MySQL(app)
app.config["MYSQL_HOST"] = "localhost"
app.config["MYSQL_USER"] = "root"
app.config["MYSQL_PASSWORD"] = "password"
app.config["MYSQL_DB"] = "DIARIO"

@app.route("/")
def n():
    return render_template("index.html")
    
@app.route("/economia",methods=["POST"])
def m():
    if request.method == "POST":
        comentario = request.form["comentario"]
        print(comentario)
        return render_template("noticia ejemplo.html")
if __name__ == "__main__":
    app.run(debug=True, port = 5000)