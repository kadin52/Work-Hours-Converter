from flask import Flask, request, jsonify
from PIL import Image
from google.cloud import vision


def extract_text():
    if 'file' not in request.files:
        return "", FileNotFoundError
    # client = vision.ImageAnnotatorClient()
    # file = request.files['file']
    # print(f"Request: {request}")
    # print(f"File: {file}")
    # try:
    #     image_read = file.read()
    #     image = vision.Image(content=image_read)
    #     response = client.document_text_detection(image=image)
    #     extracted_text = response.full_text_annotation.text
    #     print(f"Extracted text: {extracted_text}")
    #     return extracted_text, None
    # except Exception as e:
    #     print(f"Error: {e}")
    #     return "", str(e)

    return "PLACEHOLDER", None

