import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
import re

class PhraseClassifier:
    def __init__(self, vectorizer, model):

        self.vectorizer = vectorizer
        self.model = model

    def preprocess_text(self, text):

        pattern = r'\s+|[,;()\-]+|\n'

        tokens = re.split(pattern, text)

        tokens = [token.strip() for token in tokens if token.strip()]

        processed_text = ' '.join(tokens)

        return processed_text

    def predict_probability(self, text):
        text_processed = self.preprocess_text(text)
        
        text_vectorized = self.vectorizer.transform([text_processed])

        probability = self.model.predict_proba(text_vectorized)
        return probability[0][1]












