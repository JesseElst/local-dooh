import json

def toevoegen(comment, channel, user ):
    with open('..//antwoorden.json') as f:

        fileinhoud = f.read().strip()

        #als er wat in het bestand staat
        if fileinhoud:
            information = json.loads(fileinhoud)

        #als het bestand leeg is
        else:
            information = {}
            information['chat'] = []


    data = {
        'user': user
    }
    information['chat'].append(data)

    with open('../antwoorden.json', mode='w') as flos:
        json.dump(information, flos)