from logic.ParserClass import SyllabusParser
from logic.CatClassifierModel import PhraseClassifier
import joblib
from flask import Flask, request, jsonify
import os
import requests
from openaicode import make_openai_request

dict_of_topics = {"Class Name": ['Class Name', 'Instructor'],
                    "Course Number": ['Course Number'],
                    "Prerequisites": ['Prerequisites'],
                    "Course Schedule": ['Days', 'Time', 'Location'],
                    "Assignments": ['Assignment', 'Due Date'],
                    "Grading": ['Category', 'Percentage']}

dict_of_topics_extra = {"Prerequisites": ['Heavy Pre-reqs'],
                        "Course Schedule": ['Flexible'],
                        "Assignments": ['Midterms/Exams'],
                        "Grading": ['Curve', 'Extra Credit']}

app = Flask(__name__)
@app.route("/")
def home():
    return "Welcome to the Syllabus Parser API!"


UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() == 'pdf'

@app.route("/api/parse", methods=["POST"])
def parse():
    # Check if a file was included in the POST request
    if "file" not in request.files:
        return jsonify({"error": "No file part"}), 400

    uploaded_file = request.files["file"]

    if uploaded_file.filename == "":
        return jsonify({"error": "No selected file"}), 400

    if not allowed_file(uploaded_file.filename):
        return jsonify({"error": "Invalid file type. Only PDF files are allowed."}), 400

    filename = os.path.join(app.config['UPLOAD_FOLDER'], uploaded_file.filename)
    uploaded_file.save(filename)
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], uploaded_file.filename)
    parser = SyllabusParser(file_path)
    bold, sections = parser.getImportantTopicSections()
    topics_observed = {}
    
    for i in range(len(bold)):
        if len(sections[i]) > 2000:
            sections[i] = sections[i][:2000]
        
        resp, ex_resp, topic = make_openai_request(bold[i], sections[i])
        data = resp.strip()
        
        if data is None or 'Nothing' in data:
            continue
        
        extra_data = ex_resp.strip() if ex_resp else None
        
        if extra_data is None or 'Nothing' in extra_data:
            topics_observed[topic] = [data]
        else:
            topics_observed[topic] = [data, extra_data]
    
    data = {}
    
    for topic in topics_observed:
        data[topic] = [topics_observed[topic]]

    return data

    


if __name__ == "__main__":
    app.run(debug=True)
