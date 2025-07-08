from flask import Flask, request, jsonify, Response, session
from vision_service import extract_text
from file_handler import create_text_download, create_csv_download

text = "PlaceHolder text for testing purposes"


def register_routes(app):
    @app.route('/upload', methods=['POST'])
    def convert_image_to_text():
        # text,error = extract_text()
        # if error:
        #     return jsonify({'success': False, 'error': str(error)})
        
        session['extracted_text'] = text
        print(f"Extracted text: {session['extracted_text']}")
        print(jsonify({'success': True, 'text': text}))

        return jsonify({'success': True, 'text': text})

        


    @app.route('/download-text', methods=['GET'])
    def download_text_file():
        # if error:
        #     return jsonify({'success': False, 'error': str(error)})
        
        # text = session.get('extracted_text')
        text = session['extracted_text']
        print(f"Text to download: {text}")

        print(jsonify({'success': True, 'text': text}))
        return create_text_download(text)
        


