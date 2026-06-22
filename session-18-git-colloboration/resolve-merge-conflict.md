# Merge Conflict

- In Same Repository
- create 2 branch 
    +  login 
    + feature/login
- git branch login
- git branch feature/login

- go to branch login: git switch login
- edit 1 line in index.html
- stage it: git add .
- commit: git commit -m "index updated"
- push  from  same branch:: git push  origin login

- switch to feature/login repo
    + git switch feature/login

- edit same line in index.html (make some different text)
- stage it: git add .
- commit: git commit -m "index updated"
- push  from  same branch:: git push  origin feature/login


- Go  to Browser
- go to each branch and generate pull request
- go to Pull Request tab
- see the 1st pull request you can see merge possible
- merge it
- go to 2nd pull request and then you can see button merge conflict
- click on it edit file manually click on resolve conflict
- commit the same.
