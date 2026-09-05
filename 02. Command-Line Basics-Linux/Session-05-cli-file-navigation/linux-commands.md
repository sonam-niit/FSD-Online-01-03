# Linux commands

1. Print simple message
    - echo "Hello World"

2. Clear command to clear screen
    - clear

*to get already executed command use arrows up down and run it again*
*it will remeber commands till you close terminal*

3. type exit to exit from wsl
    - exit

4. getting current working directory:
    - pwd

5. change directory using cd command ~ (redirect you to root location)
    - cd ~
    - pwd (/home/sonam)

6. create directory
    - mkdir developers (it will create directory but not showing any response)
    - mkdir sonam -v (it will create directory with response)

7. verify created directories and files using
    - ls 
    - ls command will list all files and directories

8. move to the created directory
    - cd developers
*you can just type cd de(press tab) you can see suggestion as well*

9. create file and write some content to file
    - echo "My name is Sonam Soni" > data.txt
    - means create file named data.txt and print content to it
    - verify file created or not using: ls

9. read the data:
    - cat data.txt

10. go back one step:
    - cd .. (you will be out from developers folder)

# Practice Task

- create folder named project
- move to the folder
- create 2 files named file1.txt add some data
- create file2.txt add some data
- list created file
- go back to the one level up

- without moving to developers folder
- directly try to print data for file1.txt and file2.txt from home location

*Hint you can use cat command with full location of file*