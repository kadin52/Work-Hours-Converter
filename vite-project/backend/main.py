import os
from flask import Flask
from flask_cors import CORS

from routes import register_routes
from vision_service import extract_text
from file_handler import create_text_download


credentials_json = os.environ.get("GOOGLE_APPLICATION_CREDENTIALS")
if not credentials_json:
    os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = r"E:\Work-Hours-Converter\vite-project\backend\stable-being-455902-h1-ad26de1b685b.json"

    

app = Flask(__name__)
app.secret_key = os.environ.get("FLASK_SECRET_KEY")
CORS(app, supports_credentials=True)


register_routes(app)


if __name__ == "__main__":
    app.run(debug=True, port=int(os.environ.get("PORT", 8080)))