import requests


def myfunc():
    url = 'http://api.openweathermap.org/data/2.5/weather?appid=0c42f7f6b53b244c78a418f4f181282a&q=Eindhoven&units=metric'
    res = requests.get(url)
    data = res.json()
    com = data['main']['temp']
    pom = data['weather'][0]['description']
    return "Description = " + str(pom) + " /  Temperature = " + str(com) + " Celsius"
