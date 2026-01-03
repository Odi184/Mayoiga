from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def welcome():
    return render_template('home_page.html')

@app.route('/registration')
def register():
    return render_template('registration_page.html')
if __name__ == "__main__":
    app.run(debug=True)
