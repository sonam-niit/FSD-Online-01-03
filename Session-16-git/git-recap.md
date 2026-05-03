# Working with Git

- Download Git: [Download Link](https://git-scm.com/install/windows)
- install with default steps and go ahead with next next and finish.

- once installation done check git version by opening cmd or git bash.
- command: git --version

- once its done next step is configuration Git
- for this Go to Github.com and create account

- once account created successfully configure git in local
- open gitbash or normal cmd
- run below commands

```bash
git config --global user.name "your_username_of_github"
git config --global user.email "your_email_registered_with_github"

git config --global --list
```

## understand Git Commands

- create a folder gitdemo and open it in cmd or gitbash
- make it as repo: git init
- add file hello.txt (add some simple text)
- stage it: git add hello.txt
- check: git status
- commit: git commit -m "version1"
- check commit history: git log
- repeat again: change some content in hello.txt -> save
- check: git status (you can see git will tell you file is modified)
- stage again: git add hello.txt
- commit again
- check logs
- if you want shorter logs: git log --oneline