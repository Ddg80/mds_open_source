# Bienvenue dans notre projet Open Source!

Our project is an open source project that uses express, mongodb. It allows you to shorten urls by encoding them.
***example***: 76G_GaqzWlTkx9_i2fP1H

# Installations

```bash
npm i -g mds_open_source
mds_open_source --port=3500 --mongo="mongodb+srv://<nom>:<Password>@urls.cqgydoc.mongodb.net/?retryWrites=true&w=majority&appName=urls" --base="http://localhost:3500"
```

- Warning: put your url mongo for example with your username and your password in --mongo=[YourUrlMongoDB]

## Display app
Here's an image of a shortcut generator in action:

![App shortcut](images/Screenshot-app.png)