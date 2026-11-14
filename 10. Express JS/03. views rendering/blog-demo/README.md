# Blog App

- Create Folder named blog-demo
- move to the folder
- pcakage.json: npm init -y
- installation: npm i express pug 
- nodemon: npm i nodemon --save-dev

- change pcakage.json
    - script: "start": "nodemon app.js",
    - "type": "module",

- create index.pug in views
- blog.pug
- layout.pug is the common file extende to all other files to reuse the code.
- 404.pug for error

- run: npm run start
- you can see default blog page to browser: localhost:3000
- when you click on blog title or read more you can see the dynamic url: /blog/1 or /blog/2