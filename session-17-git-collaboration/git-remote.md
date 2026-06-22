# Push Code to Github

- create Repository to Github
- give name to repository
- description and just create Repository

- once repository created you can see some setof commands so here you can follow
- last 3 commands

```bash
# update branch as main
git branch -M main
# set origin
git remote add origin <your_repository_link>
# link looks like this https://github.com/sonam-niit/git-demo.git
# to verify origin set or not
git remote -v # if you can see fetch and push origin its done
git push -u origin main
# means i want to push my main branch code to origin
# it will popup with browser auth
# select browser auth
# enter your credentials
# once you authenticate your codes which are commited pushed to remote repo
```
- go to remote repository and let's create README.md file
- there is button called add README.md file
- click on it and add below code

```md
# Sample README

- this is list item1
- this is list item1
- item3
- item4

## Another Heading

1. Item1
2. Item2
3. Item3
4. Item4

## Linux Command

```bash
mkdir sonam
cd sonam
echo "Test" > file1.txt
ls
```

## Html Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Title</h1>
    <p>Paragraph</p>
</body>
</html>
```

- click on commit changes
- once changes commited you can see remote repository is 1 step ahead from local repository
- how to download remote changes to local
- git pull
- you can see README.md file created to local repository as well.

## Git Clone

- copy repository files to local system

```bash
#  come out from previous project folder
git clone https://github.com/sonam-niit/FSD-Online-01-03.git

#  you can see FSD-Online-01-03 folder created
cd FSD-Online-01-03
ls
# you can see all files and folders created under this repository
git log --oneline
# you can see someones commit history
```