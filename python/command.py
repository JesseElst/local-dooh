import weather


class Command(object):
    def __init__(self):
        self.commands = {
            "gratis" : self.gratis,
            "help" : self.help,
            "weer" : self.weer
        }

    def handle_command(self, user, command):
        response = command
        print (response)
        if response == '  weer':
            return weather.myfunc()
        elif response == '  #blond':
            response = "bedankt voor je stem!"
            return response
        elif response == '  #tripel':
            response = "Bedankt voor je stem!"
            return response
        else:
            response = "Bedankt voor je bericht"
            return response

    def gratis(self):
        return "Je weet dat het niet gratis is"

    def weer(self):
        return weather.myfunc()

    def help(self):
        response = "Currently I support the following commands:\r\n"

        for command in self.commands:
            response += command + "\r\n"

        return response