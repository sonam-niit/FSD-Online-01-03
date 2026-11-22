# Implement CORS in Typescript Project

```bash
mkdir cors-demo
cd cors-demo

npm i express cors
npm install -D typescript @types/node @types/express @types/cors

tsc --init # create tsconfig.json
# edit this file as given here
# create folder src under that server.ts file add code
# edit package.json
#  start script: "start": "node ./dist/server.js",
# edit type: "type": "module",

npx tsc # for compiling project
npm run start # for running project
# check Browser
# http://localhost:5000/api/data
```