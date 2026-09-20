# CLI fundamentals

## CLI arguments

- arguments can be accessed by process.argv
- first argument is node
- second argument is file name
- from the third you can see your arguments
- If you want skip default arguments then use slice and remove first 2.

*Create project*

- create folder
- demo

```bash
cd demo
npm i -D typescript tsx @types/node
npx tsc --init # create tsconfig file
# open config file and edit types: ["node"]
# create app.ts file
npx tsx app.ts # without arguments
npx tsx app.ts sonam 12234 soni helloworld # with arguments
# check outoputs
```

## edit run command script

- got o package.json and add scripts

```json
 "scripts": {
    "start": "npx tsx app.ts"
  },
```
- now to run file just write npm start
- with arguments: npm start sonam hello 1234