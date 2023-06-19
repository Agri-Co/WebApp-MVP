import os
import requests
from flask import Flask
from dotenv import dotenv_values

app = Flask(__name__)

env_vars = dotenv_values('.env')
token = env_vars['API_CONCEPT_TOKEN']

def get_humidity(code):
    url = f"https://api.meteo-concept.com/api/forecast/nextHours?token={token}&insee={code}"
    try:
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
        humidity = data['forecast'][0]['rh2m']
        return humidity
    except requests.exceptions.RequestException as e:
        print(e)
        return "[GETHUMIDITY] Request failed"

def check_rain(code):
    url = f"https://api.meteo-concept.com/api/forecast/daily?token={token}&insee={code}"
    try:
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
        probability = data['forecast'][0]['probarain']
        rr10 = data['forecast'][0]['rr10']
        rr1 = data['forecast'][0]['rr1']
        return [probability, rr10, rr1]
    except requests.exceptions.RequestException as e:
        print(e)
        return "[CHECKRAIN] Request failed"

@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/api_meteo')
def api_meteo():
    humitidy = get_humidity("75056")
    probability, rr10, rr1 = check_rain("75056")
    return "Today's humidity is at : " + str(humitidy) + "%" + "<br \>" + "The probability that it's gonna rain in the next 24 hours is : " + str(probability) + "%"
    

if __name__ == '__main__':
    app.run()