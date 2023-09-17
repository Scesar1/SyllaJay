import openai
import os

api_key = "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"

dict_of_topics = {
    "Class Name": "Give me the class name and instructor in the following format: class name, instructor",
    "Course Number": "Give me the course number in the following format: course number",
    "Prerequisites": "Give me the prerequisites for the class in a list format separated by commas",
    "Course Schedule": "Give me the course schedule in the following format: days of the week (full name), time, location",
    "Assignments": "Give me the assignments for the class in a list format separated by commas: assignment name, due date",
    "Grading": "Give me the breakdown of the grading for the class in the following format: grading category, percentage of grade",
}

dict_of_topics_extra = {
    "Prerequisites": "Are there a lot of prerequisites for this course (more than 2)?",
    "Course Schedule": "In this text, would you classify this schedule as flexible?",
    "Assignments": "Are there any midterms/final exams?",
    "Grading": "Is the grading for this class based on a curve? Are there any extra credit opportunities?",
}

master_list_of_topics = [
    "Class Name",
    "Course Number",
    "Prerequisites",
    "Course Schedule",
    "Assignments",
    "Grading",
]

openai.api_key = api_key

def simplify_topic(topic):
    message = f"Given this topic: {topic}, simplify it to one of the following: {', '.join(master_list_of_topics)}. Return the name of the topic it most relates too ONLY."

    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=message,
        max_tokens=50,
        temperature=0,
    )

    return response.choices[0].text.strip()

def make_openai_request(topic, text):
    topic = simplify_topic(topic)

    if 'Nothing' in topic or topic not in dict_of_topics.keys():
        return 'Nothing', 'Nothing', 'Nothing'

    response = openai.Edit.create(
        model="text-davinci-edit-001",
        input=f"{text}",
        instruction = f"Clean text to only include lines related to {topic} following the prompt: {dict_of_topics[topic]}. If text too short, type 'Nothing'",
        temperature=0,
    )

    if (topic in dict_of_topics_extra.keys()) and (response.choices[0].text.strip() != 'Nothing'):
        extra_response = make_openai_request_extra(topic, text)
    else:
        extra_response = None

    # Check the response status code and content
    return response.choices[0].text.strip(), extra_response, topic

def make_openai_request_extra(topic, text):
    message = f"Text:{text} answer the following question(s): {dict_of_topics_extra[topic]}. If can't answer, type 'Nothing'. Make the response format: Answer 1, Answer 2, Answer 3, etc. Answer 'Y' for yes or 'N' for no."

    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=message,
        max_tokens=100,
        temperature=0,
    )

    # Check the response status code and content
    return response.choices[0].text.strip()

