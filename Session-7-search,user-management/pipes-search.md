# Pipes

- pipes are used to connect output of one command to the input of another command
- do this using | - pipe operator
- comand 1 | coommand 2

```bash
touch user1.txt user2.txt user3.txt
ls
ls | wc -l  # here you can see 3 lines in output

nano numbers.txt
# type 1 5 6 3 2 7 8 9 9 7, type each number in new line
# ctrl + o press enter + then ctrl+x exit

cat numbers.txt  # print numbers as it is
cat numbers.txt | sort # you cna check numbers sorted
cat numbers.txt | sort | uniq # see duplicates removed
```

# grep : used for searching and filtering

- create simple file: nano demo.txt
- data: 
    Hello World
    Linux is Awesome
    FSD is future
    Hello MERN
- save

- let's Search Hello in file: grep 'Hello' demo.txt
- with line numbers:  grep -n 'Hello' demo.txt
- grep -n 'linux' demo.txt (show nothing because in our file l is capital)
- this case sensitive
- grep -i -n 'linux' demo.txt (this is incase sensitive)
- with above command Linux search works

**How many times Hello occure**
-  grep -c 'Hello' demo.txt #see 2 counts

**show which is not matching**
- grep -v 'Hello' demo.txt # Lines without Hello

# egrep: Extended Grep
- used for advanced pattern match
- nano data.txt and type
apple
banana
grape
cat
dog
bat
- save file
- search lines starting with b
- egrep "^b" data.txt

# fgrep: fixed search

- fgrep "cat" data.txt (searched for fixed pattern)

*if you dont wnat to use egrep and fgrep seperately we can use grep command with -E and -F flag*

- recursive search
- grep -r "error" /var/log

- check in multiple files recursively 
- edit any 2 files in same folder and add error line
- save and then run below command
-  grep -r -n "error" . ( check error is there in any file of current folder(.))

# -w in grep

- match word as it is
- edit file (nano data.txt)
- add some lines

caoncat
cattel
caterpiller
cater

- grep "cat" data.txt (you can see alll match)
- grep -w "cat" data.txt (you can see only cat as match word)

# grep -l (list file names)

- grep -l "error" *.txt

- (list only file names having erro)

## use find + grep together

-  find developers/ -name "*.txt" | grep "user"
- checking inside inside developer folder all text file then pipe it using grep user
- means you will get only those files which includes "user" in file name

