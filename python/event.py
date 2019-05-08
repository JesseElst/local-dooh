import command
import addtext

class Event:
    def __init__(self, bot):
        self.bot = bot
        self.command = command.Command()

    def wait_for_event(self):
        events = self.bot.slack_client.rtm_read()
        if events and len(events) > 0:
            for event in events:
                print("EVENT:")
                print(event)
                print("EINDE EVENT")
                self.parse_event(event)

    def parse_event(self, event):
        if "message" in event:
            #changed message
            if event and 'message' in event["type"] and self.bot.bot_id in event['message']['text']:
                self.handle_event(event['message']['user'], event['message']['text'].split(self.bot.bot_id)[1].strip().lower(), event['channel'])
        else:
            #result
            if event and 'desktop_notification' in event["type"]:
                self.handle_event(event['content'], event['title'], event['channel'])

    def handle_event(self, user, command, channel):
        if command and channel:
            user = user.replace('@Greenhouse Dooh', '')
            print("Received command: " + command + " in channel: " + channel + " from user: " + user)
            addtext.toevoegen(command, channel, user)
            response = self.command.handle_command(user, command)
            self.bot.slack_client.api_call("chat.postMessage", channel=channel, text=response, as_user=True)