from operator import length_hint
from re import X
import pandas as pd

array = [3, 4, 5, 6, 7]


df = pd.read_excel (r'/Users/dhruvshah/Documents/HVAC Booklet 1/HVAC-Question-Final.xlsx', sheet_name='Sheet1')

questions = df['Questions'].tolist()

option1 = df['Option 1'].tolist()
option2 = df['Option 2'].tolist()
option3 = df['Option 3'].tolist()
option4 = df['Option 4'].tolist()
answers = df['Answer'].tolist()

len = len(questions) 

answer1 = [0] * len
answer2 = [0] * len
answer3 = [0] * len
answer4 = [0] * len



for x in range(0, len):
    if answers[x] == "A":
        answer1[x] = 'true'
        answer2[x] = 'false'
        answer3[x] = 'false'
        answer4[x] = 'false'
    elif answers[x] == "B":
        answer1[x] = 'false'
        answer2[x] = 'true'
        answer3[x] = 'false'
        answer4[x] = 'false'
    elif answers[x] == "C":
        answer1[x] = 'false'
        answer2[x] = 'false'
        answer3[x] = 'true'
        answer4[x] = 'false'
    else:
        answer1[x] = 'false'
        answer2[x] = 'false'
        answer3[x] = 'false'
        answer4[x] = 'true'


print(len)



for i in range(200, len):
    print("{\n  questionText: \'" + str(questions[i]) + "\',\n  answerOptions: [\n      { answerText: \'" + str(option1[i]) + "\', isCorrect: " + str(answer1[i]) + " },\n      { answerText: \'" + str(option2[i]) + "', isCorrect: " + str(answer2[i]) + " },\n      { answerText: \'" + str(option3[i]) + "\', isCorrect: " + str(answer3[i]) + "},\n      { answerText: \'" + str(option4[i]) + "\', isCorrect: " + str(answer4[i]) + "},\n   ],\n},")



