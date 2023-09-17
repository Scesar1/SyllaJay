import pdfplumber
import pdfkit
import re
import pdfminer
from pdfminer.high_level import extract_text
from pdfminer.pdfparser import PDFParser
from pdfminer.pdfdocument import PDFDocument
from pdfminer.pdfpage import PDFPage
from pdfminer.layout import LAParams, LTTextLine
from pdfminer.pdfinterp import PDFResourceManager, PDFPageInterpreter
from logic.CatClassifierModel import PhraseClassifier
import joblib


class SyllabusParser:
    def __init__(self, syllabus):
        self.syllabus = syllabus
        self.vectorizer = joblib.load('logic/vectorizer.joblib')
        self.model = joblib.load('logic/model.joblib')
        self.classifier = PhraseClassifier(self.vectorizer, self.model)
        
    def getNumPages(self):
        with pdfplumber.open(self.syllabus) as pdf:
            return len(pdf.pages)
    
    def getPage(self, pageNum):
        with pdfplumber.open(self.syllabus) as pdf:
            if 0 <= pageNum < len(pdf.pages):
                return pdf.pages[pageNum].extract_text()
            else:
                return None
    
    def getMultiplePages(self, start, end):
        pages_text = []
        with pdfplumber.open(self.syllabus) as pdf:
            for pageNum in range(start, end+1):
                if 0 <= pageNum < len(pdf.pages):
                    pages_text.append(pdf.pages[pageNum].extract_text())
        return pages_text
    
    def getPagesText(self, pageNum):
        text = self.getPage(pageNum)
        return text if text is not None else ""
    
    def getMultiplePagesText(self, start, end):
        text = []
        pageNum = 0
        with pdfplumber.open(self.syllabus) as pdf:
            for page in pdf.pages:
                pageNum += 1
                if 0 <= pageNum < len(pdf.pages):
                    for char in page.chars:
                        text.append(char['text'])
        return ''.join(text)
    
    def sendTextToFile(self, text, filename="output.txt"):
        with open(filename, 'w') as f:
            f.write(text)
    
    def findBoldedText(self):
        bold_text = []
        pos = 0
        char_count = 0
        with pdfplumber.open(self.syllabus) as pdf:
            for page in pdf.pages:
                for char in page.chars:
                    if 'Bold' in char['fontname']:
                        char['pos'] = pos
                        bold_text.append(char)
                    pos += 1
                    char_count += 1
        bold_text, positioning = self.splitBoldedTextByDistance(bold_text)       
        return bold_text, positioning
    
    def splitBoldedTextByDistance(self, bold):
        bold_words = []
        positioning = []
        sec = bold[0]['pos']
        beginning = 0
        for i in range(len(bold)):
            diff = bold[i]['pos'] - bold[i-1]['pos']
            if (i > 0):
                if (diff > 2):
                    temp = ""
                    for j in range(beginning, i):
                        temp = temp + bold[j]['text']
                    alteration = len(temp) - len(temp.strip())    
                    temp.strip()
                    if (temp != " " and temp != ""):
                        bold_words.append(temp)
                        positioning.append([sec + int(alteration / 2), bold[i-1]['pos'] - int(alteration / 2)])
                    sec = bold[i]['pos']
                    beginning = i
        return bold_words, positioning
    
    def getImportantTopics(self):
        bold, pos = self.findBoldedText()
        for i in range(len(bold)):
            classification = self.classifier.predict_probability(bold[i])
            if classification < .7:
                bold[i] = ""
                pos[i] = ""
        bold = [x for x in bold if x != ""]
        pos = [x for x in pos if x != ""]
        return bold, pos
    
    def getImportantTopicSections(self):
        bold, pos = self.getImportantTopics()
        text = self.getMultiplePagesText(0, self.getNumPages())
        sections = []
        for i in range(len(bold)):
            temp = []
            if (i == len(bold)-1):
                for j in range(pos[i][1], len(text)):
                    temp.append(text[j])
            else:
                for j in range(pos[i][1], pos[i+1][0]):
                    temp.append(text[j])
            sections.append(''.join(temp))
        return bold, sections






        






    