# Create Typescript Project

1. Create Project
    - create folder named streamdemo
    - open terminal
    - move to that folder
    - execute command: npm init -y
    - above command will create package.json file
2. Install Typescript and Node Types
    - npm install -D typescript ts-node @types/node
    - -D for Dev Dependency
    - ts-node to run TS
    - @types/node give knowledge to node JS for APIs
3. create tsconfig.json
    - npx tsc --init
4. go to package.json file and add script:

```json 
"scripts": {
    "start": "node src/app.js"
  },
```
5. in package.json change type from commonjs to module
    "type": "module",

*when you are using commongjs it works with require when using module it works with import keywords*


## Create Large Files

- create simple js.file you cna give any name
- put below code

```js
const fs= require("fs"); 
let s='Transaction: 1001, Amount: 5000\n'; 
fs.writeFileSync('large-file.txt',s.repeat(10000000));
```

- run in the terminal
- node filename.js
- check the file you can see very large file generated.