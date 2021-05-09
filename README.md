# Resume project

Made by Sébastien Lastré.

## How to use it

You must use `json-server --watch db.json` in the root folder if you want the form to work.
Then `ng serve` and enjoy.
All the messages sent can be seen at <localhost:3000/messages>. If you changed the port listening for the new messages, you will have to modify `apiUrl` in the message service (`src/app/services/message.service.spec.ts`).
