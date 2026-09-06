## Create Package.json file

- create folder named myproject
- open terminal (CMD)

```bash
cd myproject
npm init -y
# you can see package.json file created.
```

**Let's understand how script works in package.json**

- create index.js file add simple code
- got o package.json file edit scripts
- "start": "node index.js"
- go to terminal run: npm start

## Package installation

- packages can be installed globally or locally
- globally downloaded once and used in system from any folder /drive
- npm i typescript -g (this needs to be done only onces)

## Locally installation
- installed in a perticular folder
  
```bash
npm i express # check package.json file updated with express dependecy
#  this creates/updates node_modules folder
# also creates/updates package-lock.json file
# incase if you delete node_modules folder
# just do npm install to get it back
```