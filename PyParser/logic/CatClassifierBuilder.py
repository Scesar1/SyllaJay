import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
import pandas as pd
import joblib

data = pd.read_csv("samplepdfs/SyllaCat.csv").values.tolist()

X = [item[0] for item in data]
y = [item[1] for item in data]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

vectorizer = CountVectorizer()
X_train_vec = vectorizer.fit_transform(X_train)
X_test_vec = vectorizer.transform(X_test)

y_train = np.array(y_train)
y_test = np.array(y_test)

model = MultinomialNB()

model.fit(X_train_vec, y_train)

accuracy = model.score(X_test_vec, y_test)
print(f"Accuracy: {accuracy:.2f}")

joblib.dump(vectorizer, 'vectorizer.joblib')
joblib.dump(model, 'model.joblib')













