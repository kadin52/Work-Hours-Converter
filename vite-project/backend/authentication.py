
import json
from google.oauth2 import service_account
import os


def setup_authentication():
    credentials = os.environ.get("GOOGLE_APPLICATION_CREDENTIALS")
    if not credentials:
        os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = r"E:\Work-Hours-Converter\vite-project\backend\stable-being-455902-h1-ad26de1b685b.json"
        return None
   
    credentials_dict = json.loads(credentials)
    print(f"\\\\\\Using Google credentials from: {os.environ['GOOGLE_APPLICATION_CREDENTIALS']}")
    return service_account.Credentials.from_service_account_info(credentials_dict)

    





