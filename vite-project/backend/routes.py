from flask import Flask, request, jsonify, Response, session
from vision_service import extract_text
from file_handler import create_text_download, create_csv_download




def register_routes(app, google_credentials=None):
    @app.route('/upload', methods=['POST'])
    def convert_image_to_text():
        text,error = extract_text(google_credentials)
        if error:
            print(f"Error extracting text: {error}")
            return jsonify({'success': False, 'error': str(error)})
        
        session['extracted_text'] = text
  
        print(f"Extracted text: {session['extracted_text']}")

        return jsonify({'success': True, 'text': text}), 200

        
    @app.route('/download-text', methods=['GET'])
    def download_text_file():
        text = session.get('extracted_text')
        if not text:
            return jsonify({
                "error": "no session"
            }), 400
        print(f"Text to download: {text}")
        return create_text_download(text)
        

    @app.route('/download-csv', methods=['GET'])
    def download_csv_file():
       
        text = session.get('extracted_text')
        if not text:
            return jsonify({
                "error": "no session"
            }), 400
        print(f"Text to download as CSV: {text}")
        return create_csv_download(text)
        

