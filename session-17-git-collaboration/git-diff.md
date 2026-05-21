# Git Diff

- this command is used in git to show diffrences between files, commits, branches or working states.
- It's one of the most important tools for understanding what changed in your code.

## example

```bash
#  CREATE FOLDER NAMED GITDIFF
# CREATE ONE app.txt file to that folder
# OPEN FOLDER inside GitBash or CMD
git init
git add app.txt
git commit -m "first commit"
git log
# NOw Modify your file
git diff
# you can see what changes made in your working directory comparing to commit
# - removed lins
# + added lines
git diff -w # ignore white spaces
git diff --word-diff # word level difference
git diff --stat # summary
git diff --name-only

# now stage it
git add . # stage all changes
git diff # here you can't see any diffrence because changes stored in staging area
git diff --staged
# This is showing difference between staging area and commit

git commit -m "second commit"
git log --oneline 
# copy first commit hash code
git diff <commit_code> HEAD
# now you can see diffrence between 2 commits
```

## Git Reset

```bash
# modify the app.txt file again
git diff # you can see modification done
git add . # stage changes
git status # verify its staged or not
git reset # stage content will be unstaged
git status # you can see content modified but unstaged
```

## Git Stash

- git stash is use to save temporary changes when you wnat to switch branch in emergency and you don't want to commit incomeplete work

```bash
git switch -c change
# now modify app.txt (add new line)
git status
git stash # changes stored temporary
git switch master
# you can check file the changes will be hidden
git switch change
# still changes are hidden to see the incomplete changes
git stash apply # you will get back your changes
# apply will restore the stash changes
# but still stash is stored in stash list
# git stash list 
# if you wnat to resore and remove the stash then use
git stash pop # use pop on replace of apply
# but if you have used apply and now you want to delete stash data
git stash drop # stash delete one by one
git stash clear # to delete all stash
```