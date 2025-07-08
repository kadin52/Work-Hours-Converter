from flask import jsonify, send_file, Response
from vision_service import extract_text
from csv_handler import convert_text_to_csv
from io import BytesIO



def create_text_download(text):
    if not text:
        return jsonify({'success': False, 'error': 'No text to download'}), 400
    
    text_data = BytesIO(text.encode('utf-8'))

    return Response(
        text_data,
        mimetype='text/plain',
        headers={'Content-Disposition': 'attachment; filename=extracted_text.txt'})

def create_csv_download(text):
    if not text:
        return jsonify({'success': False, 'error': 'No text to download'}), 400
    
    csv_string = convert_text_to_csv(text)
    csv_data = BytesIO(csv_string.encode('utf-8'))

    return Response(
        csv_data,
        mimetype='text/csv',
        headers={'Content-Disposition': 'attachment; filename=hours.csv'}
    )