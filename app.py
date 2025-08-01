from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

if __name__ == '__main__':
    import os
    port = int(os.environ.get('PORT', 5000))  # Use PORT env if available
    app.run(host='0.0.0.0', port=port)        # No debug mode
