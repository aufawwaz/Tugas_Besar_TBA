from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    data = None

    if request.method == 'POST':
        data = {
            "states": request.form.get('states'),
            "alphabet": request.form.get('alphabet'),
            "start_state": request.form.get('start_state'),
            "final_states": request.form.get('final_states')
        }

    return render_template('index.html', data=data)

if __name__ == '__main__':
    app.run(debug=True)