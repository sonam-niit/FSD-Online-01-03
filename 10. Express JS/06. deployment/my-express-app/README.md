# Deploy Application on Render

- first of all create below mentioned code

```bash
mkdir my-express-app
cd my-express-app
npm init -y
npm i express dotenv

# create .env file
# create server.js
# create .gitignore
```

- for deploy create account on Render
- click on webservice
- select Repository (your github Repository)
- make sure to select correct root location like which project you wnat to deploy (this you can edit later)
- build: npm install
- start: npm start
- scroll down and add environment variables
- you can add manually as well as add using .env file (you cna upload your env file directly too)
- click on deploy
- once your site is live check url in browser
- check the same url with /health if you can see server is healthy means server is running as expected.