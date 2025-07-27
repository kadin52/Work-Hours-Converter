import os
from flask import Flask
from flask_cors import CORS

from routes import register_routes
from vision_service import extract_text
from file_handler import create_text_download
from authentication import setup_authentication


google_credentials = setup_authentication()
app = Flask(__name__)
app.secret_key = os.environ.get("FLASK_SECRET_KEY")
CORS(app, origins=[
    "https://work-hours-frontend.onrender.com",
    "http://localhost:5173"
], supports_credentials=True)

app.config['SESSION_COOKIE_SAMESITE'] = 'None'
app.config['SESSION_COOKIE_SECURE'] = True

register_routes(app, google_credentials)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 8080)), debug=True)