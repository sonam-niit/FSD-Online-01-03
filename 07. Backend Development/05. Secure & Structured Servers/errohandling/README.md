# Create Folder

- error handling
- move to the folder 

```bash
cd errorhandling
npm init -y # package.json file
# install dependencies
npm install -D typescript tsx @types/node
npx tsc --init # create ts config file
# replace code with the given tsconfig file code
```

- create server.ts file

- you can try to run tsx server.ts
- incase tsx is giving proble then try to run manually
- tsc server.ts --ignoreConfig, node server.js

- check in browser
- localhost:3000/
- localhost:3000/api/hello
- uncommet that throw error line
- run again and check